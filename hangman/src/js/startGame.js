import questions from '../questions.json';
import { createDOMElement } from './utils.js';
export const gameState = { secretWord: '', isEnd: false, counter: 0 };

questions.sort(() => Math.random() - 0.5);

function renderLetter(charIndex) {
  return createDOMElement({
    tagName: 'li',
    textContent: '_',
    classList: ['header-primary'],
    attributes: {
      'data-index': charIndex,
    },
  });
}

export function startGame(elements) {
  if (questions.length === 0) {
    window.location.reload();
  }
  const question = questions.pop();
  gameState.secretWord = question.word.split('');
  elements.hint.textContent = question.question;
  elements.wordLetters = {};
  gameState.secretWord.forEach((_, index) => {
    elements.wordLetters[index] = renderLetter(index, elements);
    elements.wordWrapper.append(elements.wordLetters[index]);
  });
  console.log('secret word:', gameState.secretWord.join(''));
}
