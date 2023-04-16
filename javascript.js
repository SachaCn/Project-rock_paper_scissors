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

const btn = [...document.getElementsByClassName('btn-js')];


let playerSelection = btn.forEach(button => button.addEventListener('click', () => {
  playerSelection = button.textContent.toLowerCase();
}))


btn.forEach(button => button.addEventListener('click', playRound));


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


function updateScore() {  
  if(result === "win") {
    player += 1;
    return playerCount.textContent = player;
  } else if(result === "lost") {
    cpu +=1;
    return computerCount.textContent = cpu;
  }  
}

const playerCount = document.getElementById('player-count');
let player = 0;

const computerCount = document.getElementById('computer-count');
let cpu = 0;


btn.forEach(button => button.addEventListener('click', updateScore));

function endGame() {
  if(player == 5) return showFinalResult.textContent = 'The player win';
  if(cpu == 5) return showFinalResult.textContent = 'The cpu win';
}

const showFinalResult = document.getElementById('showWinner');

btn.forEach(button => button.addEventListener('click', endGame));
btn.forEach(button => button.addEventListener('click', showResetBtn));

function showResetBtn() {
  if(cpu == 5 || player == 5) return resetBtn.classList.add('active');
}


const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', resetGame);

function resetGame() {
  player = 0;
  cpu = 0;
  playerCount.textContent = player;
  computerCount.textContent = cpu;
  showFinalResult.textContent = '';
  resetBtn.classList.remove('active');
}

