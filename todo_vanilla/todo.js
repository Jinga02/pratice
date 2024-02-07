// todo.js 파일

// 오늘 할 일 입력하기
const inputTodoText = document.getElementById("inputTodoText");
const todoList = document.getElementById("todoList");

let todos = [];
let id = 0;

const init = () => {
  document.getElementById("todoForm").addEventListener("submit", (e) => {
    e.preventDefault(); // 폼의 기본 동작인 새로고침 방지

    const todoText = inputTodoText.value;
    if (todoText.trim() !== "") {
      const todo = {
        id: id++,
        text: todoText,
        completed: false,
      };
      todos.push(todo);
      inputTodoText.value = "";
      renderTodoList();
    }
  });

  todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      const todoId = parseInt(e.target.parentElement.dataset.id);
      deleteTodoById(todoId);
      renderTodoList();
    }

    if (e.target.classList.contains("complete")) {
      const todoId = parseInt(e.target.parentElement.dataset.id);
      toggleTodoComplete(todoId);
      renderTodoList();
    }
  });
};

const renderTodoList = () => {
  todoList.innerHTML = ""; // 이전에 그려진 목록 초기화

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.dataset.id = todo.id;

    const todoText = document.createElement("span");
    todoText.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.className = "delete";

    const completeButton = document.createElement("button");
    completeButton.textContent = "완료";
    completeButton.className = "complete";

    if (todo.completed) {
      todoText.style.textDecoration = "line-through"; // 완료된 할 일은 취소선 효과
    }

    todoItem.appendChild(todoText);
    todoItem.appendChild(completeButton);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
  });
};

const deleteTodoById = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};

const toggleTodoComplete = (id) => {
  todos.forEach((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
  });
};

init();
