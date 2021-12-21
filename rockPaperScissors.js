


function rockPaperScissors(input) {
    // Assign player input to new var 'playerMove'
    var playerMove = input.toLowerCase();
    console.log('playerMove is: ', playerMove)

    // Roll for computer play and assign to new variable
    // computersMove = generateMove();
    var computerMove = generateMove();
    console.log('computerMove is: ', computerMove);
    
    // Compare 'playerMove' to 'computersMove'
    // 3 possible scenarios: Win, lose, tie
        // If playerMove === computerMove
        if (playerMove === computerMove) {
            return 'Tie!';
        }
        else if (playerMove === 'rock') {
            if (computerMove === 'scissors') {
                return 'You Win! rock beats scissors!';
            }
            else {
                return 'You Lose! Paper beats rock!';
            }
        }
        else if (playerMove === 'scissors') {
            if (computerMove === 'paper') {
                return 'You Win! scissors beats paper!';
            }
            else {
                return 'You Lose! Rock beats scissors!';
            }
        }
        else if (playerMove === 'paper') {
            if (computerMove === 'rock') {
                return 'You Win! paper beats rock!';
            }
            else {
                return 'You Lose! Scissors beats paper!';
            }
        }
}




function generateMove() {
    // console.log('generateMove() called')

    // Roll for number between 1 (minimum) and 3 (maximum) inclusive
    var move = rollNumber();
    // console.log(move)
        // If number is 1, assign 'rock'
        if (move === 1) {
            return 'rock';
        }
        // If number is 2, asign 'paper'
        if (move === 2) {
            return 'paper';
        }
        // If number is 3, assign 'scissors'
        if (move === 3) {
            return 'scissors';
        }
}



function rollNumber() {
    // console.log('rollNumber() called')

    var min = Math.ceil(0)
    var max = Math.floor(3)
    var roll = Math.ceil(Math.random() * (max - min + min) + min);
    // console.log('Roll is: ', roll);

    return roll;
}



function getUserInput(){
    var userInput = prompt('Please enter Rock, Paper, or Scissors:')
    while (userInput !== 'quit' && userInput !== 'q'){
        if(userInput === 'Rock' || 'rock'){
            console.log(`You entered ${userInput}`)
            gameResult = rockPaperScissors(userInput);
            console.log('Game result is...', gameResult);
        } else if (userInput === "Paper" || 'paper'){
            console.log(`You entered ${userInput}`)
            gameResult = rockPaperScissors(userInput);
            console.log('Game result is...', gameResult);
        } else if (userInput === 'Scissors' || 'scissors'){
            console.log(`You entered ${userInput}`)
            gameResult = rockPaperScissors(userInput);
            console.log('Game result is...', gameResult);
        } 
    userInput = prompt('Please enter Rock, Paper, or Scissors:')   
    }


gameResult = rockPaperScissors(userInput);
console.log('Game result is...', gameResult);
}

var startGame = getUserInput();

