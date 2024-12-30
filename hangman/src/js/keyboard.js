import { createDOMElement, DELAY_TIME } from './utils.js';
import { gameLogic } from './gameLogic.js';

const RUSSIAN_LAYOUT = { firstChar: 'а', lastChar: 'я' };
const ENGLISH_LAYOUT = {
  firstCharCode: 'a'.charCodeAt(),
  lastCharCode: 'z'.charCodeAt(),
};

const keyboardKeys = {};

function clickHandler(key, word, elements, char) {
  if (key.disabled) {
    return;
  }
  key.classList.add('button-keyboard-active');
  setTimeout(() => {
    key.classList.remove('button-keyboard-active');
    gameLogic(word, elements, char, key);
  }, DELAY_TIME);
}

function keydownHandler(event) {
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

function renderKey(charCode, elements, word) {
  const char = String.fromCharCode(charCode);
  const key = createDOMElement({
    tagName: 'button',
    classList: ['button', 'button-keyboard'],
  });
  const keyText = createDOMElement({
    tagName: 'p',
    classList: 'keyboard-text',
    textContent: char,
  });
  key.append(keyText);
  elements.keyboardWrapper.append(key);
  keyboardKeys[char] = key;
  key.addEventListener('click', () => {
    clickHandler(key, word, elements, char);
  });
  return key;
}

export function keyboard(elements, word) {
  for (
    let i = ENGLISH_LAYOUT.firstCharCode;
    i <= ENGLISH_LAYOUT.lastCharCode;
    i++
  ) {
    renderKey(i, elements, word);
  }
  window.addEventListener('keydown', keydownHandler);
}
