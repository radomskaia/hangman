import { createDOMElement } from './utils.js';

export function createDOMTree() {
  const elements = {};
  elements.container = createDOMElement({
    classList: ['container', 'flex', 'flex_gap-48'],
  });
  document.body.appendChild(elements.container);
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
      alt: 'empty gallows',
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
    classList: ['hintText'],
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
  return {
    image: elements.image,
    hint: elements.hint,
    wordWrapper: elements.wordWrapper,
    keyboardWrapper: elements.keyboardWrapper,
    guessesCounter: elements.guessesCounter,
  };
}
