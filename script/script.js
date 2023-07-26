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

//GET STEAM RICH PRESENCE
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



//WUKU_
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

//NAVBAR
// Get the navbar element
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Initialize a variable to store the last scroll position
var lastScroll = window.pageYOffset;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function toggleNavbar() {
 // Get the current scroll position
 var currentScroll = window.pageYOffset;
 
 // Check if scrolling down or up
 if (currentScroll > lastScroll) {
 // Scrolling down
 // Check if reached the sticky position
 if (currentScroll >= sticky) {
 // Add the active class to change the background color and scale
 navbar.classList.add("active");
 }
 } else {
 // Scrolling up
 // Remove the active class to restore the transparent background and scale
 navbar.classList.remove("active");
 }
 
 // Update the last scroll position
 lastScroll = currentScroll;
}

// When the user scrolls the page, execute toggleNavbar
window.onscroll = function() {toggleNavbar()};

// buttons

// Get all the elements with the btn class
var buttons = document.querySelectorAll(".btn");

// Loop through each button
buttons.forEach(function(button) {
  // Define a variable to store the timer
  var timer;

  // Add a mouseenter event listener to the button
  button.addEventListener("mouseenter", function() {
    // Set a timer to add the fa-bounce class after 0.5 seconds
    timer = setTimeout(function() {
      button.classList.add("fa-bounce");
    }, 500);
  });

  // Add a mouseleave event listener to the button
  button.addEventListener("mouseleave", function() {
    // Clear the timer and remove the fa-bounce class
    clearTimeout(timer);
    button.classList.remove("fa-bounce");
  });
});



// Get all the elements with the fa-solid class
var icons = document.querySelectorAll(".fa-solid");

// Loop through each icon
icons.forEach(function(icon) {
  // Define a variable to store the timer
  var timer;

  // Add a mouseenter event listener to the icon
  icon.addEventListener("mouseenter", function() {
    // Set a timer to add the fa-beat class after 0.5 seconds
    timer = setTimeout(function() {
      icon.classList.add("fa-beat");
    }, 500);
  });

  // Add a mouseleave event listener to the icon
  icon.addEventListener("mouseleave", function() {
    // Clear the timer and remove the fa-beat class
    clearTimeout(timer);
    icon.classList.remove("fa-beat");
  });
});







// Get the audio player, the play button, the shuffle button and the icon element mp3 audio player audioplayer
var audioPlayer = document.getElementById("audio-player");
var playButton = document.getElementById("play-button");
var shuffleButton = document.getElementById("shuffle-button");
var icon = playButton.querySelector("i");

// Define an array of mp3 paths
var mp3s = ["cdn/SCH Back In The USSR.mp", "song2.mp3", "song3.mp3"];

// Define a variable to store the current mp3 index
var currentMp3 = 0;

// Set the audio player source to the first mp3
audioPlayer.src = mp3s[currentMp3];

// Add a click event listener to the play button
playButton.addEventListener("click", function() {
  // Add the fa-flip class to the icon
  icon.classList.add("fa-beat-fade");

  // Set a timer to remove the fa-flip class after 1 second
  setTimeout(function() {
    icon.classList.remove("fa-beat-fade");

    // If the audio player is paused, play it
    if (audioPlayer.paused) {
      audioPlayer.play();
    }
    // Otherwise, pause it
    else {
      audioPlayer.pause();
    }
  }, 1000);
});

// Add a click event listener to the shuffle button
shuffleButton.addEventListener("click", function() {
  // Get the shuffle icon element
  var shuffleIcon = shuffleButton.querySelector("i");

  // Add the fa-shake class to the shuffle icon
  shuffleIcon.classList.add("fa-shake");

  // Set a timer to remove the fa-shake class after 0.5 seconds
  setTimeout(function() {
    shuffleIcon.classList.remove("fa-shake");
  }, 500);

  // Generate a random index from 0 to mp3s.length - 1
  var randomIndex = Math.floor(Math.random() * mp3s.length);

  // If the random index is equal to the current mp3 index, increment it by one and wrap around if necessary
  if (randomIndex === currentMp3) {
    randomIndex = (randomIndex + 1) % mp3s.length;
  }

  // Set the current mp3 index to the random index
  currentMp3 = randomIndex;

  // Set the audio player source to the mp3 at the random index
  audioPlayer.src = mp3s[randomIndex];

  // Play the audio player
  audioPlayer.play();
});





