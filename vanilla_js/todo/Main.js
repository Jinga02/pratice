import createTodo from "./src/module/todo/todoItem/CreateTodo.js";
import todoRender from "./src/module/todo/TodoRender.js";
const all = document.getElementById("all"); // 모든 todo 보기 버튼
const active = document.getElementById("active"); // 진행 중인 todo 보기 버튼
const complete = document.getElementById("complete"); // 완료된 todo 보기 버튼
const important = document.getElementById("important"); // 중요한 todo 보기 버튼

let todos = []; // todo 목록을 저장할 배열

// 로컬 스토리지에서 저장된 todo 목록 불러오기
if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
}

// 모든 todo 보기 기능
const showAllTodo = () => {
  todoRender(todos);
};
all.addEventListener("click", () => {
  showAllTodo();
});

// 진행 중인 todo 보기 기능
const showActiveTodo = () => {
  const activeTodos = todos.filter((todo) => {
    return todo.complete === false;
  });
  todoRender(activeTodos);
};
active.addEventListener("click", () => {
  showActiveTodo();
});

// 완료된 todo 보기 기능
const showCompleteTodo = () => {
  const completeTodos = todos.filter((todo) => {
    return todo.complete === true;
  });
  todoRender(completeTodos);
};
complete.addEventListener("click", () => {
  showCompleteTodo();
});

// 중요한 todo 보기 기능
const showImportantTodo = () => {
  const importantTodos = todos.filter((todo) => {
    return todo.important === true;
  });
  todoRender(importantTodos);
};
important.addEventListener("click", () => {
  showImportantTodo();
});

createTodo(todos, todoRender); // todo 추가 기능 호출
todoRender(todos); // 초기 렌더링 시 todo 목록 출력
