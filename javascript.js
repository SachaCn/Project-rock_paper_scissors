function getComputerChoice() {
  let randomValue = Math.floor(Math.random() * 3);
  if (randomValue === 0) {
    return "rock";
  } else if (randomValue === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound() {
  const computerSelection = getComputerChoice();
  const playerChoice = prompt("Choose between rock paper or scissors.", "");
  const playerSelection = playerChoice.toLowerCase();
  if (playerSelection === computerSelection) {
    alert("It's a tie");
    return (result = "tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lose! Paper beats Rock");
    return (result = "lost");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You win! Rock beats Scissors");
    return (result = "win");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    alert("You lose! Scissors beats Paper");
    return (result = "lost");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You win! Paper beats Rock");
    return (result = "win");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You lose! Rock beats Scissors");
    return (result = "lost");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You win! Scissors beats Paper");
    return (result = "win");
  }
}
let result;
let playerCount = 0;
let computerCount = 0;

function game() {
  while (playerCount < 5 && computerCount < 5) {
    console.log(playRound());
    if(result === "win") {
      playerCount++;
      console.log(playerCount);
    } else if(result === "lost") {
      computerCount++;
      console.log(computerCount);
    } else if(result === "tie") {
      continue;     
    } else if(playerCount === 5 || computerCount === 5) {
      break;
    }
  }
  if (playerCount === 5) {
    console.log("You won the game!!");
  } else if(computerCount === 5){
    console.log("You lost the game");
  }
  return;
}

function resetGame() {
  playerCount = 0;
  computerCount = 0;
}
