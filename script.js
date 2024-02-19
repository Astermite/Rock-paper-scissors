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

function playRound() {
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

let rockBtn = document.querySelector('.rock')
let paperBtn = document.querySelector('.paper')
let ScissorsBtn = document.querySelector('.scissors') 

rockBtn.addEventListener('click', playRound)

// function playGame(rounds=5) {
//     let computerScore = 0;
//     let playerScore = 0;
//     for (let i = 0; i < rounds; i++) {
//         let round = playRound();
//         if (round.charAt(4) === 'w') {
//             playerScore++
//         }
//         else if (round.charAt(4) === 'l') {
//             computerScore++
//         }
//         console.log(round)
//     }
//     if (playerScore > computerScore) {
//         return 'Congratulations! You have won the game!'
//     } else if (playerScore < computerScore) {
//         return 'Sadge! You have lost! Game over for you'
//     } else { 
//         return 'It is a tie! You have played fiercely'
//     }
// } 

