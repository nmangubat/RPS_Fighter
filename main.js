// document.querySelector('#rock').addEventListener("click", function(){
// 	alert('you hit rock')
// });


// 1. DECLARE OF VARIABLES 

var userChoice = '';
var randomNum = 0;
var computerChoice = '';


// 2. USER PICK

function setRock() {
	userChoice = 'rock';
	console.log("user is rock");
	playGame();
}

function setPaper() {
	userChoice = 'paper';
	console.log("user is paper")
	playGame();
}	

function setScissor() {
	userChoice = 'scissors';
	console.log("user is scissors")
	playGame();
}	

$('#rock').click(setRock)
$('#paper').click(setPaper)
$('#scissors').click(setScissor)

$('this').on("click", makeGreen);

function makeGreen(){
 	$('#rock').addClass('green');
 	$('#paper').addClass('green');
 	$('#scissors').addClass('green');
	}



// 3. COMPUTER PICK 

function randomNumGen() {
	randomNum = Math.floor(Math.random()*3); //GENERATES A RANDOM NUMBER 0,1 OR 2
	return randomNum;
}

function winLogic() {

	if (userChoice === computerChoice) {
		console.log("it was a tie");

	} else if( userChoice === 'rock' ) {
		if ( computerChoice === 'paper' ) {
			console.log( 'computer wins' );
		} 
		else {
			console.log( 'user wins' );
		}

	} else if( userChoice === 'paper') {
		if (computerChoice === 'rock') {
			console.log('user wins');
		} 
		else {
			console.log('computer wins');

		} 

	} 
	else {
		if (computerChoice === 'paper') {
			console.log('user wins');
		} 
		else {
				console.log('computer wins')
		}
	}

}


// 4. GAMEPLAY
function playGame() {
	
	randomNumGen(); //GENERATES A NEW NUMBER


	// BASED ON RANDOM NUMBER, ASSIGN COMP CHOICE:

	if (randomNum === 0) {
		computerChoice = 'rock';
	}
	
	if (randomNum === 1) {
		computerChoice = 'paper';
	}
	
	if (randomNum ===2 ) {
		computerChoice = 'scissors';
	}

	console.log('computer choice is ' + computerChoice)

	
	winLogic();
};
	








