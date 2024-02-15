import createTodo from "./src/module/todo/todoItem/CreateTodo.js";
import TodoList from "./src/module/todo/TodoList.js";

let todos = []; // todo 목록을 저장할 배열

// 로컬 스토리지에서 저장된 todo 목록 불러오기
if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
}

createTodo(todos, TodoList); // todo 추가 기능 호출
TodoList(todos); // 초기 렌더링 시 todo 목록 출력
