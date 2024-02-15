const change = (img, button, todo) => {
  img.src = todo.important ? "./asset/star.png" : "./asset/emptyStar.png";
  button.id = todo.important ? "importantButton" : "normalButton";
};

const ImportantTodo = (todo, todos, TodoRender) => {
  const importantButton = document.createElement("button");
  const importantImg = document.createElement("img");
  importantImg.id = "importantImg";
  importantImg.alt = "star";

  importantButton.appendChild(importantImg);

  change(importantImg, importantButton, todo);

  importantButton.addEventListener("click", () => {
    todo.important = !todo.important;
    change(importantImg, importantButton, todo);
    TodoRender(todos);
  });
  return importantButton;
};

export default ImportantTodo;
