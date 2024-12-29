import { createDOMElement, DELAY_TIME } from './utils.js';

const RUSSIAN_LAYOUT = { firstChar: 'а', lastChar: 'я' };
const ENGLISH_LAYOUT = {
  firstCharCode: 'a'.charCodeAt(),
  lastCharCode: 'z'.charCodeAt(),
};

const keyboardKeys = {};

function renderKey(charCode, keyboardWrapper) {
  const char = String.fromCharCode(charCode);
  const key = createDOMElement({
    tagName: 'button',
    classList: ['button', 'button-keyboard'],
    //attributes: { 'data-char': char },
  });
  const keyText = createDOMElement({
    tagName: 'p',
    classList: 'keyboard-text',
    textContent: char,
  });
  key.append(keyText);
  keyboardWrapper.append(key);
  keyboardKeys[char] = key;
  key.addEventListener('click', () => {
    key.classList.add('button-keyboard-active');
    setTimeout(() => {
      key.classList.remove('button-keyboard-active');
    }, DELAY_TIME);
    console.log('char', char);
  });
  return key;
}

export function keyboard(keyboardWrapper) {
  for (
    let i = ENGLISH_LAYOUT.firstCharCode;
    i <= ENGLISH_LAYOUT.lastCharCode;
    i++
  ) {
    renderKey(i, keyboardWrapper);
  }

  window.addEventListener('keydown', (event) => {
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
  });
}
