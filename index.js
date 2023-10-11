let playerScore = 0;
let computeScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
        case 0:
         return 'rock';
        case 1:
         return 'paper';
        case 2:
          return 'scissors';
    }
  }
//   const computerChoice = getComputerChoice();
//   console.log('Computer chose: ' + computerChoice);
  
 
function playRound(playerSelection, computerSelection) {

    const playerChoice = playerSelection.toLowerCase();
  
    const choices = ['rock', 'paper', 'scissors'];
  
    if (!choices.includes(playerChoice)) {
      return 'Invalid choice. Please choose Rock, Paper, or Scissors.';
    }
  
    if (playerChoice === computerSelection) {
      return "It's a tie! " + playerChoice + ' equals ' + computerSelection;
    } else if (
      (playerChoice === 'rock' && computerSelection === 'scissors') ||
      (playerChoice === 'paper' && computerSelection === 'rock') ||
      (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
      playerScore++;
      return 'You win! ' + playerChoice + ' beats ' + computerSelection;
    } else {
      computeScore++;
      return 'You lose! ' + computerSelection + ' beats ' + playerChoice;
    }
  }

  // Let's play a round
  // let playerChoice = prompt ('What is your choice?'); // Case-insensitive
  // let computerChoice = getComputerChoice(); 

  // console.log(playRound(playerChoice, computerChoice));
  function game() {
    let computerSelection;
    let playerChoice;
    let i = 0;

    while (i<5) {
        playerChoice = prompt ('What is your choice?'); // Case-insensitive
        computerSelection = getComputerChoice(); 

        console.log('Game' + (i + 1));
        console.log(playRound(computerSelection, playerChoice));
        console.log(`Score is: Player: ${playerScore}, Computer: ${computeScore}`);
        i++;
    }

    let result;
    if (playerScore > computeScore)
     result = 'Player wins! You are the master of this game';
     else if (computeScore > playerScore)
     result = 'Computer wins! You lost, poor Padawan. Better luck next time.'
     else if (playerScore === 1)
     result = 'It is a draw!'
     else
     result = 'It is a draw'

     console.log('  ');
     console.log('Game competed')
     console.log(result);
} 

game();