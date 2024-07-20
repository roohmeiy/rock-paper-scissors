// Get the choice elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// Get the score elements
const yourScore = document.getElementById('your-score-value');
const computerScore = document.getElementById('computer-score-value');

// Get the result element
const result = document.querySelector('result');

// Add event listeners to the choice elements
rock.addEventListener('click', () => makeMove('rock'));
paper.addEventListener('click', () => makeMove('paper'));
scissors.addEventListener('click', () => makeMove('scissors'));

// Function to make a move
function makeMove(userChoice) {
  // Generate computer's move randomly
  const computerChoice = getRandomChoice();
  console.log(`you: ${userChoice}`);
  console.log(`computer : ${computerChoice}`);

  // Determine the winner
  const winner = determineWinner(userChoice, computerChoice);
  console.log(winner);

  // Update the scores
  updateScore(winner);

  // Display the result
  displayResult(userChoice, computerChoice, winner);
}

// Function to generate a random choice for the computer
function getRandomChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];

}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'user';
  } else {
    return 'computer';
  }
}

// Function to update the scores
function updateScore(winner) {
  if (winner === 'user') {
    yourScore.innerText = parseInt(yourScore.innerText) + 1;
  } else if (winner === 'computer') {
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
  }
}

// Function to display the result
function displayResult(userChoice, computerChoice, winner) {
  if (winner === 'user') {
    result.innerText = `You chose ${userChoice}, computer chose ${computerChoice}. You win!`;
  } else if (winner === 'computer') {
    result.innerText = `You chose ${userChoice}, computer chose ${computerChoice}. Computer wins!`;
  } else {
    result.innerText = `You chose ${userChoice}, computer chose ${computerChoice}. It's a tie!`;
  }
}
let resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", () => {
  yourScore.innerText = 0;
  computerScore.innerText = 0;
  result.innerText = "";
});
