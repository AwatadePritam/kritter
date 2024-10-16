import { normalizeString } from './normalizeString';

const inputField = document.querySelector('#user-input');
const submitButton = document.querySelector('#submit-btn');
const outputElement = document.querySelector('#output');

submitButton.addEventListener('click', () => {
  const userInput = inputField.value;
  const normalizedOutput = normalizeString(userInput);
  
  outputElement.innerText = normalizedOutput;
});
