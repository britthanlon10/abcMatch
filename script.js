const operation = {
  Next: "next",
  Back: "back",
  Skip: "skip",
  Pause: "pause",
  Help: "help",
};

// counting time spent playing game
let timer;
let ele = document.getElementById("timer");

(function () {
  var sec = 0;
  timer = setInterval(() => {
    ele.innerHTML = "00:" + sec;
    sec++;
  }, 1000); // each 1 second
})();

function pause() {
  clearInterval(timer);
}

function buttonbox() {
  document.getElementById("next");
  document.getElementById("back");
  document.getElementById("skip");
  document.getElementById("pause");
  document.getElementById("help");
}