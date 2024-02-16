// 완료된 todo 보기 기능
const CompleteTodoFilter = () => {
  const complete = document.getElementById("complete"); // 완료된 todo 보기 버튼

  const showCompleteTodo = () => {
    const completeTodos = todos.filter((todo) => todo.complete);
    TodoList(completeTodos);
  };
  complete.addEventListener("click", showCompleteTodo);
};

export default CompleteTodoFilter;
