const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeListOfIngridients = (ingredients) => {
  return ingredients.map((ingridient) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = ingridient;
    return liEl;
  });
};

const elements = makeListOfIngridients(ingredients);

const listEl = document.querySelector("#ingredients");
listEl.append(...elements);
