const input = document.getElementById('myInput');
const div = document.querySelector('.box');

function onFocus() {
  div.style.display = 'block';
}

function onBlur() {
  div.style.display = 'none';
}

input.addEventListener('focus', onFocus);
input.addEventListener('blur', onBlur);