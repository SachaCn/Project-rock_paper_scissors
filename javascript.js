const btn = document.querySelectorAll('.btn-js');
const playerCount = document.getElementById('player-count');
const computerCount = document.getElementById('computer-count');
const showFinalResult = document.getElementById('showWinner');
const resetBtn = document.getElementById('reset');
const roundResult = document.getElementById('roundResult');
const round = 3;
let playerSelection = btn.forEach(button => button.addEventListener('click', () => {
  playerSelection = button.textContent.toLowerCase();
}))
let result;
let player = 0;
let cpu = 0;

btn.forEach(button => button.addEventListener('click', playRound));
btn.forEach(button => button.addEventListener('click', updateScore));
btn.forEach(button => button.addEventListener('click', endGame));
btn.forEach(button => button.addEventListener('click', showResetBtn));
resetBtn.addEventListener('click', resetGame);

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
  if (playerSelection === computerSelection) {
    roundResult.textContent = "Tie";    
    return (result = "tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    roundResult.textContent = "You lose! Paper beats Rock";    
    return (result = "lost");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    roundResult.textContent = "You win! Rock beats Scissors";
    return (result = "win");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    roundResult.textContent = "You lose! Scissors beats Paper";
    return (result = "lost");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    roundResult.textContent = "You win! Paper beats Rock";
    return (result = "win");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    roundResult.textContent = "You lose! Rock beats Scissors";
    return (result = "lost");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    roundResult.textContent = "You win! Scissors beats Paper";
    return (result = "win");
  }
}

function updateScore() {  
  if(result === "win") {
    player += 1;
    return playerCount.textContent = player;
  } else if(result === "lost") {
    cpu +=1;
    return computerCount.textContent = cpu;
  }  
}

function endGame() {
  if(player == round) return showFinalResult.textContent = 'YOU WIN!';
  if(cpu == round) return showFinalResult.textContent = 'YOU LOSE!';
}

function showResetBtn() {
  if(cpu == round || player == round) {
    btn.forEach(btn => btn.classList.add('hide'));
    roundResult.classList.add('hide');
    return resetBtn.classList.add('active');
  };
}

function resetGame() {
  player = 0;
  cpu = 0;
  playerCount.textContent = player;
  computerCount.textContent = cpu;
  showFinalResult.textContent = '';
  btn.forEach(btn => btn.classList.remove('hide'));
  roundResult.classList.remove('hide');
  resetBtn.classList.remove('active');
}

