
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

document.onkeyup = function(event) {

   var userGuess = event.key;

   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userGuess !== computerGuess) && (guessesLeft > 0)) {
        guessesLeft--;
        document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessesLeft + " ";
        document.getElementById("guesses").innerHTML += " " + userGuess + " ";
    } else if (userGuess !== computerGuess) {
        losses++;
        guessesLeft = 9;
        document.getElementById("losses").innerHTML = "Losses: " + losses + " ";
        document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessesLeft + " ";
        document.getElementById("guesses").innerHTML = "Your Guesses so far: ";
    } else {
        wins++;
        guessesLeft = 9;
        document.getElementById("wins").innerHTML = "Wins: " + wins + " ";
        document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessesLeft + " ";
        document.getElementById("guesses").innerHTML = "Your Guesses so far: ";
    } 

}
