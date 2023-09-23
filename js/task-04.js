let counterValue = 0;

const decrementBtn = document.querySelector("[data-action=decrement]");

const span = document.getElementById("value");

const incrementBtn = document.querySelector("[data-action=increment]");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  span.textContent = counterValue;
});
