import { gameState, startGame } from './startGame.js';

/**
 * Resets the game state, updates the UI elements, and starts a new game.
 * @param {Object} elements - An object containing the DOM elements used in the game.
 * @param {HTMLImageElement} elements.image - The image element representing the gallows.
 * @param {HTMLElement} elements.guessesCounter - The element displaying the number of guesses.
 * @param {HTMLElement} elements.wordWrapper - The container for the guessed letters of the word.
 * @param {Object} elements.keyboardKeys - An object containing the keyboard button elements.
 */
export function resetGame(elements) {
  elements.image.src = './images/empty-gallows.png';
  elements.guessesCounter.textContent = '0';
  elements.wordWrapper.innerHTML = '';
  Object.values(elements.keyboardKeys).forEach((button) => {
    if (button.disabled) {
      button.disabled = false;
    }
  });
  gameState.isEnd = false;
  gameState.counter = 0;
  startGame(elements);
}
