const counterValue = document.querySelector("#value");
const buttonDecrement = document.querySelector('[data-action ="decrement"]');
const buttonIncrement = document.querySelector('[data-action ="increment"]');

buttonDecrement.addEventListener("click", onButtonDecrementClick);
buttonIncrement.addEventListener("click", onButtonIncrementClick);
counterValue.addEventListener("change", onSpanChange);

function onButtonDecrementClick(event) {
  console.log(--counterValue.textContent);
}

function onButtonIncrementClick(event) {
  console.log(++counterValue.textContent);
}

function onSpanChange(event) {
  console.log(event.currentTarget.value);
  counterValue.textContent = event.currentTarget.value;
}
