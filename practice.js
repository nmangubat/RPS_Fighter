


// DECLARE OF VARIABLES 

var p1Choice = '';
var p2Choice = '';


// P1 GOES

function setRock1() {
	p1Choice = 'rock';
	console.log("P1 is rock");
	
}

function setPaper1() {
	p1Choice = 'paper';
	console.log("P1 is paper")
	
}	

function setScissor1() {
	p1Choice = 'scissors';
	console.log("P1 is scissors")
}	

function setRock2() {
	p1Choice = 'rock';
	console.log("P2 is rock");
}

function setPaper2() {
	p1Choice = 'paper';
	console.log("P2 is paper")
}	

function setScissor2() {
	p1Choice = 'scissors';
	console.log("P2 is scissors")
}	

// $('.rock').click(setRock)
// $('.paper').click(setPaper)
// $('.scissors').click(setScissor)

// $('this').on("click", makeGreen);

// function makeGreen(){
//  	$('.rock').addClass('green');
//  	$('.paper').addClass('green');
//  	$('.scissors').addClass('green');
// 	}

document.addEventListener("keydown", function (key) {
	
	if(key.keyCode === 65) {
		setRock1();
	}
	else if(key.keyCode === 83) {
		setPaper1();	
	}
	else if(key.keyCode === 68) {
		setScissor1();
	}
	else if (key.keyCode === 74) {
		setRock2();
	}
	else if(key.keyCode === 75) {
		setPaper2();	
	}
	else if(key.keyCode === 76) {
		setScissor2()
	} 	
});


// // P2 GOES

// function setRock() {
// 	userChoice = 'rock';
// 	console.log("user is rock");
// 	// playGame();
// }

// function setPaper() {
// 	userChoice = 'paper';
// 	console.log("user is paper")
// 	// playGame();
// }	

// function setScissor() {
// 	userChoice = 'scissors';
// 	console.log("user is scissors")
// 	// playGame();
// }	


// function makeGreen(){
//  	$('#rock').addClass('green');
//  	$('#paper').addClass('green');
//  	$('#scissors').addClass('green');
// 	}



// ROUND LOGIC
function winLogic() {

	if (p1Choice === p2Choice) {
		console.log("it was a tie");

	} else if( p1Choice === 'rock' ) {
		if ( p2Choice === 'paper' ) {
			console.log( 'P2 wins' );
		} 
		else {
			console.log( 'P1 wins' );
		}

	} else if( p1Choice === 'paper') {
		if (p2Choice === 'rock') {
			console.log('P1 wins');
		} 
		else {
			console.log('P2 wins');

		} 

	} 
	else {
		if (p2Choice === 'paper') {
			console.log('P1 wins');
		} 
		else {
				console.log('P2 wins')
		}
	}

}

// 4. GAMEPLAY

	






// $('.rock').click(setRock)
// $('.paper').click(setPaper)
// $('.scissors').click(setScissor)

// $('this').on("click", makeGreen);









