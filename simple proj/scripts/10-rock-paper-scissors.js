let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};


updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You Lose';
    } else if (computerMove === 'Paper') {
      result = 'You win!';
    } else {
      result = 'Tie';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win!';
    } else if (computerMove === 'Paper') {
      result = 'Tie';
    } else {
      result = 'You Lose';
    }
  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You Lose';
    } else {
      result = 'You win!';
    }
  }

  if (result === 'You win!') {
    score.wins++;
  } else if (result === 'You Lose') {
    score.loses++;
  } else if (result === 'Tie') {
    score.ties++;
  }
 
  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
  .innerHTML = `You Chose <img src="Images/${playerMove}-emoji.png" alt="" class="move-icon">
                Computer chose <img src="Images/${computerMove}-emoji.png" alt="" class="move-icon">
                `;
  
  localStorage.setItem('score', JSON.stringify(score));

//         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`);
}

function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}