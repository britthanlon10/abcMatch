// timer function
var timer;
var ele = document.getElementById("timer");

(function (){
  var sec = 0;
  timer = setInterval(() => {
    ele.innerHTML = "00:" + sec;
    sec++;
  }, 1000); // each 1 second
})();

function pause() {
  clearInterval(timer);
}

// score function
var score;
var ele = document.getElementById ("score")

(function (){
    var score = 0;
    score = setInterval (() => {
        ele.innerHTML = "00" + score
        score++;
    }, 1) // 1 point each
})();

function Reset (){
    clearInterval(score)
}
    
