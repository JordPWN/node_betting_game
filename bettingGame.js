var prompt = require('prompt-sync')();

var myMoney = 100;
var myBet = 0;
var myGuess = 0;

function bet(){
  var myBet = prompt("Please place your bet: ");
	payout(myBet , guess());
	console.log("Wallet: $" + myMoney);
	// if(myMoney <= 0){
	// 	var play_again = confirm("You lost. New game?");
	// }
	// if(play_again == true){
	// 	myMoney = 100;
	// 	$("#output").text("");
	// }
}

function guess(){
	var ranNum = randomNumber();
	var myGuess = prompt("What's your guess? ");
	if (myGuess == ranNum){
		console.log("You win!")
		return "win";
	}else{
		if(myGuess == ranNum+1 || myGuess == ranNum-1){
			console.log("You were close! The number was " + ranNum);
			return "draw";
		}else{
			console.log("You lost! The number was " + ranNum);
			return "loss";
		}
	}
}

function payout(bet,outcome){
	switch(outcome){
		case "win":
			myMoney += parseInt(bet);
			break;
		case "loss":
			myMoney -= parseInt(bet);
			break;
		case "draw":
			break;
	}
}

function randomNumber(){
	return  Math.floor((Math.random() * 10) + 1); 
}
do{
	bet();
}while(myMoney > 0);