function getComputerChoice() {
    let randomNumber = Math.random()
    let choice;
    if (randomNumber <= 0.33) {
        choice = "rock"
    }
    else if (randomNumber <= 0.66 & randomNumber > 0.33) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice;
}

function playTheGame() {
    let playerChoice = prompt('Choose your move: ').toLowerCase()
    let computerChoice = getComputerChoice()
    if (playerChoice === computerChoice) {
        return 'It is a tie!'
    }
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        return 'You loose! Paper beats Rock'
    }
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'You win! Rock beats scissors'
    }
    if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'You win! Paper beats Rock'
    }
    if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return 'You loose! Scissors beat paper'
    }
    if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'You win! Scissors beat paper'
    }
    if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return 'You loose! Rock beats scissors'
    }
}