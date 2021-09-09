const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const bodyEl = document.body;
const btnStartEl = document.querySelector('[data-action="start"]');
const btnStopEl = document.querySelector('[data-action="stop"]');

btnStartEl.addEventListener('click', handleStartChangeBgColor);

let timerInt;
function handleStartChangeBgColor() {
  btnStartEl.setAttribute('disabled', '');
  timerInt = setInterval(() => {
    bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);

  function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

btnStopEl.addEventListener('click', handleStop);

function handleStop() {
  btnStartEl.removeAttribute('disabled');
  const stopInt = clearInterval(timerInt);
}
