var timer = 60;
var score = 0;
var hitrn = 0;


function makeBubble() {
  var clutter = "";

  for (var i = 0; i <= 167; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function runTimer() {
    let interval = setInterval(function() {
        if(timer > 0) {
            timer--;
            document.querySelector("#timerVal .box").textContent = timer;
        } else {
          clearInterval(interval);
          document.querySelector("#pbtm").innerHTML = `<h1>Game over</h> <br> <p>Score: ${score}</p>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(details) {
  var clickedNum = (Number(details.target.textContent));
  if(clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
})

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitvar").textContent = hitrn;
}
makeBubble();
runTimer();
getNewHit();
increaseScore();