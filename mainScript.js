let time;
// let imagesArray = new Array (0)

const lettersContainer = document.getElementById("lettersContainer");
const resultMessage = document.getElementById("resultMessage");
// const scoreElement = document.getElementById('currentScore');

const keyValueMap = {
  a: ["A", "Images/alligator.svg", "10"],
  b: ["B", "Images/balloons.svg", "5"],
  c: ["C", "Images/cat.svg", "5"],
  d: ["D", "Images/dolphin.svg", "10"],
  e: ["E", "Images/elephant.svg", "5"],
  f: ["F", "Images/flower.svg", "5"],
  g: ["G", "Images/goat.svg", "10"],
  h: ["H", "Images/horse.svg", "5"],
  i: ["I", "Images/icecream.svg", "5"],
  j: ["J", "Images/jellyfish.svg", "10"],
  k: ["K", "Images/koala.svg", "10"],
  l: ["L", "Images/ladybug.svg", "5"],
  m: ["M", "Images/monkey.svg", "5"],
  n: ["N", "Images/numbers.svg", "5"],
  o: ["O", "Images/octopus.svg", "10"],
  p: ["P", "Images/penguin.svg", "10"],
  q: ["Q", "Images/queen.svg", "10"],
  r: ["R", "Images/raccoon.svg", "10"],
  s: ["S", "Images/snail.svg", "5"],
  t: ["T", "Images/turtle.svg", "5"],
  u: ["U", "Images/unicorn.svg", "10"],
  v: ["V", "Images/violin.svg", "10"],
  w: ["W", "Images/whale.svg", "10"],
  x: ["X", "Images/xylophone.svg", "10"],
  y: ["Y", "Images/yak.svg", "20"],
  z: ["Z", "Images/zebra.svg", "10"],
};

function buttonbox() {
  document.getElementById("start");
  document.getElementById("help");
  document.getElementById("skip");
}

let randomId;
const imageElement = document.getElementById("currentImage");


// picks random value in keyValueMap
function getRandomFirstValue(keyValueMap) {
  randomId = String.fromCharCode(97 + Math.floor(Math.random() * 26));
  const values = keyValueMap[randomId];

  if (values) {
    return values[1];
  } else {
    return null;
  }
}

const firstRandomValue = getRandomFirstValue(keyValueMap);
console.log(firstRandomValue);
imageElement.src = firstRandomValue;

function assignImage() {
  getRandomFirstValue(keyValueMap);
  imageElement.setAttribute("src", firstRandomValue);
}

// picks random letter in keyValueMap
function getRandomSecondValue(keyValueMap) {
  const values = keyValueMap[randomId];

  if (values) {
    return values[0];
  } else {
    return null;
  }
}

const secondRandomValue = getRandomSecondValue(keyValueMap);
console.log(secondRandomValue);

// picks score from keyValueMap
function getRandomThirdValue(keyValueMap) {
  const values = keyValueMap[randomId];

  if (values) {
    return values[2];
  } else {
    return null;
  }
}

function matchButtonIdToValue(buttonId) {
  const buttonLetter = buttonId.toLowerCase(); 
  const values = keyValueMap[buttonLetter];
  const matchedValue = values[0];
  if (matchedValue == secondRandomValue) {
  // code that runs when correct answer is chosen
   console.log("Nice one!")
  } else {
    // code that runs when incorrect answer is chosen
    console.log("Try again")
  }
};

const thirdRandomValue = getRandomThirdValue(keyValueMap);
console.log(thirdRandomValue);

// Get a reference to the <img> element and the button

const showImageButton = document.getElementById("showImage");
const skipButton = document.getElementById("skip");

skipButton.addEventListener("click", () => {
  assignImage();
})


function assignImage() {
  const newRandomValue = getRandomFirstValue(keyValueMap);
  imageElement.setAttribute('src', newRandomValue);
  getRandomSecondValue(keyValueMap); // Update the secondRandomValue
}

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
  welcomeMessage.style.display = "flex";
}


