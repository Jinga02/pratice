const DeleteAllTodo = (todos, TodoList) => {
  const allDeleteTodoButton = document.getElementById("allDeleteButton");
  allDeleteTodoButton.addEventListener("click", () => {
    const answer = confirm("모두 삭제 하시겠습니까?");
    if (answer) {
      todos = [];
      localStorage.setItem("todos", todos);
      TodoList(todos);
      window.location.reload();
    }
  });
};
export default DeleteAllTodo;
