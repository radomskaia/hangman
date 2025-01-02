import { gameState, startGame } from './startGame.js';

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
