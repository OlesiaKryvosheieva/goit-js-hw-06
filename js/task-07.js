const inputEL = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEL.addEventListener("input", onInputChangeSize);

function onInputChangeSize(event) {
  spanEl.style.fontSize = event.currentTarget.value + "px";
}
