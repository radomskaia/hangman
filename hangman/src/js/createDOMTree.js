import { createDOMElement } from './utils.js';
import { resetGame } from './resetGame.js';

/**
 * Creates and appends the DOM tree for the game interface.
 * Initializes event listeners and returns references to the essential elements.
 * @returns {Object} - An object containing references to the created DOM elements.
 */
export function createDOMTree() {
  const allElements = {};

  allElements.container = createDOMElement({
    classList: ['container', 'flex', 'flex_gap-48'],
  });
  allElements.wrapperLeft = createDOMElement({
    classList: [
      'flex',
      'flex--column',
      'flex_gap-20',
      'flex--align-justify-center',
    ],
  });
  allElements.wrapperRight = createDOMElement({
    classList: ['flex', 'flex--column', 'flex_gap-20', 'flex--align-center'],
  });

  allElements.container.append(
    allElements.wrapperLeft,
    allElements.wrapperRight,
  );

  allElements.imageWrapper = createDOMElement();
  allElements.image = createDOMElement({
    tagName: 'img',
    classList: ['image'],
    attributes: {
      alt: 'gallows',
      src: './images/empty-gallows.png',
    },
  });
  allElements.imageWrapper.append(allElements.image);
  allElements.headerPrimary = createDOMElement({
    tagName: 'h1',
    textContent: 'hangman game',
    classList: ['header-primary'],
  });
  allElements.wrapperLeft.append(
    allElements.imageWrapper,
    allElements.headerPrimary,
  );

  allElements.wordWrapper = createDOMElement({
    tagName: 'ul',
    classList: ['flex', 'flex_gap-10'],
  });
  allElements.hintWrapper = createDOMElement({
    tagName: 'p',
    textContent: 'Hint: ',
  });
  allElements.hint = createDOMElement({
    tagName: 'strong',
  });
  allElements.hintWrapper.append(allElements.hint);
  allElements.incorrectWrapper = createDOMElement({
    tagName: 'p',
    textContent: 'Incorrect guesses: ',
  });
  allElements.guessesCounter = createDOMElement({
    tagName: 'span',
    textContent: '0',
    classList: ['counter-text'],
  });
  allElements.incorrectText = createDOMElement({
    tagName: 'span',
    textContent: ' / 6',
    classList: ['counter-text'],
  });
  allElements.incorrectWrapper.append(
    allElements.guessesCounter,
    allElements.incorrectText,
  );
  allElements.keyboardWrapper = createDOMElement({
    classList: ['flex', 'flex--wrap', 'flex_gap-10'],
  });
  allElements.wrapperRight.append(
    allElements.wordWrapper,
    allElements.hintWrapper,
    allElements.incorrectWrapper,
    allElements.keyboardWrapper,
  );

  allElements.modal = createDOMElement({
    tagName: 'dialog',
    classList: [
      'modal',
      'flex',
      'flex--column',
      'flex--align-center',
      'flex_gap-20',
    ],
  });
  allElements.modalButton = createDOMElement({
    tagName: 'button',
    classList: ['button', 'modal-button'],
    textContent: 'Play again',
  });
  allElements.modalText = createDOMElement({
    tagName: 'p',
  });
  allElements.modalText2 = createDOMElement({
    tagName: 'p',
    textContent: 'Secret word: ',
  });
  allElements.secretWord = createDOMElement({
    tagName: 'strong',
  });
  allElements.modalText2.append(allElements.secretWord);
  allElements.modal.append(
    allElements.modalText,
    allElements.modalText2,
    allElements.modalButton,
  );

  document.body.append(allElements.container, allElements.modal);

  const usedElements = {
    image: allElements.image,
    hint: allElements.hint,
    wordWrapper: allElements.wordWrapper,
    keyboardWrapper: allElements.keyboardWrapper,
    guessesCounter: allElements.guessesCounter,
    modal: {
      modal: allElements.modal,
      text: allElements.modalText,
      word: allElements.secretWord,
    },
  };

  allElements.modalButton.addEventListener('click', () => {
    resetGame(usedElements);
    usedElements.modal.modal.close();
  });

  return usedElements;
}
