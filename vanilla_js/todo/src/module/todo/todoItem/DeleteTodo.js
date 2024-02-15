const DeleteTodo = (deleteTodo, todoRender, todos) => {
  const deleteButton = document.createElement("button");
  const deleteImg = document.createElement("img");
  deleteImg.src = "./asset/trash.png";
  deleteButton.appendChild(deleteImg);
  deleteButton.id = "deleteButton";
  deleteButton.addEventListener("click", () => {
    todos = todos.filter((todo) => {
      return todo.id !== deleteTodo.id;
    });
    todoRender(todos);
  });
  return deleteButton;
};

export default DeleteTodo;
