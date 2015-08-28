


// DECLARE OF VARIABLES 

var p1Choice = '';
var p2Choice = '';
var p1Score = 0
var p2Score = 0
var player1Img = $('#p1 img')
var player2Img = $('#p2 img')

function updateImage (target, newImage) {
	target.attr('src', newImage)
}

updateImage(player1Img,"RPS_pics/RyuIdle.gif");
updateImage(player2Img,"RPS_pics/KenIdle.gif");

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
	p2Choice = 'rock';
	console.log("P2 is rock");
}

function setPaper2() {
	p2Choice = 'paper';
	console.log("P2 is paper")
}	

function setScissor2() {
	p2Choice = 'scissors';
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
	
	if(p1Choice===''){	

		if(key.keyCode === 65) {
			setRock1();
			// checkwinner()
		}
		else if(key.keyCode === 83) {
			setPaper1();
			// checkwinner()	
		}
		else if(key.keyCode === 68) {
			setScissor1();
			// checkwinner()
		}
	}
	
	if(p2Choice===''){

		if (key.keyCode === 74) {
			setRock2();
			// checkwinner()
		}
		else if(key.keyCode === 75) {
			setPaper2();
			// checkwinner()	
		}
		else if(key.keyCode === 76) {
			setScissor2();
			// checkwinner()
		} 	
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
		updateImage(player1Img,"RPS_pics/RyuHadouken.gif");
		updateImage(player2Img,"RPS_pics/KenHadouken.gif");

	} else if( p1Choice === 'rock' ) {
		if ( p2Choice === 'paper' ) {
			console.log( 'P2 wins' );

			updateImage(player1Img,"RPS_pics/RyuDamage.gif");
			updateImage(player2Img,"RPS_pics/KenHadouken.gif");

			p2Score++;
		} 
		else {
			console.log( 'P1 wins' );
			updateImage(player1Img,"RPS_pics/RyuHadouken.gif");
			updateImage(player2Img,"RPS_pics/KenDamage.gif");
			p1Score++;
		}

	} else if( p1Choice === 'paper') {
		if (p2Choice === 'rock') {
			console.log('P1 wins');

			updateImage(player1Img,"RPS_pics/RyuHadouken.gif");
			updateImage(player2Img,"RPS_pics/KenDamage.gif");
			p1Score++;
		} 
		else {
			console.log('P2 wins');

			updateImage(player1Img,"RPS_pics/RyuDamage.gif");
			updateImage(player2Img,"RPS_pics/KenHadouken.gif");
			p2Score++;

		} 

	} 
	else {
		if (p2Choice === 'paper') {
			console.log('P1 wins');

			updateImage(player1Img,"RPS_pics/RyuHadouken.gif");
			updateImage(player2Img,"RPS_pics/KenDamage.gif");
			p1Score++;
		} 
		else {
				console.log('P2 wins')

				updateImage(player1Img,"RPS_pics/RyuDamage.gif");
				updateImage(player2Img,"RPS_pics/KenHadouken.gif");
				p2Score++;
		}
	} reset();

}

function reset() {
	p1Choice = '';
	p2Choice = '';
}

function resetScore() {
	p2Score = 0;
	p1Score = 0;
}


setInterval(function(){	
	if(p1Choice!==''&&p2Choice!=='') {
		winLogic();
		checkWinner();
	}
},1000)

function checkWinner(){
	if(p1Score===3) {
		console.log("you win the game p1");
		updateImage(player1Img,"RPS_pics/RyuVictory.gif");
		updateImage(player2Img,"RPS_pics/KenKO.gif");
		resetScore();

	}
	else if (p2Score===3) {
		console.log("you win the game p2");
		updateImage(player1Img,"RPS_pics/RyuKO.gif");
		updateImage(player2Img,"RPS_pics/KenVictory.gif");
		resetScore();	

	};
}

// function checkwinner(){	
// 	if(p1Choice!==''&&p2Choice!=='') {
// 		winLogic();
// 	}
// }; 


// 4. GAMEPLAY

	






// $('.rock').click(setRock)
// $('.paper').click(setPaper)
// $('.scissors').click(setScissor)

// $('this').on("click", makeGreen);









