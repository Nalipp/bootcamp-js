var secretNumber = 9;

var userGuess = prompt("Guess a number between 1 and 10");
var guess = Number(userGuess);

if (guess === secretNumber) {
  alert("You are correct!");
}
else if (guess < 1 || userGuess > 10 ) {
  alert("Number is out of range");
}
else if (guess < secretNumber) {
  alert("Too low");
}
else {
  alert("Too high");
}
