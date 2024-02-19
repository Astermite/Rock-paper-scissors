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

let computerScore = 0;
let playerScore = 0;

const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")
const resultPanel = document.querySelector('.result')
const finalResult = document.querySelector('.final_result')

if (rockBtn && paperBtn && scissorsBtn) {
    rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()))
    paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()))
    scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()))
} else {
    console.error("One or more buttons not found.") }
    
function playRound(playerChoice, computerChoice) {
    // let playerChoice = prompt('Choose your move: ').toLowerCase()
    // let computerChoice = getComputerChoice()
    if (playerChoice === computerChoice) {
        resultPanel.textContent = "It's a tie!"
    }
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        resultPanel.textContent = 'You loose! Paper beats Rock'
    }
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        resultPanel.textContent ='You win! Rock beats scissors'
    }
    if (playerChoice === 'paper' && computerChoice === 'rock') {
        resultPanel.textContent ='You win! Paper beats Rock'
    }
    if (playerChoice === 'paper' && computerChoice === 'scissors') {
        resultPanel.textContent ='You loose! Scissors beat paper'
    }
    if (playerChoice === 'scissors' && computerChoice === 'paper') {
        resultPanel.textContent ='You win! Scissors beat paper'
    }
    if (playerChoice === 'scissors' && computerChoice === 'rock') {
        resultPanel.textContent ='You loose! Rock beats scissors'
    }
    checkScore()    
}

function checkScore() {
    if (resultPanel.textContent.charAt(4)=== 'w') {
        playerScore++
    }
    else if (resultPanel.textContent.charAt(4) === 'l') {
        computerScore++
    }
    if (playerScore >= 5) finalResult.textContent = 'You won the game! Congratulations!';
    if (computerScore >= 5) finalResult.textContent = 'You lost the game. Computer wins!' 
}
// function playGame(rounds=5) {

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

