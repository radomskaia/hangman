import { gameState, startGame } from './startGame.js';

/**
 * Resets the game state, updates the UI elements, and starts a new game.
 * @param { Object } elements - An object containing the DOM elements used in the game.
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
