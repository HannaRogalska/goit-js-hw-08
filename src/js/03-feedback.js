import { throttle } from 'lodash';
const formElement = document.querySelector('.feedback-form');
console.log(formElement);

formElement.addEventListener('submit', throttle(formSubmit, 500));
window.addEventListener('load', winFunction);

// Po wczytywaniu okna wykonamy zapisylanie mail oraz massage

function winFunction() {
  Array.from(formElement.elements).forEach(el => {
    if (el.name) {
      const prevVal = localStorage.getItem(el.name);
      el.value = prevVal;
    }
  });
}

// Nasluchuje i zapisuje  localStorage
function formSubmit(event) {
  Array.from(formElement.elements).forEach(el => {
    if (el.name) {
      localStorage.setItem(el.name, el.value);
    }
  });
}
