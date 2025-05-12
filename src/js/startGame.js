import data from '../questions.json';
import { createDOMElement } from './utils.js';

export const gameState = { isEnd: false, counter: 0 };

let questions = sortData(data);
let secretWord = '';

function sortData(data) {
  return [...data.sort(() => Math.random() - 0.5)];
}

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

/**
 * Retrieves the current secret word.
 * @returns {string[]} - An array of characters representing the secret word.
 */
export function getSecretWord() {
  return secretWord;
}

/**
 * Initializes the game by selecting a new word, rendering its letters, and displaying the hint.
 * @param {Object} elements - An object containing the DOM elements used in the game.
 */
export function startGame(elements) {
  if (questions.length === 0) {
    questions = sortData(data);
  }
  const question = questions.pop();
  secretWord = question.word.split('');
  elements.hint.textContent = question.question;
  elements.wordLetters = {};
  secretWord.forEach((_, index) => {
    elements.wordLetters[index] = renderLetter(index, elements);
    elements.wordWrapper.append(elements.wordLetters[index]);
  });
  console.log('secret word:', secretWord.join(''));
}
