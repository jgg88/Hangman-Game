




//GLOBAL VARIABLES
//=====================================================================================================================
//=====================================================================================================================
var wordList = ["carolina-chickadee", "eastern-bluebird", "american-goldfinch", "song-sparrow", "european-starling", "belted-kingfisher", "red-headed-woodpecker", "barn-swallow", "house-wren", "cedar-wax-wing", "purple-finch", "chipping-sparrow", "summer-tanager", "indigo-bunting", "bobolink", "common-yellowthroat", "loggerhead-shrike"];
//var wordList = ["CAROLINA CHICKADEE", "EASTERN BLUEBIRD", "AMERICAN GOLDFINCH", "SONG SPARROW", "EUROPEAN STARLING", "BELTED KINGFISHER", "RED HEADED WOODPECKER", "BARN SWALLOW", "HOUSE WREN", "CEDAR WAX WING", "PURPLE FINCH", "CHIPPING SPARROW", "SUMMER TANAGER", "INDIGO BUNTING", "BOBOLINK", "COMMON YELLOWTHROAT", "LOGGERHEAD SHRIKE"];

var currentWord = "";
//var randBird = Math.floor(Math.random() * wordList.length);

var currentWordLetters = [];

var numBlanks = 0;

var underScores = [];

var wrongGuesses = [];

var wins = 0;

var losses = 0;

var guessesRemaining = 15;

//var currentWord = wordList[randBird].toLowerCase();
//console.log(currentWord);


// var w = document.getElementById("wins");
// var x = document.getElementById("underscores");
// var y = document.getElementById("wrongGuess");

//var z = document.getElementById("remaining");




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
		//console.log("hi ", underScores)
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













// //COULD NOT FIGURE OUT HOW TO RESET GAME
// var reset = function() {
// 	guessesRemaining = 15;
// 	currentWord;
// 	underScores;
// }

// for (i = 0; i < currentWord.length; i++) {
// 	if (currentWord.charAt(i) === (" ")) {
// 	underScores = underScores + "&nbsp ";
// 	//console.log("hi ", underScores)
// 	} else {
// 	underScores = underScores + "_ ";	
// 	}

// }
// //console.log(underScores);
// x.innerHTML = underScores;
// underScores = underScores.split(" ");
// //console.log("first split ", underScores);


// document.onkeyup = function(event) {
// 		guessesRemaining--;
//     var userGuess = event.key;
//  	//console.log("currentWord ", currentWord)
//     //console.log(userGuess);
    
//     //COULD NOT MAKE LETTER GUESSES  LIST ON PAGE
//     var letterGuess = "Letters used: " + userGuess;

//         y.innerHTML = letterGuess;

// 	for (var i = 0; i < currentWord.length; i++) {

// 		if (currentWord[i] === userGuess) {
// 			console.log("past conditional")
// 			underScores[i] = userGuess;
// 		}

// 		if (guessesRemaining > 0) {
// 			if (userGuess == currentWord) {
// 				wins++;
// 				w.innerHTML = wins;
// 				reset();
// 			}
// 		}else if (guessesRemaining == 0) {
// 			alert("Better luck next time!");
// 			reset();
// 		}



// 	}
// 	x.innerHTML = underScores.join(" ");
// 	console.log("underScores", underScores);
// 	z.innerHTML = guessesRemaining;
// }
