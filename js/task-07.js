const textInput = document.querySelector("#font-size-control");

const output = document.querySelector("#text");

output.style.fontSize = `${textInput.value}px`;

textInput.addEventListener("input", (event) => {
  output.style.fontSize = `${event.currentTarget.value}px`;
});
