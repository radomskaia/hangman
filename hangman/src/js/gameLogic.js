const MAX_ATTEMPTS = 6;
let counter = 0;

function findAllIndexes(word, char) {
  const indexes = [];
  word.forEach((letter, index) => {
    if (letter === char) {
      indexes.push(index);
    }
  });
  return indexes.length === 0 ? false : indexes;
}

function updateCounter(guessesCounterElement, imageElement) {
  counter++;
  if (counter <= MAX_ATTEMPTS) {
    guessesCounterElement.textContent = counter;
    imageElement.src = `./src/images/gallows-${counter}.png`;
  }
}

function checkGameOver(wordLength, modal, word) {
  if (!(counter === MAX_ATTEMPTS) && wordLength) {
    return;
  }
  modal.text.textContent = wordLength ? 'GAME OVER' : 'YOU WIN';
  modal.word.textContent = word.join('').toUpperCase();
  modal.modal.showModal();
}

export function gameLogic(word, elements, char, charButton) {
  const indexes = findAllIndexes(word, char);
  if (!indexes) {
    updateCounter(elements.guessesCounter, elements.image);
    charButton.disabled = true;
  } else {
    indexes.forEach((index) => {
      elements.wordLetters[index].textContent = word[index];
      delete elements.wordLetters[index];
    });
  }
  charButton.disabled = true;
  checkGameOver(Object.keys(elements.wordLetters).length, elements.modal, word);
}
