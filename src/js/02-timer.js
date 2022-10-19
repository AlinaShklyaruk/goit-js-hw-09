import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
const fieldsEl = document.querySelectorAll('.field');
//console.log(timerEl);

timerEl.style.display = 'flex';
timerEl.style.marginRight = '-10px';
fieldsEl.forEach((field => {
    field.style.display = 'flex';
    field.style.alignItems = 'center';
    field.style.flexDirection = 'column';
    field.style.marginRight = '10px';
}));



const fp = flatpickr(inputEl, {});