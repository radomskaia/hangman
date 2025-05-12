import { gameState, getSecretWord } from './startGame.js';

const MAX_ATTEMPTS = 6;
const GAME_MESSAGES = {
  WIN: 'YOU WIN',
  LOSE: 'GAME OVER',
};

function findAllIndexes(char) {
  const indexes = [];
  getSecretWord().forEach((letter, index) => {
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
  modal.text.textContent = wordLength ? GAME_MESSAGES.LOSE : GAME_MESSAGES.WIN;
  modal.word.textContent = getSecretWord().join('').toUpperCase();
  modal.modal.showModal();
}

/**
 * Handles the core game logic: checks the entered character, updates the game state,
 * and ends the game if necessary.
 * @param {Object} elements - An object containing the DOM elements used in the game.
 * @param {string} char - The entered character.
 * @param {HTMLButtonElement} charButton - The button corresponding to the entered character.
 */
export function gameLogic(elements, char, charButton) {
  const indexes = findAllIndexes(char);
  if (!indexes) {
    updateCounter(elements.guessesCounter, elements.image);
    charButton.disabled = true;
  } else {
    indexes.forEach((index) => {
      elements.wordLetters[index].textContent = getSecretWord()[index];
      delete elements.wordLetters[index];
    });
  }
  checkGameOver(Object.keys(elements.wordLetters).length, elements.modal);
}
