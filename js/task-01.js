const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length} `);

const categoryEl = document.querySelectorAll(".item");
categoryEl.forEach((item) => {
  const title = item.firstElementChild.textContent;
  console.log(` Category: ${title} `);

  const elements = item.lastElementChild.children.length;
  console.log(`Elements: ${elements}`);
});
