'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.body;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', colorGenerator);

let timerId;

function colorGenerator(e) {
  timerId = setInterval(() => {
    body.style.backgroundColor = `${
      colors[randomIntegerFromInterval(0, colors.length - 1)]
    }`;
  }, 1000);
  stopBtn.addEventListener('click', stopGeneration);
  startBtn.setAttribute('disabled', 'disabled');
}

function stopGeneration() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.removeEventListener('click', stopGeneration);
}