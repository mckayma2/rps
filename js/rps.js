function rps(){
var userChoice = ["Rock", "Paper",  "Scissors"];
var tie = 0;
var score = 0;
var loses = 0;
var userInput;
var plays = 0;
var lb= "<br>";



for (var i = 1; i <= 5; i += 1){

	compRandom = Math.floor(Math.random() * userChoice.length);
	userInput = prompt("YOU GET 5 TRIES(" + plays + "): Please use (0) : for Rock,   (1) : for Paper,   (2) : for Scissors ");

	if (userChoice[userInput] === userChoice[compRandom]) {
	tie +=1;
	plays +=1;
	document.write(lb + " " + plays + " :  TIE. The Computer chose " + userChoice[compRandom] + " and you chose " + userChoice[userInput] + " ");
	}

	else if (userChoice[userInput] === "Rock" && userChoice[compRandom] === "Scissors") {
	score +=1;
	plays +=1;
	document.write(lb + " " + plays + " :  YOU WIN. The Computer chose " + userChoice[compRandom] + " and you chose " + userChoice[userInput] + " ");
	}

	else if (userChoice[userInput] === "Scissors" && userChoice[compRandom] === "Paper") {
	score +=1;
	plays +=1;
	document.write(lb + " " + plays + " :  YOU WIN. The Computer chose " + userChoice[compRandom] + " and you chose " + userChoice[userInput] + " ");
	}

	else if (userChoice[userInput] === "Paper" && userChoice[compRandom] === "Rock") {
	score +=1;
	plays +=1;
	document.write(lb + " " + plays + " :  YOU WIN. The Computer chose " + userChoice[compRandom] + " and you chose " + userChoice[userInput] + " ");
	}

	else {
	loses +=1;
	plays +=1;
	document.write(lb + " " + plays + " :  COMPUTER WINS. The Computer chose " + userChoice[compRandom] + " and you chose " + userChoice[userInput] + " ");
	}

}


	document.write(lb + lb + "	TIE:  " + tie + "   ");
	document.write(lb + "	SCORE:  " + score + "   ");
	document.write(lb + "	LOSES:  " + loses + "   ");
	document.getElementById('box1').innerHTML = box1;
}
