import { createDOMElement } from './utils.js';
import { resetGame } from './resetGame.js';

export function createDOMTree() {
  const elements = {};
  elements.container = createDOMElement({
    classList: ['container', 'flex', 'flex_gap-48'],
  });
  elements.wrapperLeft = createDOMElement({
    classList: [
      'flex',
      'flex--column',
      'width-30',
      'flex_gap-20',
      'flex--align-center',
    ],
  });
  elements.wrapperRight = createDOMElement({
    classList: ['flex', 'flex--column', 'flex_gap-20', 'flex--align-center'],
  });
  elements.container.append(elements.wrapperLeft, elements.wrapperRight);
  elements.imageWrapper = createDOMElement();
  elements.image = createDOMElement({
    tagName: 'img',
    classList: ['image'],
    attributes: {
      alt: 'gallows',
      src: './src/images/empty-gallows.png',
    },
  });
  elements.imageWrapper.append(elements.image);
  elements.headerPrimary = createDOMElement({
    tagName: 'h1',
    textContent: 'hangman game',
    classList: ['header-primary'],
  });
  elements.wrapperLeft.append(elements.imageWrapper, elements.headerPrimary);
  elements.wordWrapper = createDOMElement({
    tagName: 'ul',
    classList: ['flex', 'flex_gap-10'],
  });
  elements.hintWrapper = createDOMElement({
    tagName: 'p',
    textContent: 'Hint: ',
  });
  elements.hint = createDOMElement({
    tagName: 'strong',
  });
  elements.hintWrapper.append(elements.hint);
  elements.incorrectWrapper = createDOMElement({
    tagName: 'p',
    textContent: 'Incorrect guesses: ',
  });
  elements.guessesCounter = createDOMElement({
    tagName: 'span',
    textContent: '0',
    classList: ['counter-text'],
  });
  elements.incorrectText = createDOMElement({
    tagName: 'span',
    textContent: ' / 6',
    classList: ['counter-text'],
  });
  elements.incorrectWrapper.append(
    elements.guessesCounter,
    elements.incorrectText,
  );
  elements.keyboardWrapper = createDOMElement({
    classList: ['flex', 'flex--wrap', 'flex_gap-10'],
  });
  elements.wrapperRight.append(
    elements.wordWrapper,
    elements.hintWrapper,
    elements.incorrectWrapper,
    elements.keyboardWrapper,
  );
  elements.modal = createDOMElement({
    tagName: 'dialog',
    classList: [
      'modal',
      'flex',
      'flex--column',
      'flex--align-center',
      'flex_gap-20',
    ],
  });
  elements.modalButton = createDOMElement({
    tagName: 'button',
    classList: ['button', 'modal-button'],
    textContent: 'Play again',
  });
  elements.modalText = createDOMElement({
    tagName: 'p',
  });
  elements.modalText2 = createDOMElement({
    tagName: 'p',
    textContent: 'Secret word: ',
  });
  elements.secretWord = createDOMElement({
    tagName: 'strong',
  });
  elements.modalText2.append(elements.secretWord);
  elements.modal.append(
    elements.modalText,
    elements.modalText2,
    elements.modalButton,
  );
  document.body.append(elements.container, elements.modal);

  const usedElements = {
    image: elements.image,
    hint: elements.hint,
    wordWrapper: elements.wordWrapper,
    keyboardWrapper: elements.keyboardWrapper,
    guessesCounter: elements.guessesCounter,
    modal: {
      modal: elements.modal,
      text: elements.modalText,
      word: elements.secretWord,
    },
  };

  elements.modalButton.addEventListener('click', () => {
    resetGame(usedElements);
    usedElements.modal.modal.close();
  });

  return usedElements;
}
