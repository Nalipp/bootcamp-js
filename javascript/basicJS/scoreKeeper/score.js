var p1Button = document.querySelector("#p1")
var p2Button = document.querySelector("#p2")
var resetButton = document.querySelector("#reset")
var p1TotalScore = document.querySelector("#p1TotalScore")
var p2TotalScore = document.querySelector("#p2TotalScore")
var numImput = document.querySelector("input")
var playTo = document.querySelector("#playTo")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = numImput.value;

p1Button.addEventListener("click", function() {
  if(!gameOver) {
    p1Score++;
    if(p1Score === winningScore) {
      p1TotalScore.classList.add("winner")
      gameOver = true;
    }
    p1TotalScore.textContent = p1Score
  }
});

p2Button.addEventListener("click", function() {
  if(!gameOver) {
    p2Score++;
    if(p2Score === winningScore) {
      p2TotalScore.classList.add("winner")
      gameOver = true;
    }
    p2TotalScore.textContent = p2Score
  }
});

resetButton.addEventListener("click", function() {
  reset();
})

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1TotalScore.textContent = p1Score
  p2TotalScore.textContent = p2Score
  p1TotalScore.classList.remove("winner")
  p2TotalScore.classList.remove("winner")
  gameOver = false;
}

numImput.addEventListener("change", function() {
  playTo.textContent = this.value
  winningScore = Number(this.value)
  reset();
});
