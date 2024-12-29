// export const TABLET_WIDTH = 768;
export const DELAY_TIME = 300;

// export const mediaQuery = window.matchMedia(`(max-width: ${TABLET_WIDTH}px)`);

export function createDOMElement({
  tagName = 'div',
  classList = '' || [],
  textContent = '',
  attributes = {},
} = {}) {
  const element = document.createElement(tagName);
  if (Array.isArray(classList)) {
    element.classList.add(...classList);
  } else if (classList.trim()) {
    element.classList.add(...classList.split(' '));
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) =>
      element.setAttribute(key, value),
    );
  }

  return element;
}

export function debounce(callback, delay = DELAY_TIME) {
  let timeoutID;
  return function (...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => callback(...args), delay);
  };
}
