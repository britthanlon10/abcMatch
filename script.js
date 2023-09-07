const operation = {
  Next: "next",
  Back: "back",
  Skip: "skip",
  Pause: "pause",
  Help: "help",
};
// https://daily-dev-tips.com/posts/vanilla-javascript-timer/#google_vignette
// counting time spent playing game
const timer = document.getElementById('timer');
let timerInterval;

startTimer = () => {
  // Firs twe start by clearing the existing timer, in case of a restart
  clearInterval(timerInterval);
  // Then we clear the variables
  let second = 0,
    minute = 0,
    hour = 0;

  // Next we set a interval every 1000 ms
  timerInterval = setInterval(function () {
    // Toggle the odd class every interval
    timer.classList.toggle('odd');

    // We set the timer text to include a two digit representation
    timer.innerHTML =
      (hour ? hour + ':' : '') +
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second);

    // Next, we add a new second since one second is passed
    second++;

    // We check if the second equals 60 "one minute"
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

function buttonbox() {
  document.getElementById("next");
  document.getElementById("back");
  document.getElementById("skip");
  document.getElementById("pause");
  document.getElementById("help");
}