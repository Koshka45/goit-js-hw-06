const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const domElement = document.getElementById("ingredients");

ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");

  domElement.appendChild(li);
});
