
// First we will define the Computer Choice - used swtich method for clearer readin
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
//   Test if it works on console;
//   const computerChoice = getComputerChoice();
//   console.log('Computer chose: ' + computerChoice);
  
// Test successful.. Proceeding with next step. 
function playRound(playerSelection, computerSelection) {

    // Make playerSelection case-insensitive
    const playerChoice = playerSelection.toLowerCase();
  
    // Define the possible choices
    const choices = ['rock', 'paper', 'scissors'];
  
    // Check if the player's choice is valid
    if (!choices.includes(playerChoice)) {
      return 'Invalid choice. Please choose Rock, Paper, or Scissors.';
    }
  
    // Determine the winner
    if (playerChoice === computerSelection) {
      return "It's a tie! " + playerChoice + ' equals ' + computerSelection;
    } else if (
      (playerChoice === 'rock' && computerSelection === 'scissors') ||
      (playerChoice === 'paper' && computerSelection === 'rock') ||
      (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
      return 'You win! ' + playerChoice + ' beats ' + computerSelection;
    } else {
      return 'You lose! ' + computerSelection + ' beats ' + playerChoice;
    }
  }

  // Let's play a round
  let playerChoice = prompt ('What is your choice?'); // Case-insensitive
  let computerChoice = getComputerChoice(); 

  console.log(playRound(playerChoice, computerChoice));
  