import { createDOMTree } from './createDOMTree.js';
import { keyboard } from './keyboard.js';

export function app() {
  const elements = createDOMTree();
  keyboard(elements.keyboardWrapper);
}
