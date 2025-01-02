import { gameState } from './startGame.js';
const MAX_ATTEMPTS = 6;

function findAllIndexes(char) {
  const indexes = [];
  gameState.secretWord.forEach((letter, index) => {
    if (letter === char) {
      indexes.push(index);
    }
  });
  return indexes.length === 0 ? false : indexes;
}

function updateCounter(guessesCounterElement, imageElement) {
  gameState.counter++;
  if (gameState.counter <= MAX_ATTEMPTS) {
    guessesCounterElement.textContent = gameState.counter;
    imageElement.src = `./images/gallows-${gameState.counter}.png`;
  }
}

function checkGameOver(wordLength, modal) {
  if (!(gameState.counter === MAX_ATTEMPTS) && wordLength) {
    return;
  }
  gameState.isEnd = true;
  modal.text.textContent = wordLength ? 'GAME OVER' : 'YOU WIN';
  modal.word.textContent = gameState.secretWord.join('').toUpperCase();
  modal.modal.showModal();
}

export function gameLogic(elements, char, charButton) {
  const indexes = findAllIndexes(char);
  if (!indexes) {
    updateCounter(elements.guessesCounter, elements.image);
    charButton.disabled = true;
  } else {
    indexes.forEach((index) => {
      elements.wordLetters[index].textContent = gameState.secretWord[index];
      delete elements.wordLetters[index];
    });
  }
  charButton.disabled = true;
  checkGameOver(Object.keys(elements.wordLetters).length, elements.modal);
}
