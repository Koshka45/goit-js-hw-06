const inputEl = document.querySelector("#name-input");

const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", currentName);

function currentName(event) {
  const input = event.currentTarget;

  spanEl.textContent =
    input.value.trim() === ""
      ? (spanEl.textContent = "Anonymous")
      : (spanEl.textContent = input.value);
}
