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

// initialize scores
let humanScore = 0;
let computerScore = 0;

// play one round
const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        alert('It is a tie!');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log(`You win! You chose ${humanChoice}. Computer chose ${computerChoice}. Your score: ${humanScore}, Computer score: ${computerScore}`);
    } else if (computerChoice === 'rock' && humanChoice === 'scissors' ||
        computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore++;
        console.log(`You lose! You chose ${humanChoice}. Computer chose ${computerChoice}.Your score: ${humanScore}, Computer score: ${computerScore}`);
    } else {
        null;
    }
};


//play rounds 
const roundNumber = 5;
for (let i = 0; i < roundNumber; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}
