const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const productContainer = document.querySelector("#ingredients");
const itemsLi = ingredients.map((item) => {
  const itemsEl = document.createElement("li");
  itemsEl.classList.add("item");
  itemsEl.textContent = item;
  return itemsEl;
});

console.log(itemsLi);
productContainer.append(...itemsLi);

// const productContainer = document.querySelector("#ingredients");
// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemsLi = document.createElement("li");
//   itemsLi.textContent = ingredients[i];
//   itemsLi.classList.add("item");
//   productContainer.append(itemsLi);
// }
// console.log(productContainer);

// let arrayLi = [];

// arrayLi.forEach(function (ingredients) {
//   const itemsLi = document.createElement('li');
//   itemsLi.textContent = ingredients[i];
//   itemsLi.classList.add('item');
//   productContainer.append(itemsLi);
//   console.log(productContainer);
// })

// productContainer.append(...arrayLi);

// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemsLi = document.createElement('li');
//   itemsLi.textContent = ingredients[i];
//   itemsLi.classList.add('item');
//   productContainer.append(itemsLi);
//   console.log(productContainer);
// }

// const elements = ingredients.map(itemsLi);
// console.log(elements);

// productContainer.append(...elements);
// console.log(productContainer);

// for (let i = 0; i < ingredients.length; i = + 1) {
//   const itemsLi = document.createElement("li");
//   itemsLi.textContent = ingredients[i];
//   itemsLi.classList.add("item");
//   arrayLi.push(itemsLi);
// }

// productContainer.append(...arrayLi);
