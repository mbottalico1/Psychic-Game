var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0
var losses = 0
var guesses = 9
var guessesLeft = 9
var yourGuesses = [];
var possibleLetters = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var updateGuessesLeft = function() {

	document.querySelector("#guesses").innerHTML = "Guesses Remaining: " + guessesLeft;
};

var updateNumOfGuesses = function() {
    document.querySelector("#soFar").innerHTML = "Your Guesses: " + yourGuesses.join(',');
};

var updatePossibleLetters = function() {
    possibleLetters = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//var reset = function() {

 //guesses = 9;
 //guessesLeft = 9;
 

 //updatePossibleLetters = ();
 //updateGuessesLeft = ();
 //updateNumOfGuesses = ();


//}
 
 document.onkeyup = function(event) {

 yourGuesses.push(userGuess);
  updateGuessesLeft();
  
    //updateGuessesLeft = ();
    //updateNumOfGuesses = ();

        var userGuess = event.key;

    if (guessesLeft > 0){
        if (userGuess === computerGuess) {
            win++;
            document.querySelector("#winning").innerHTML = "Wins: " + win;
            alert("You win! Congrats!");
            //reset(); 
        

        }else if (guessesLeft === 0) {
        	losses++;
            document.querySelector("losing").innerHTML = "Losses: " + losses;
            alert("You lose!");
            //reset();
    }

        
 }

};



