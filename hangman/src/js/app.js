import { createDOMTree } from './createDOMTree.js';
import { keyboard } from './keyboard.js';
import { startGame } from './startGame.js';

export function app() {
  const elements = createDOMTree();
  startGame(elements);
  keyboard(elements);
}
