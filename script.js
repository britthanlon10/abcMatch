// Timer code source: https://daily-dev-tips.com/posts/vanilla-javascript-timer/#google_vignette

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

// function buttonbox() {
//   document.getElementById("next");
//   document.getElementById("back");
//   document.getElementById("skip");
//   let button = document.getElementById("pause")
//   function play() {
//   document.getElementById("help");
// }