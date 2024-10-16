import { normalizeString } from './normalizeString';

// Select the input field, button, and output element
const inputField = document.querySelector('#user-input');
const submitButton = document.querySelector('#submit-btn');
const outputElement = document.querySelector('#output');

// Add event listener to the button
submitButton.addEventListener('click', () => {
  const userInput = inputField.value;
  const normalizedOutput = normalizeString(userInput);
  
  // Display the result
  outputElement.innerText = normalizedOutput;
});
