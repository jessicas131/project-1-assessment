//constants

//state variables
let sum = '';

//cached elements
const inputEl = document.querySelector('#input');
const messageEl = document.querySelector('#numDisplay');

//event listeners
document.querySelector('#minus').addEventListener('click', handleMinus);
document.querySelector('#plus').addEventListener('click', handlePlus);

//functions 
init();

function init(){
  inputEl.value = 1
  messageEl.textContent = 0;
}

function handlePlus() {
  sum = messageEl.textContent;
  messageEl.textContent = parseInt(sum) + parseInt(inputEl.value);
}

function handleMinus() {
  sum = messageEl.textContent;
  messageEl.textContent = parseInt(sum) - parseInt(inputEl.value);
  
}