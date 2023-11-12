let time;
// let imagesArray = new Array (0)

const lettersContainer = document.getElementById("lettersContainer");
const resultMessage = document.getElementById("resultMessage");
// const scoreElement = document.getElementById('currentScore');

const keyValueMap = {
  a: ["A","Images/alligator.svg", "10"],
  b: ["B","Images/balloons.svg", "5"],
  c: ["C","Images/cat.svg", "5"],
  d: ["D","Images/dolphin.svg", "10"],
  e: ["E","Images/elephant.svg", "5"],
  f: ["F","Images/flower.svg", "5"],
  g: ["G","Images/goat.svg", "10"],
  h: ["H","Images/horse.svg", "5"],
  i: ["I","Images/icecream.svg", "5"],
  j: ["J","Images/jellyfish.svg", "10"],
  k: ["K","Images/koala.svg", "10"],
  l: ["L","Images/ladybug.svg", "5"],
  m: ["M","Images/monkey.svg", "5"],
  n: ["N","Images/numbers.svg", "5"],
  o: ["O","Images/octopus.svg", "10"],
  p: ["P","Images/penguin.svg", "10"],
  q: ["Q","Images/queen.svg", "10"],
  r: ["R","Images/raccoon.svg", "10"],
  s: ["S","Images/snail.svg", "5"],
  t: ["T","Images/turtle.svg", "5"],
  u: ["U","Images/unicorn.svg", "10"],
  v: ["V","Images/violin.svg", "10"],
  w: ["W","Images/whale.svg", "10"],
  x: ["X","Images/xylophone.svg", "10"],
  y: ["Y","Images/yak.svg", "20"],
  z: ["Z","Images/zebra.svg", "10"],
};

let randomId;

function getRandomFirstValue(keyValueMap) {
  randomId = String.fromCharCode(97 + Math.floor(Math.random() * 26));
  const values = keyValueMap[randomId];

  if (values) {
    return values[1];
  } else {
    return null;
  };
}
const firstRandomValue = getRandomFirstValue(keyValueMap);
console.log(firstRandomValue);

function getRandomSecondValue(keyValueMap) {
  const values = keyValueMap[randomId];

  if (values) {
    return values[0];
  } else {
    return null;
  };
  }

  const secondRandomValue = getRandomSecondValue(keyValueMap);
  console.log(secondRandomValue);

function getRandomThirdValue(keyValueMap) {
  const values = keyValueMap[randomId];

  if (values) {
    return values[2];
  } else {
    return null;
  };
}

const thirdRandomValue = getRandomThirdValue(keyValueMap);
console.log(thirdRandomValue);

// // function to check if the clicked letter matches the image
// function checkMatch(button) {
//   const selectedLetter = button.getAttribute('data-letter');
//   const imageAlt = imgElement.alt.toLowerCase();

//   if (selectedLetter.toLowerCase() === imageAlt) {
//     resultMessage.textContent = 'You did it!';
//     score++; //Increase score on correct match
//   } else {
//     resultMessage.textContent = 'Oops! Try again!'
//     score--; // Decreases score on incorrect selection
//   }};

// const randomImage = getRandomImage(imagesArray);
// console.log(randomImage);

// Get a reference to the <img> element and the button
const imageElement = document.getElementById("currentImage");
const showImageButton = document.getElementById("showImage");

imageElement.src = firstRandomValue;


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

// information window upon page load
const closeButton = document.getElementById("exitButton");
const infoButton = document.getElementById("help");
const welcomeMessage = document.getElementById("welcomeMessage");

closeButton.addEventListener("click", closeInfo);
infoButton.addEventListener("click", openInfo);

function closeInfo() {
  welcomeMessage.style.display = "none";
}

function openInfo() {
  welcomeMessage.style.display = "flexx";
}

function buttonbox() {
  document.getElementById("next");
  document.getElementById("back");
  document.getElementById("skip");
}
