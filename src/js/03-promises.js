import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name="delay"');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');
//const submitBtn = document.querySelector('button[type="submit"]');

formEl.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(event) {
  event.preventDefault();
  let amount = Number(amountEl.value);
  let delay = Number(delayEl.value);
  let step = Number(stepEl.value);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay).then(onResolve).catch(onReject);
    delay += step;
    console.log(typeof amountEl.value);
  }  

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
    console.log(delay);
  })
}

function onResolve(value) {
  Notiflix.Notify.success(value);
}

function onReject(error) {
  Notiflix.Notify.failure(error);
}



