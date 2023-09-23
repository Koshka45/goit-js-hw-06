const inputBtn = document.querySelector("#validation-input");

inputBtn.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const inputValue = inputBtn.value;

  const maxLength = inputBtn.getAttribute("data-length");

  if (inputValue.length === Number(maxLength)) {
    inputBtn.classList.remove("invalid");
    inputBtn.classList.add("valid");
  } else {
    inputBtn.classList.remove("valid");
    inputBtn.classList.add("invalid");
  }
}
