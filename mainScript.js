// //Timer code source: https://daily-dev-tips.com/posts/vanilla-javascript-timer/#google_vignette
// let score = 0;
let time;
// let numberbox = 1;
// let currentImageIndex = 0; // index of current displayed image
// let getRandomInt;
// let imagesArray = new Array (0)

// const preloadedImages = [];
// const imgElement = document.getElementById('currentImg');
const lettersContainer = document.getElementById("lettersContainer");
const resultMessage = document.getElementById("resultMessage");
// const scoreElement = document.getElementById('currentScore');
// array of image filenames

function getRandomImage(imagesArray) {
  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * imagesArray.length);

  // Return the randomly selected image
  return imagesArray[randomIndex];
}

const imagesArray = [
  "Images/alligator.svg",
  "Images/balloons.svg",
  "Images/balloons.svg",
  "Images/cat.svg",
  "Images/dolphin.svg",
  "Images/elephant.svg",
  // {
  //     id: 1,
  //     image: 'Images/balloons.svg',
  //     name: 'balloons',

  // },
  // {
  //     id: 2,
  //     image: 'images/cat.svg',
  //     name: 'cat',

  // },
  // {
  //     id: 3,
  //     image: 'images/dolphin.svg',
  //     name: 'dolphin',

  // },
  // {
  //     id: 4,
  //     image: 'images/elephant.svg',
  //     name: 'elephant',

  // },
  // {
  //     id: 5,
  //     image: 'images/flower.svg',
  //     name: 'flower',

  // },
  // {
  //     id: 6,
  //     image: 'images/goat.svg',
  //     name: 'goat',

  // },
  // {
  //     id: 7,
  //     image: 'images/horse.svg',
  //     name: 'horse',

  // },
  // {
  //     id: 8,
  //     image: 'images/icecream.svg',
  //     name: 'icecream',

  // },
  // {
  //     id: 9,
  //     image: 'images/jellyfish.svg',
  //     name: 'jellyfish',

  // },
  // {
  //     id: 10,
  //     image: 'images/koala.svg',
  //     name: 'koala',

  // },
  // {
  //     id: 11,
  //     image: 'images/ladybug.svg',
  //     name: 'ladybug',

  // },
  // {
  //     id: 12,
  //     image: 'images/monkey.svg',
  //     name: 'monkey',

  // },
  // {
  //     id: 13,
  //     image: 'images/numbers.svg',
  //     name: 'numbers',

  // },
  // {
  //     id: 14,
  //     image: 'images/octopus.svg',
  //     name: 'octopus',

  // },
  // {
  //     id: 15,
  //     image: 'images/penguin.svg',
  //     name: 'penguin',

  // },
  // {
  //     id: 16,
  //     image: 'images/queen.svg',
  //     name: 'queen',

  // },
  // {
  //     id: 17,
  //     image: 'images/raccoon.svg',
  //     name: 'raccoon',

  // },
  // {
  //     id: 18,
  //     image: 'images/snail.svg',
  //     name: 'snail',

  // },
  // {
  //     id: 19,
  //     image: 'images/turtle.svg',
  //     name: 'turtle',

  // },
  // {
  //     id: 20,
  //     image: 'images/unicorn.svg',
  //     name: 'unicorn',

  // },
  // {
  //     id: 21,
  //     image: 'images/violin.svg',
  //     name: 'violin',

  // },
  // {
  //     id: 22,
  //     image: 'images/whale.svg',
  //     name: 'whale',

  // },
  // {
  //     id: 23,
  //     image: 'images/xylophone.svg',
  //     name: 'xylophone',

  // },
  // {
  //     id: 24,
  //     image: 'images/zebra.svg',
  //     name: 'zebra',

  // }
];

const randomImage = getRandomImage(imagesArray);
console.log(randomImage);

// Get a reference to the <img> element and the button
const imageElement = document.getElementById("currentImage");
const showImageButton = document.getElementById("showImage");

imageElement.src = randomImage;

// function preloadImages () {
//   for (const imgContainer of imgFilenames) {
//     const img = new Image ();
//     img.src = imgContainer;
//     preloadedImages.push(img);
//   }
// }

// // call preloadImages to load img before initalizing game
// preloadImages();

// //score worth
// const imgWorth = [
//   10, 5, 5, 10, 5,
//   5, 10, 10, 5, 10, 10, 10,
//   10, 15, 15, 10, 15, 10, 5,
//   5, 10, 15, 10, 10, 10
// ];

// // selecting next image from array
// function getNextImage() {
//   const nextImgFilename = imgFilenames [currentImageIndex];
//   const nextImgAlt = nextImgFilename.split ('.')[0];

//   imgElement.src = nextImgFilename;
//   imgElement.alt = nextImgAlt;

// function getGridLayout() {
//     for (let i = 0; i < nextImgFilename; i++) {
//         getRandomInt(maxNumber);
//         if (imgFilenames.length > 0) {
//             for (let j = 0; j < imgFilenames.length; j++) {
//                 while (imagesArray[j].id === getRandomInt) {
//                     getRandomInt(maxNumber);
//                     j=0;
//                 }
//             }
//         }
//         // Initial button click called when form opens
//         getImage(getRandomInt);
//     }
// }

// // // to get continuous images even after all img have cycled through
// //   currentImageIndex = (currentImageIndex + 1) % imgFilenames.length;
// }

// // function to get random image from array
// function getRandomImage () {
//   const randomIndex = getRandomInt (0, imgFilenames.length - 1);
//   return imgFilenames[randomIndex];
// }

// document.addEventListener('DOMContentLoaded', function () {
//   initializeGame();
// });

// // function to initilize the game with random image
// function initializeGame() {
//   currentImageIndex = Math.floor(Math.random() * imgFilenames.length);
//   getNextImage(); // show random image
//   score = 0;
//   scoreElement.textContent = score;
//   resultMessage.textContent = '';
// }

// function checkAnswer (imgFilenames, imgWorth, score) {
// if (imgFilenames && imgWorth === "A") {
//   score += 1; // Add score if correct letter selected
// } else {
//   score -= 1;
// }

// return score;
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

//   // update score
//   scoreElement.textContent = score;

//   // load new random image after match/mismatch
//   getNextImage();

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
//const scoreDisplay=document.getElementById ('score-display');

// adding points
//function addScore (){

//}

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
