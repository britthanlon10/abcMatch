const OPERATION = {
  Next: "next",
  Back: "back",
  Skip: "skip",
  Pause: "pause",
  Help: "help",
};
function buttonbox() {
  document.getElementById("next");
  document.getElementById("back");
  document.getElementById("skip");
  document.getElementById("pause");
  document.getElementById("help");
}

function js_timer() {
  var sec = 0;
  timer = setInterval(
    () => {
      ele.innerHTML = "00" + sec;
      sec++;
    },
    1000 //each 1 second
  );
}
