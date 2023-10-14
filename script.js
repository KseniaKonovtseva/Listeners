'use strict';

const input = document.getElementById('text');
const square = document.getElementById('square');
const range = document.getElementById('range');
const circle = document.getElementById('circle');

btn.addEventListener('click', () => {
  square.style.backgroundColor = input.value;
})

document.getElementById('e_btn').style.display = 'none';

range.addEventListener('input', () => {
  circle.style.width = range.value + '%';
  circle.style.height = range.value + '%';
})