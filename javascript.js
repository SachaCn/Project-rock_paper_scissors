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
  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
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
let count = 0;

function game() {
  const round = 5;
  for (let i = 0; i < round; i++) {
    console.log(playRound());
    if (result === "lost" || result === "tie" || result === undefined) {
      count;
    } else {
      count++;
    }
  }
  count;
  if (count >= 3) {
    console.log("You won the game!!");
  } else {
    console.log("You lost the game");
  }
}
