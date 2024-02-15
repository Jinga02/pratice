const change = (img, button, todo) => {
  img.src = todo.complete ? "./asset/check.png" : "./asset/circle.png";
  button.id = todo.complete ? "completeButton" : "activeButton";
};

const UpdateTodo = (todo, todos, TodoList) => {
  const updateButton = document.createElement("button");

  const updateImg = document.createElement("img");
  updateImg.id = "updateImg";
  updateImg.alt = "complete";

  updateButton.appendChild(updateImg);

  change(updateImg, updateButton, todo);

  updateButton.addEventListener("click", () => {
    todo.complete = !todo.complete;
    change(updateImg, updateButton, todo);
    TodoList(todos);
  });
  return updateButton;
};
export default UpdateTodo;
