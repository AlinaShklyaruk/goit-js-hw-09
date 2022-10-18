const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

let intervalId = null;

function onStartBtnClick() {
    startBtn.disabled = true;
    intervalId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopBtnClick() {
    //if (onStartBtnClick) {
   { startBtn.disabled = false;
    clearInterval(intervalId);
    }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
