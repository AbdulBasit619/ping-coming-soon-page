// Activating strict mode
'use strict';

//////////////////////////
////// SELECTING ELEMENTS

const messageError = document.querySelector('.message--error');

const email = document.querySelector('#email');
const form = document.querySelector('form');

//////////////////////////
////// IMPLEMENTING FUNCTIONALITY

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const valInput = email.value;
  if (!emailRegex.test(valInput)) {
    messageError.classList.remove('hidden');
    email.style.borderColor = 'hsl(354, 100%, 66%)';
  } else {
    messageError.classList.add('hidden');
    email.style.borderColor = 'hsl(223, 100%, 88%)';
  }
});
