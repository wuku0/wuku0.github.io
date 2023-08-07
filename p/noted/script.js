const noteContentElement = document.getElementById('noteContent');
const saveIcon = document.getElementById('saveIcon');
let currentNoteIndex = 0;

window.onload = function () {
  const savedNote = localStorage.getItem('note');
  if (savedNote) {
    noteContentElement.value = savedNote;
  }
};

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 
function autosaveNote() {
  const noteContent = noteContentElement.value;
  localStorage.setItem('note', noteContent);
  saveIcon.style.display = 'inline';
  setTimeout(function () {
    saveIcon.style.display = 'none';
  }, 1000);
}

function saveNote() {
  const noteContent = noteContentElement.value;
  const timestamp = new Date().toISOString();
  const versionHistory = JSON.parse(localStorage.getItem('versionHistory')) || [];
  versionHistory.push({ timestamp, content: noteContent });
  localStorage.setItem('versionHistory', JSON.stringify(versionHistory));
  localStorage.setItem('note', noteContent);
  saveIcon.style.display = 'inline';
  setTimeout(function () {
    saveIcon.style.display = 'none';
  }, 1000);
  alert('Note saved successfully!');
}

function exportNote() {
  const noteContent = noteContentElement.value;
  const blob = new Blob([noteContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'note.txt';
  a.click();
  URL.revokeObjectURL(url);
}

function showVersionHistory() {
  const versionHistory = JSON.parse(localStorage.getItem('versionHistory')) || [];
  let historyHtml = '<h2>Version History</h2>';
  historyHtml += '<ul>';
  versionHistory.forEach((version, index) => {
    historyHtml += `<li><a href="#" onclick="loadVersion(${index})">${new Date(
      version.timestamp
    ).toLocaleString()}</a></li>`;
  });
  historyHtml += '</ul>';
  document.getElementById('versionHistoryContainer').innerHTML = historyHtml;
}

function loadVersion(index) {
  const versionHistory = JSON.parse(localStorage.getItem('versionHistory')) || [];
  if (index >= 0 && index < versionHistory.length) {
    const selectedVersion = versionHistory[index];
    noteContentElement.value = selectedVersion.content;
    localStorage.setItem('note', selectedVersion.content);
    alert(`Loaded version from ${new Date(selectedVersion.timestamp).toLocaleString()}`);
  }
}

function importFile(event) {
    const file = event.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = function (e) {
      const importedNoteContent = e.target.result;
      noteContentElement.value = importedNoteContent;
      localStorage.setItem('note', importedNoteContent);
      alert('File imported successfully!');
    };
    reader.readAsText(file);
  }

function copyTextareaContent() {
  const textarea = document.getElementById("noteContent");
  textarea.select();
  document.execCommand("copy");
  textarea.setSelectionRange(0, 0);
  const copyButton = document.getElementById("copyButton");
  setTimeout(() => {
  }, 1000); 
}
const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyTextareaContent);
