const ActiveTodoFilter = () => {
  const active = document.getElementById("active"); // 진행 중인 todo 보기 버튼

  // 진행 중인 todo 보기 기능
  const showActiveTodo = () => {
    const activeTodos = todos.filter((todo) => !todo.complete);
    TodoList(activeTodos);
  };
  active.addEventListener("click", showActiveTodo);
};

export default ActiveTodoFilter;
