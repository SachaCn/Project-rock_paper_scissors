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

const btn = document.querySelectorAll('button');


let playerSelection = btn.forEach(button => button.addEventListener('click', () => {
  playerSelection = button.textContent.toLowerCase();
  console.log(playerSelection);
}))



function playRound() {
  const computerSelection = getComputerChoice();
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

btn.forEach(button => button.addEventListener('click', playRound));

let playerCount = document.getElementById('player-count');
let computerCount = document.getElementById('computer-count');

console.log(playerCount.textContent)





