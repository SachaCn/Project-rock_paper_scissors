function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);
    if(randomValue === 0) {
        return "rock";
    } else if(randomValue === 1) {
        return "paper";
    } else {
        return "scissors";
    }      
}

function playRound() {
    const computerSelection = getComputerChoice();
    const playerChoice = prompt("Choose between rock paper or scissors", "");
    const playerSelection = playerChoice.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie";
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock"
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors"
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie!"
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper"
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock"
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie!"
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors"
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper"
    }
}


function game() {
    alert(playRound());
    alert(playRound());
    alert(playRound());
    alert(playRound());
    alert(playRound());
}  