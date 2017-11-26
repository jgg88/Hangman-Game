//GLOBAL VARIABLES
//=====================================================================================================================
//=====================================================================================================================
var wordList = ["carolina-chickadee", "eastern-bluebird", "american-goldfinch", "song-sparrow", "european-starling", "belted-kingfisher", "red-headed-woodpecker", "barn-swallow", "house-wren", "cedar-wax-wing", "purple-finch", "chipping-sparrow", "summer-tanager", "indigo-bunting", "bobolink", "common-yellowthroat", "loggerhead-shrike"];
var currentWord = "";
var currentWordLetters = [];
var numBlanks = 0;
var underScores = [];
var wrongGuesses = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 15;


//FUNCTIONS
//=====================================================================================================================
//=====================================================================================================================

function startGame() {

	guessesRemaining = 15;

	currentWord = wordList [Math.floor(Math.random() * wordList.length)];

	console.log(currentWord);

	currentWordLetters = currentWord.split("");
	console.log("current letters: " + currentWordLetters)

	numBlanks = currentWordLetters.length;

	underScores = [];

	wrongGuesses = [];

	for (i = 0; i < currentWord.length; i++) {
		if (currentWord.charAt(i) === ("-")) {
		underScores.push("-");
		} else {
		underScores.push("_");	
		}
	}

	document.getElementById("remaining").innerHTML = guessesRemaining;
	document.getElementById("underscores").innerHTML = underScores.join(" ");
	document.getElementById("wrongGuess").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {

	var letterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if (currentWord[i] === letter) {

			letterInWord = true;
		}
	}

	if (letterInWord) {
		for (var j = 0; j < numBlanks; j++) {

			if (currentWord[j] === letter) {

				underScores[j] = letter;
			}
		}
		console.log(underScores);
	}

	else {
		wrongGuesses.push(letter);
		guessesRemaining--;
	}
}

function roundComplete() {
	document.getElementById("remaining").innerHTML = guessesRemaining;
	document.getElementById("underscores").innerHTML = underScores.join(" ");
	document.getElementById("wrongGuess").innerHTML = wrongGuesses.join(" ");

	if (currentWordLetters.toString() === underScores.toString()) {

		wins++;
		alert("You win!");

		document.getElementById("wins").innerHTML = wins;
		startGame();
	}

	else if (guessesRemaining === 0) {

		losses++;

		alert("Try again!");

		document.getElementById("losses").innerHTML = losses;
		startGame();
	}
}


//MAIN PROCESSES
//=====================================================================================================================
//=====================================================================================================================

startGame();

document.onkeyup = function(event) {

	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

	checkLetters(letterGuessed);

	roundComplete();
};
