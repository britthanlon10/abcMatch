// Timer code source: https://daily-dev-tips.com/posts/vanilla-javascript-timer/#google_vignette
let score = 0;
let time;

const imgElemet = document.getElementById('currentImg');
const lettersContainer = document.getElementById('lettersContainer');
const resultMessage = document.getElementById('resultMessage');
const scoreElement = document.getElementById('currentScore');

// array of image filenames
const imgFilenames = [
'alligator.svg', 'balloons.svg','cat.svg','dolphin.svg','elephant.svg',
'flower.svg','goat.svg','horse.svg','icecream.svg','jellyfish','koala.svg','ladybug.svg',
'monkey.svg','numbers.svg','octopus.svg','penguin.svg','queen.svg','raccoon.svg','snail.svg',
'turtle.svg','unicorn.svg','violin.svg','whale.svg','xylophone.svg','zebra.svg'
]

let currentImageIndex = 0; // index of current displayed image

// score worth 
const imgWorth = [
  10, 5, 5, 10, 5,
  5, 10, 10, 5, 10, 10, 10,
  10, 15, 15, 10, 15, 10, 5,
  5, 10, 15, 10, 10, 10
];

// selecting next image from array 
function getNextImage() {
  const nextImageFilename = imageFilenames [currentImageIndex];
  const nextImageAlt = nextImageFilename.split ('.')[0];

  imageElement.src = nextImageFilename;
  imageElement.alt = nextImageAlt;

  // to get continuous images even after all img have cycled through
  currentImageIndex = (currentImageIndex + 1) % imageFilenames.length;
}

// function to initilize the game with first image
function initializeGame() {
  currentImageIndex = 0; // start wiht first image
  getNextImage(); // show first image
  score = 0;
  scoreElement.textContent = score;
  resultMessage.textContent = ''
}

// add an event listener to each letter button
const letterButton = document.querySelectorAll('.letterButton');
letterButton.forEach(button=> {
  button.addEventListener('click', () => checkMatch(button));
});

// function to check if the clicked letter matches the image
function checkMatch(button) {
  const selectedLetter = button.getAttribute('data-letter');
  const imageAlt = imageElement.alt.toLowerCase();

  if (selectedLetter.toLowerCase() === imageAlt) {
    resultMessage.textContent = 'You did it!';
    score++; //Increase score on correct match
  } else {
    resultMessage.textContent = 'Oops! Try again!'
    score--; // Decreases score on incorrect selection
  }

  // update score
  scoreElement.textContent = score;
  
  // load new random image after match/mismatch
  getNextImage();
}

// load game with random image on page load
initializeGame();

// function for timer, when start clicked => restart
var timer = document.getElementById("timer");
var timerInterval;

startTimer = () => {

  clearInterval(timerInterval);
  document.getElementById("start").innerHTML = "Restart";
  let second = 0,
    minute = 0,
    hour = 0;

  timerInterval = setInterval(function () {
  
    timer.innerHTML =
      (minute < 10 ? "0" + minute : minute) +
      ":" +
      (second < 10 ? "0" + second : second);

    second++;

    if (second == 60) {
      minute++;
      second = 0;
    }

  }, 1000);
};

// score function 
const scoreDisplay=document.getElementById ('score-display');

// adding points
function addScore (){

}

// information window upon page load
const closeButton = document.getElementById('exitButton');
const infoButton = document.getElementById('initHelp');
const infoWindow = document.getElementById('controlButton');

closeButton.addEventListener('click', closeInfo);
infoButton.addEventListener('click', openInfo);

function closeInfo() {
    infoWindow.style.display = 'none';
}

function openInfo() {
    infoWindow.style.display = 'flex';
}


// adding images for game 

//const alligatorImg = document.getElementById('alligator');
//const balloonsImg = document.getElementById('balloons');
//const catImg = document.getElementById('cat');
//const dolphinImg = document.getElementById('dolphin');
//const elephantImg = document.getElementById('elephant');
//const flowerImg = document.getElementById('flower');
//const goatImg = document.getElementById('goat');
//const horseImg = document.getElementById('horse');
//const icecreamImg = document.getElementById('icecream');
//const jellyfishImg = document.getElementById('jellyfish');
//const koalaImg = document.getElementById('koala');
//const ladybugImg = document.getElementById('ladybug');
//const monkeyImg = document.getElementById('monkey');
//const numbersImg = document.getElementById('numbers');
//const octopusImg = document.getElementById('octopus');
//const penguinImg = document.getElementById('penguin');
//const queenImg = document.getElementById('queen');
//const raccoonImg = document.getElementById('raccoon');
//const snailImg = document.getElementById('snail');
//const turtleImg = document.getElementById('turtle');
//const unicornImg = document.getElementById('unicorn');
//const violinImg = document.getElementById('violin');
//const whaleImg = document.getElementById('whale');
//const xylophoneImg = document.getElementById('xylophone');
//const zebraImg = document.getElementById('zebra');

// function buttonbox() {
//   document.getElementById("next");
//   document.getElementById("back");
//   document.getElementById("skip");
