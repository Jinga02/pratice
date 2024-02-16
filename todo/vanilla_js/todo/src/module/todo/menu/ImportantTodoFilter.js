// 중요한 todo 보기 기능
const ImportantTodoFilter = (todos, TodoList) => {
  const important = document.getElementById("important"); // 중요한 todo 보기 버튼

  const showImportantTodo = () => {
    const importantTodos = todos.filter((todo) => todo.important);
    TodoList(importantTodos);
  };

  important.addEventListener("click", showImportantTodo);
};

export default ImportantTodoFilter;
