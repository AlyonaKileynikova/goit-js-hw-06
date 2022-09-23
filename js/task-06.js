const input = document.querySelector("#validation-input");
const correctInputLength = document.querySelector("[data-length]");
const inputLength = Number(input.dataset.length);

input.addEventListener("blur", onBlur);

function onBlur() {
    if (input.value.length === inputLength) {
        input.classList.remove('invalid');
        return input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        return input.classList.add('invalid');
    }
}






// const inputValid = document.querySelector("#validation-input.valid");
// const inputInvalid = document.querySelector("#validation-input.invalid");

// inputValid.addEventListener("click", () => input.focus());
// inputInvalid.addEventListener("click", () => input.blur())

// input.addEventListener("focus", () => input.value = )