const inputEL = document.querySelector("#validation-input");

inputEL.addEventListener("blur", onInputAmountOfSymbolsCheck);

function onInputAmountOfSymbolsCheck(event) {
  if (Number(inputEL.dataset.length) !== event.currentTarget.value.length) {
    inputEL.classList.add("invalid");
    inputEL.classList.remove("valid");
  } else {
    inputEL.classList.add("valid");
    inputEL.classList.remove("invalid");
  }
}
