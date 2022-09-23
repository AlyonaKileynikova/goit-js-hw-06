let counterValue = 0;

const btnEl = document.querySelectorAll('button');
const valueEl = document.querySelector('#value');

btnEl[0].addEventListener("click", () => {
    valueEl.textContent = counterValue -= 1;
})

btnEl[1].addEventListener("click", () => {
  valueEl.textContent = counterValue += 1;
});

// const buttonDecrement = document.querySelector('button[data-action="decrement"]');
// const buttonIncrement = document.querySelector('button[data-action="increment"]');
    
// const valueEl = document.querySelector("#value");

// buttonDecrement.addEventListener("click", () => {
//   counterValue -= 1;
// });
// buttonIncrement.addEventListener("click", () => {
//   counterValue += 1;
// });

// valueEl.textContent = counterValue;