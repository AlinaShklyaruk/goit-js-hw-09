import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const inputEl = document.querySelector('input[type="text"]');
const startBtn = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
const fieldsEl = document.querySelectorAll('.field');
//console.log(timerEl);
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

timerEl.style.display = 'flex';
timerEl.style.marginRight = '-10px';
fieldsEl.forEach((field => {
    field.style.display = 'flex';
    field.style.alignItems = 'center';
    field.style.flexDirection = 'column';
    field.style.marginRight = '10px';
}));

startBtn.disabled = 'true';
let timerDate = [];
const currentDate = new Date();
startBtn.addEventListener('click', () => {
    timer.start();
});


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {

    if (selectedDates[0] <= currentDate) {
        Notiflix.Notify.failure('Please choose a date in the future');
    }
    startBtn.removeAttribute('disabled', true);
    timerDate = selectedDates[0];
 },
};
flatpickr(inputEl, options);

const timer = {
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;

        const intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = timerDate - currentTime;
            const timeLeft = convertMs(deltaTime);
            updateTimerFace(timeLeft);
        }, 1000);
    },
    stop() {
            clearInterval(intervalId);
    }
};



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function updateTimerFace({ days, hours, minutes, seconds }) {
    daysEl.textContent = `${days}`;
    hoursEl.textContent = `${hours}`;
    minutesEl.textContent = `${minutes}`;
    secondsEl.textContent = `${seconds}`;
}