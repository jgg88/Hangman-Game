var birdList = ["CAROLINA CHICKADEE", "EASTERN BLUEBIRD", "AMERICAN GOLDFINCH", "SONG SPARROW", "EUROPEAN STARLING", "BELTED KINGFISHER", "RED HEADED WOODPECKER", "BARN SWALLOW", "HOUSE WREN", "CEDAR WAX WING", "PURPLE FINCH", "CHIPPING SPARROW", "SUMMER TANAGER", "INDIGO BUNTING", "BOBOLINK", "COMMON YELLOWTHROAT", "LOGGERHEAD SHRIKE"]


var randBird = Math.floor(Math.random() * birdList.length);
var currentWord = birdList[randBird].toLowerCase();
console.log(currentWord);

var underScores = "";
var w = document.getElementById("wins");
var x = document.getElementById("underscores");
var y = document.getElementById("wrongGuess");
var guessRemaining = 15;
var z = document.getElementById("remaining");

//COULD NOT FIGURE OUT HOW TO GET WINS TO SHOW ON PAGE
var wins = 0;

//COULD NOT FIGURE OUT HOW TO RESET GAME
var reset = function() {
	guessRemaining = 15;
	currentWord;
	underScores;
}

for (i = 0; i < currentWord.length; i++) {
	if (currentWord.charAt(i) === (" ")) {
	underScores = underScores + "&nbsp ";
	//console.log("hi ", underScores)
	} else {
	underScores = underScores + "_ ";	
	}

}
//console.log(underScores);
x.innerHTML = underScores;
underScores = underScores.split(" ");
//console.log("first split ", underScores);


document.onkeyup = function(event) {
		guessRemaining--;
    var userGuess = event.key;
 	//console.log("currentWord ", currentWord)
    //console.log(userGuess);
    
    //COULD NOT MAKE LETTER GUESSES  LIST ON PAGE
    var letterGuess = "Letters used: " + userGuess;

        y.innerHTML = letterGuess;

	for (var i = 0; i < currentWord.length; i++) {

		if (currentWord[i] === userGuess) {
			console.log("past conditional")
			underScores[i] = userGuess;
		}

		if (guessRemaining > 0) {
			if (userGuess == currentWord) {
				wins++;
				w.innerHTML = wins;
				reset();
			}
		}else if (guessRemaining == 0) {
			alert("Better luck next time!");
			reset();
		}



	}
	x.innerHTML = underScores.join(" ");
	console.log("underScores", underScores);
	z.innerHTML = guessRemaining;
}
