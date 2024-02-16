const DeleteTodo = (deleteTodo, todos, TodoList) => {
  const deleteButton = document.createElement("button");
  const deleteImg = document.createElement("img");
  deleteImg.src = "./asset/trash.png";
  deleteButton.appendChild(deleteImg);
  deleteButton.id = "deleteButton";
  deleteButton.addEventListener("click", () => {
    const answer = confirm("정말 끝내셨습니까?");
    if (answer) {
      todos = todos.filter((todo) => {
        return todo.id !== deleteTodo.id;
      });
      localStorage.setItem("todos", JSON.stringify(todos));
      TodoList(todos);
      window.location.reload();
    }
  });

  return deleteButton;
};

export default DeleteTodo;
