/** @format */

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  // array로 저장하기
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function complete() {}

function delTodo(id) {
  toDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(id);
  });
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  const newButton = document.createElement("button");
  // 삭제 버튼 추가하기
  button.innerText = "❌";
  button.addEventListener("click", () => {
    delTodo(li.id);
    li.remove();
  });
  // 완료 버튼
  newButton.innerText = "완료";
  // 입력값 리스트로 출력하기
  li.appendChild(span);

  span.appendChild(button);

  todoList.appendChild(li);
}

function addTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  // todo 저장을 위해 배열에 추가
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  // 입력값 출력하기
  paintTodo(newTodoObj);
  // todo 저장하기
  saveTodos();
}

todoForm.addEventListener("submit", addTodo);

// todos 가져오기
const saveToDos = localStorage.getItem(TODOS_KEY);

// console.log(saveToDos);

if (saveToDos !== null) {
  const parsedTodos = JSON.parse(saveToDos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
