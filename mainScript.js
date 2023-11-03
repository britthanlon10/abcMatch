// //Timer code source: https://daily-dev-tips.com/posts/vanilla-javascript-timer/#google_vignette

let time;
// let imagesArray = new Array (0)

const lettersContainer = document.getElementById("lettersContainer");
const resultMessage = document.getElementById("resultMessage");
// const scoreElement = document.getElementById('currentScore');

function getRandomImage(imagesArray) {
  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * imagesArray.length);

  // Return the randomly selected image
  return imagesArray[randomIndex];
}
// array of image filenames
const imagesArray = [
  "Images/alligator.svg",
  "Images/balloons.svg",
  "Images/balloons.svg",
  "Images/cat.svg",
  "Images/dolphin.svg",
  "Images/elephant.svg",
  "Images/flower.svg",
  "Images/horse.svg",
  "Images/icecream.svg",
  "Images/jellyfish.svg",
  "Images/koala.svg",
  "Images/ladybug.svg",
  "Images/monkey.svg",
  "Images/numbers.svg",
  "Images/octopus.svg",
  "Images/penguin.svg",
  "Images/queen.svg",
  "Images/raccoon.svg",
  "Images/snail.svg",
  "Images/turtle.svg",
  "Images/unicorn.svg",
  "Images/violin.svg",
  "Images/whale.svg",
  "Images/xylophone.svg",
  "Images/yak.svg",
  "Images/zebra.svg",
];

const randomImage = getRandomImage(imagesArray);
console.log(randomImage);

// Get a reference to the <img> element and the button
const imageElement = document.getElementById("currentImage");
const showImageButton = document.getElementById("showImage");

imageElement.src = randomImage;

// //score worth
// const imgWorth = [
//   10, 5, 5, 10, 5,
//   5, 10, 10, 5, 10, 10, 10,
//   10, 15, 15, 10, 15, 10, 5,
//   5, 10, 15, 10, 10, 10
// ];

// }

// function checkAnswer (imgFilenames, imgWorth, score) {
// if (imgFilenames && imgWorth === "A") {
//   score += 1; // Add score if correct letter selected
// } else {
//   score -= 1;
// }

// // add an event listener to each letter button
// const letterButton = document.querySelectorAll('.letterButton');
// letterButton.forEach(button=> {
//   button.addEventListener('click', () => checkMatch(button));
// });

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

//adding images for game
const alligatorImg = document.getElementById("alligator");
const balloonsImg = document.getElementById("balloons");
const catImg = document.getElementById("cat");
const dolphinImg = document.getElementById("dolphin");
const elephantImg = document.getElementById("elephant");
const flowerImg = document.getElementById("flower");
const goatImg = document.getElementById("goat");
const horseImg = document.getElementById("horse");
const icecreamImg = document.getElementById("icecream");
const jellyfishImg = document.getElementById("jellyfish");
const koalaImg = document.getElementById("koala");
const ladybugImg = document.getElementById("ladybug");
const monkeyImg = document.getElementById("monkey");
const numbersImg = document.getElementById("numbers");
const octopusImg = document.getElementById("octopus");
const penguinImg = document.getElementById("penguin");
const queenImg = document.getElementById("queen");
const raccoonImg = document.getElementById("raccoon");
const snailImg = document.getElementById("snail");
const turtleImg = document.getElementById("turtle");
const unicornImg = document.getElementById("unicorn");
const violinImg = document.getElementById("violin");
const whaleImg = document.getElementById("whale");
const xylophoneImg = document.getElementById("xylophone");
const zebraImg = document.getElementById("zebra");

function buttonbox() {
  document.getElementById("next");
  document.getElementById("back");
  document.getElementById("skip");
}
