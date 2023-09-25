// Timer code source: https://daily-dev-tips.com/posts/vanilla-javascript-timer/#google_vignette

const imageList = [
  "alligator","balloons","cat","dolphin","elephant",
  "flower","goat","horse","icecream","jellyfish","koala","ladybug",
  "monkey","numbers","octopus","penguin","queen","raccoon","snail",
  "turtle","unicorn","violin","whale","xylophone","zebra"
];

const alphList = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

var timer = document.getElementById("timer");
var timerInterval;

startTimer = () => {
// clear timer
  clearInterval(timerInterval);
  document.getElementById("start").innerHTML = "Restart";
  let second = 0,
    minute = 0,
    hour = 0;

  timerInterval = setInterval(function () {
  
    // two digit numbers
    timer.innerHTML =
      (hour ? hour + ":" : "") +
      (minute < 10 ? "0" + minute : minute) +
      ":" +
      (second < 10 ? "0" + second : second);

    // + seconds
    second++;

    // one minute roll over
    if (second == 60) {
      // If so, we add a minute and reset our seconds to 0
      minute++;
      second = 0;
    }

    // If we hit 60 minutes "one hour" we reset the minutes and plus an hour
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
};

function initHelp () {
  alert ("Game Play: Try to find a picture card that matches the letter shown. For example: If shown the letter A, select the picture that shows something that starts with the letter A, like an apple. A correct answer will add a point to the score; if incorrect a point will be subtracted from the score.")
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