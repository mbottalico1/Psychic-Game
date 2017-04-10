var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0
var losses = 0
var guesses = 9
var guessesLeft = 9
var guessesSoFar = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {

        var userGuess = event.key;


        if (userGuess === computerGuess) {
            wins++ 
        }

        else if ()