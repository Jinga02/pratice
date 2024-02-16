import createTodo from "./src/module/todo/todoItem/CreateTodo.js";
import TodoList from "./src/module/todo/TodoList.js";
const allButton = document.getElementById("all");
const importantButton = document.getElementById("important");
const activeButton = document.getElementById("active");
const completeButton = document.getElementById("complete");

let todos = []; // todo 목록을 저장할 배열

// 로컬 스토리지에서 저장된 todo 목록 불러오기
if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
}
// 모든 todo를 보여주는 함수
allButton.addEventListener("click", () => {
  let allTodos = todos;
  TodoList(allTodos);
});

// 중요한 todo만 보여주는 함수
importantButton.addEventListener("click", () => {
  let importantTodos = todos.filter((todo) => todo.important === true);
  TodoList(importantTodos);
});

// 활성 상태인 todo만 보여주는 함수
activeButton.addEventListener("click", () => {
  let activeTodos = todos.filter((todo) => todo.complete === false);
  TodoList(activeTodos);
});

// 완료된 todo만 보여주는 함수
completeButton.addEventListener("click", () => {
  let completedTodos = todos.filter((todo) => todo.complete === true);
  TodoList(completedTodos);
});
createTodo(todos, TodoList); // todo 추가 기능 호출
TodoList(todos); // 초기 렌더링 시 todo 목록 출력
