let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div  = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//computer choice
function getComputerChoice(){
	const choices = ['r','p','s'];
	 const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}


function convertToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissors";
}


function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
	userScore++;
    userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_div.innerHTML = `${convertToWord(userChoice)}..  beats   ${convertToWord(computerChoice)}.. YOU WIN 🎉 `;
	userChoice_div.classList.add("green-glow");
	setTimeout(function() { userChoice_div.classList.remove('green-glow')},800)
}

function lose(userChoice,computerChoice){
   const userChoice_div  = document.getElementById(userChoice);
	computerScore++;
    userScore_span.innerHTML = userScore;	
	computerScore_span.innerHTML = computerScore;	
	result_div.innerHTML = `${convertToWord(userChoice)}..  beats   ${convertToWord(computerChoice)}.. YOU LOSE💩`;
	document.getElementById(userChoice).classList.add("red-glow");
	setTimeout(function() { userChoice_div.classList.remove('red-glow')},800)
	
	
}
function draw(userChoice,computerChoice){
   const userChoice_div  = document.getElementById(userChoice);
	result_div.innerHTML = `${convertToWord(userChoice)}.. equals  ${convertToWord(computerChoice)}.. its a DRAW 😑`;
	document.getElementById(userChoice).classList.add("gray-glow");
	setTimeout(function() { userChoice_div.classList.remove('gray-glow')},800)
}

//user choice
function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
		win(userChoice,computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
		draw(userChoice,computerChoice);
			break;
	}
}

function main(){
	rock_div.addEventListener('click',function(){
	game("r")
})
paper_div.addEventListener('click',function(){
game("p")
})

scissors_div.addEventListener('click',function(){
	game("s")
})
}

main();