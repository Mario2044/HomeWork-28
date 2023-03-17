const input = document.getElementById('myInput');
const div = document.querySelector('.box');

// Функція, яка викликається при фокусуванні на полі вводу
function onFocus() {
  div.style.display = 'block';
}

// Функція, яка викликається при відході фокусу з поля вводу
function onBlur() {
  div.style.display = 'none';
}

// Додаємо слухачі подій на поле вводу
input.addEventListener('focus', onFocus);
input.addEventListener('blur', onBlur);