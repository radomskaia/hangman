import { createDOMTree } from './createDOMTree.js';
import { keyboard } from './keyboard.js';
import { thinkWord } from './thinkWord.js';
import * as constants from 'node:constants';

export function app() {
  const elements = createDOMTree();
  const [word, wordLetters] = thinkWord({
    wordWrapper: elements.wordWrapper,
    hint: elements.hint,
  });
  keyboard(elements.keyboardWrapper, word, wordLetters, elements.image);
}
