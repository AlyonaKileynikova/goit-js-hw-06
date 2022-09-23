const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) => {
    const valueInput = event.currentTarget.value.trim()

    nameOutput.textContent = valueInput || "Anonymous";
})


// nameInput.addEventListener("input", (event) => {
//     nameOutput.textContent = event.currentTarget.value;
// });