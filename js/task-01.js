function addListCategoryElem() {
    const itemsCategory = document.querySelectorAll('li.item');
    itemsCategory.forEach(item => {
        return console.log(`Category: ${item.firstElementChild.textContent}
        Elements: ${item.lastElementChild.children.length}
        Numbers of Category: ${item.firstElementChild.children.length}`);
    });

}
addListCategoryElem();
 