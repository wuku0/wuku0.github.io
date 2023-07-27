function showQuote() {
  const quoteElement = document.getElementById("quote");
  quoteElement.style.display = "block";
}
  function hideQuote() {
  const quoteElement = document.getElementById("quote");
  quoteElement.style.display = "none";
}
function checkVisitCount() {
  const visitCount = parseInt(localStorage.getItem("visitCount")) || 0;
  if (visitCount % 25 === 0) {
    showQuote();
  } else {
    hideQuote();
  }
  localStorage.setItem("visitCount", visitCount + 1);
}
checkVisitCount();


function showDate() {
  var today = new Date();
  var date = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var monthName = today.toLocaleString('default', { month: 'short' });
  var dateString = date + "." + monthName + "." + year + "";
  return dateString;
}

var dateElement = document.getElementById("date");
var currentDate = showDate();
dateElement.innerHTML = currentDate;

async function scrapeSteamProfile() {
  const proxyURL = 'https://cors-anywhere.herokuapp.com/';
  const steamProfileURL = 'https://steamcommunity.com/id/sirwuku';
  try {
    const response = await fetch(proxyURL + steamProfileURL);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const xpath = '/html/body/div[1]/div[7]/div[6]/div[1]/div[2]/div/div[1]/div[1]/div/div[2]';
    const element = doc.evaluate(xpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element) {
      const info = element.textContent;
      document.getElementById('result').textContent = info + "     on Steam";
    } else {
      document.getElementById('result').textContent = "Nothing.";
    }
  } catch (err) {
    console.error('Error:', err);
    document.getElementById('result').textContent = 'An error occurred. Please check the console.';
  }
}
  window.onload = scrapeSteamProfile;

const wuku = document.getElementById('wuku');
const letters = ['w', 'u', 'k', 'u'];
let index = 0;
let isDeleting = false;

function animate() {
  const currentText = isDeleting ? letters.slice(0, index).join('') : letters.slice(0, index + 1).join('')+ "_";
  wuku.textContent = currentText;
  index = isDeleting ? index - 1 : index + 1;
  if (index === letters.length) {
    isDeleting = true;
  } else if (index === 0) {
    isDeleting = false;
  }
  const speed = isDeleting ? 350 : 600;
  setTimeout(animate, speed);
}

animate();

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

var lastScroll = window.pageYOffset;

function toggleNavbar() {

 var currentScroll = window.pageYOffset;

 if (currentScroll > lastScroll) {

 if (currentScroll >= sticky) {

 navbar.classList.add("active");
 }
 } else {

 navbar.classList.remove("active");
 }

 lastScroll = currentScroll;
}

window.onscroll = function() {toggleNavbar()};

var buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {

  var timer;

  button.addEventListener("mouseenter", function() {

    timer = setTimeout(function() {
      button.classList.add("fa-bounce");
    }, 500);
  });

  button.addEventListener("mouseleave", function() {

    clearTimeout(timer);
    button.classList.remove("fa-bounce");
  });
});

var icons = document.querySelectorAll(".fa-solid");

icons.forEach(function(icon) {

  var timer;

  icon.addEventListener("mouseenter", function() {

    timer = setTimeout(function() {
      icon.classList.add("fa-beat");
    }, 500);
  });

  icon.addEventListener("mouseleave", function() {

    clearTimeout(timer);
    icon.classList.remove("fa-beat");
  });
});

var audioPlayer = document.getElementById("audio-player");
var playButton = document.getElementById("play-button");
var shuffleButton = document.getElementById("shuffle-button");
var icon = playButton.querySelector("i");

var mp3s = ["cdn/SCH Back In The USSR.mp", "song2.mp3", "song3.mp3"];

var currentMp3 = 0;

audioPlayer.src = mp3s[currentMp3];

playButton.addEventListener("click", function() {

  icon.classList.add("fa-beat-fade");

  setTimeout(function() {
    icon.classList.remove("fa-beat-fade");

    if (audioPlayer.paused) {
      audioPlayer.play();
    }

    else {
      audioPlayer.pause();
    }
  }, 1000);
});

shuffleButton.addEventListener("click", function() {

  var shuffleIcon = shuffleButton.querySelector("i");

  shuffleIcon.classList.add("fa-shake");

  setTimeout(function() {
    shuffleIcon.classList.remove("fa-shake");
  }, 500);

  var randomIndex = Math.floor(Math.random() * mp3s.length);

  if (randomIndex === currentMp3) {
    randomIndex = (randomIndex + 1) % mp3s.length;
  }

  currentMp3 = randomIndex;

  audioPlayer.src = mp3s[randomIndex];

  audioPlayer.play();
});