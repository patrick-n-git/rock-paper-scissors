// get computer choice
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

// get human choice 
const getHumanChoice = () => {
    const humanChoice = prompt('Enter your choice: rock, paper, or scissors').toLowerCase()
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        alert('Invalid choice!');
    }
};


// function to print the result of the game to the DOM
function addScore() {
    const score = document.createElement('p');
    score.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
    result.appendChild(score);
}

// function to declare the player as winner of round
function playerWinner() {
    const playerWinner = document.createElement('p');
    playerWinner.textContent = `You win!`;
    result.appendChild(playerWinner);
}
// function to declare the computer as winner of round
function computerWinner() {
    const computerWinner = document.createElement('p');
    computerWinner.textContent = `You lose!`;
    result.appendChild(computerWinner);
}

// function to declare the game as a tie
function tie() {
    const tie = document.createElement('p');
    tie.textContent = `It is a tie!`;
    result.appendChild(tie);
}

// function to keep score and declare the winner of the game
function declareWinner() {
    if (humanScore === 5) {
        const playerWins = document.createElement('p');
        playerWins.textContent = `You win the game!`;
        result.appendChild(playerWins);
    } else if (computerScore === 5) {
        const computerWins = document.createElement('p');
        computerWins.textContent = `Computer wins the game!`;
        result.appendChild(computerWins);
    } else {
        null;
    }
}

// initialize scores
let humanScore = 0;
let computerScore = 0;

// play one round
const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        tie();
        addScore();
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        playerWinner();
        addScore();
        // display game winner (winner of 5 rounds)
        declareWinner();
    } else if (computerChoice === 'rock' && humanChoice === 'scissors' ||
        computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore++;
        computerWinner();
        addScore();
        // display game winner (winner of 5 rounds)
        declareWinner();
    } else {
        null;
    }
};


// add event listeners to buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
paperBtn.addEventListener('click', () => {  
    playRound('paper', getComputerChoice());
});
scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

// display scores
const result = document.querySelector('#result');
function displayScores() {
    result.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
}

