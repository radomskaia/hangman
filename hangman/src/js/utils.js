export function createDOMElement({
  tagName = 'div',
  classList = [],
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
