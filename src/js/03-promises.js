import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name="delay"');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');
const submitBtn = document.querySelector('button[type="submit"]');

formEl.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(event) {
  event.preventDefault();
  
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
