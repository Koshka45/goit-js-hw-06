const itemsCategory = document.querySelectorAll(".item");
const numbersOfCategory = itemsCategory.length;

console.log(`
      Numbers of Category: ${numbersOfCategory}
`);

itemsCategory.forEach((item) => {
  console.log(`
      Category: ${item.firstElementChild.textContent}
      Elements: ${item.lastElementChild.children.length}
  `);
});
