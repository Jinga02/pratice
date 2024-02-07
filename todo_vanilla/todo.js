// 오늘 할 일 입력하기
const inputTodoText = document.getElementById("inputTodoText");

let todos = [];
let id = 0;

const addTodo = () => {
  inputTodoText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const todoText = inputTodoText.value;
      if (todoText.trim() !== "") {
        const todo = {
          id: id++,
          text: todoText,
          status: "active",
        };
        todos.push(todo);
        inputTodoText.value = "";
        alert(`오늘의 할 일 : ${todoText}가 되었습니다.`);
      }
    }
  });
};

addTodo();
