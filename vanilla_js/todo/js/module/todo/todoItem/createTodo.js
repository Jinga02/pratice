const todoForm = document.getElementById("todoFrom");
const todoInput = document.getElementById("todoInput");

export default function createTodo(todos, onRender) {
  // 새로운 todo의 고유 ID 생성
  let id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todoInput.value.trim() == "") {
      return alert("오늘 할 일을 입력해주세요!.");
    }

    const todo = {
      id: id++,
      text: todoInput.value,
      complete: false,
      important: false,
    };
    todos.push(todo);
    todoInput.value = "";
    onRender(todos);
  });
}
