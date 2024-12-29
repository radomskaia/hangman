import questions from '../questions.json';
import { createDOMElement } from './utils.js';
questions.sort(() => Math.random() - 0.5);
const wordLetters = {};
function renderLetter(charIndex) {
  const letterElement = createDOMElement({
    tagName: 'li',
    textContent: '_',
    classList: ['header-primary'],
    attributes: {
      'data-index': charIndex,
    },
  });
  wordLetters[charIndex] = letterElement;
  return letterElement;
}

export function thinkWord(elements) {
  const question = questions.pop();
  const word = question.word.split('');
  elements.hint.textContent = question.question;
  word.forEach((_, index) => {
    elements.wordWrapper.append(renderLetter(index));
  });
  console.log(word);
  return [word, wordLetters];
}
