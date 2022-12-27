function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", onButtonChangeBodyColor);

function onButtonChangeBodyColor() {
  const colorOfEl = getRandomHexColor();
  document.body.style.backgroundColor = colorOfEl;
  span.textContent = colorOfEl;
}
