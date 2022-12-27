const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  const value = event.currentTarget.value;
  spanEl.textContent = value;

  if (value === "") {
    spanEl.textContent = "Anonymous";
  }
  console.log(inputEl);
}
