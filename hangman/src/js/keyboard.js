import { createDOMElement } from './utils.js';
import { gameLogic } from './gameLogic.js';
import { gameState } from './startGame.js';

const DELAY_TIME = 300;
const RUSSIAN_LAYOUT = { firstChar: 'а', lastChar: 'я' };
const ENGLISH_LAYOUT = {
  firstCharCode: 'a'.charCodeAt(0),
  lastCharCode: 'z'.charCodeAt(0),
};

function clickHandler(key, elements, char) {
  if (key.disabled) {
    return;
  }
  key.disabled = true;
  key.classList.add('button-keyboard-active');
  gameLogic(elements, char, key);
  setTimeout(() => {
    key.classList.remove('button-keyboard-active');
  }, DELAY_TIME);
}

function keydownHandler(event, keyboardKeys) {
  if (gameState.isEnd) {
    return;
  }
  const key = event.key.toLowerCase();
  if (key >= RUSSIAN_LAYOUT.firstChar && key <= RUSSIAN_LAYOUT.lastChar) {
    console.log('Change the keyboard layout, please');
    return;
  }
  if (!keyboardKeys[key]) {
    return;
  }
  const newEvent = new MouseEvent('click');
  keyboardKeys[key].dispatchEvent(newEvent);
}

function renderKey(charCode, elements) {
  const char = String.fromCharCode(charCode);
  const key = createDOMElement({
    tagName: 'button',
    classList: ['button', 'button-keyboard'],
  });
  const keyText = createDOMElement({
    tagName: 'p',
    classList: ['keyboard-text'],
    textContent: char,
  });
  key.append(keyText);
  elements.keyboardWrapper.append(key);
  elements.keyboardKeys[char] = key;
  key.addEventListener('click', () => {
    clickHandler(key, elements, char);
  });
  return key;
}

/**
 * Renders the keyboard and adds event listeners for each key.
 * @param {Object} elements - An object containing the DOM elements used in the game.
 */
export function keyboard(elements) {
  elements.keyboardKeys = {};
  for (
    let i = ENGLISH_LAYOUT.firstCharCode;
    i <= ENGLISH_LAYOUT.lastCharCode;
    i++
  ) {
    renderKey(i, elements);
  }
  delete elements.keyboardWrapper;
  window.addEventListener('keydown', (event) => {
    keydownHandler(event, elements.keyboardKeys);
  });
}
