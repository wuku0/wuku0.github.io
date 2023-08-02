document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");
    const ocrOutput = document.getElementById("ocrOutput");

    copyButton.addEventListener("click", function () {

      const textarea = document.createElement("textarea");
      textarea.value = ocrOutput.textContent; 
      document.body.appendChild(textarea); 

      textarea.select();
      textarea.setSelectionRange(0, 99999); 

      try {

        document.execCommand("copy");
        alert("Text copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }

      document.body.removeChild(textarea);
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('previewImage');
    const ocrOutput = document.getElementById('ocrOutput');
    const consoleLog = document.getElementById('consoleLog');
    const exportPdfButton = document.getElementById('exportPdf');
    const exportTxtButton = document.getElementById('exportTxt');
    const exportCsvButton = document.getElementById('exportCsv');

    const detectLanguageApiKey = 'afe2309c3efb2187bc64c55e3bc046b4';

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageUrl = event.target.result;
        previewImage.src = imageUrl;
        previewImage.style.display = 'block';

        ocrOutput.textContent = '';
        consoleLog.textContent = '';

        Tesseract.recognize(
          imageUrl,
          'eng', 
          {
            logger: (m) => {

              consoleLog.textContent = m.status + ': ' + m.progress;
            },
          }
        )
          .then(({ data: { text } }) => {

            ocrOutput.textContent = text;

            fetch('https://ws.detectlanguage.com/0.2/detect', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${detectLanguageApiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ q: text }),
            })
              .then((response) => response.json())
              .then((data) => {

                const detectedLanguage = data.data.detections[0].language;
                consoleLog.textContent = `Detected Language: ${detectedLanguage}`;
              })
              .catch((error) => {
                console.error('Error during language detection:', error);

                consoleLog.textContent = 'Error during language detection';
              });
          })
          .catch((error) => {
            console.error('Error during OCR:', error);

            consoleLog.textContent = 'Error during OCR';
          });
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    });

    function exportToPdf() {
      const textToExport = ocrOutput.textContent;
      const pdfBlob = new Blob([textToExport], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = pdfUrl;
      a.download = 'ocr_output.pdf';
      a.click();
      URL.revokeObjectURL(pdfUrl);
    }

    function exportToDoc() {
        const textToExport = ocrOutput.textContent;
        const docBlob = new Blob([textToExport], { type: 'application/docx' });
        const docUrl = URL.createObjectURL(docBlob);
        const a = document.createElement('a');
        a.href = docUrl;
        a.download = 'ocr_output.docx';
        a.click();
        URL.revokeObjectURL(docUrl);
      }

    function exportToTxt() {
      const textToExport = ocrOutput.textContent;
      const txtBlob = new Blob([textToExport], { type: 'text/plain' });
      const txtUrl = URL.createObjectURL(txtBlob);
      const a = document.createElement('a');
      a.href = txtUrl;
      a.download = 'ocr_output.txt';
      a.click();
      URL.revokeObjectURL(txtUrl);
    }

    function exportToCsv() {
      const textToExport = ocrOutput.textContent;
      const csvBlob = new Blob([textToExport], { type: 'text/csv' });
      const csvUrl = URL.createObjectURL(csvBlob);
      const a = document.createElement('a');
      a.href = csvUrl;
      a.download = 'ocr_output.csv';
      a.click();
      URL.revokeObjectURL(csvUrl);
    }

    exportPdfButton.addEventListener('click', exportToPdf);
    exportTxtButton.addEventListener('click', exportToTxt);
    exportCsvButton.addEventListener('click', exportToCsv);
  });



