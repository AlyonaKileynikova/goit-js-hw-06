const fontSizeRange = document.querySelector("#font-size-control");
const fontSizeText = document.querySelector("#text");

fontSizeRange.value = 16;
fontSizeRange.addEventListener("input", (event) => { fontSizeText.style.fontSize = fontSizeRange.value + "px"; });