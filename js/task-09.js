function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector("button.change-color");

const body = document.body;

const color = document.querySelector(".color");

button.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});
