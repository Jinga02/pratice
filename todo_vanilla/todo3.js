const todoList = document.getElementById("todoList");
const inputTodo = document.getElementById("inputTodoText");
const allButton = document.getElementById("allButton");
const activeButton = document.getElementById("activeButton");
const completeButton = document.getElementById("completeButton");
const allDeleteButton = document.getElementById("allDeleteButton");

// todo를 담을 변수
let todos = [];
let id = 0;

// todo 생성
const createTodo = () => {
  document.getElementById("todoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    onAdd(inputTodo.value);
    inputTodo.value = "";
    onRender(todos);
  });
};

// todo 출력
const onRender = (filterTodos) => {
  todoList.innerHTML = "";
  filterTodos.map((todo) => {
    const todoItem = document.createElement("li");
    todoItem.dataset.id = todo.id;
    todoItem.id = "todoItem";
    const todoText = document.createElement("p");
    todoText.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.addEventListener("click", () => {
      onDelete(todo.id);
      onRender(todos);
    });

    const updateButton = document.createElement("button");
    updateButton.addEventListener("click", () => {
      onUpdateTodo(todo.id);
      onRender(todos);
    });

    updateButton.textContent = "완료";
    todoItem.appendChild(updateButton);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
    console.log(todos);
  });
};

// todo 추가
const onAdd = (todoText) => {
  if (todoText.trim() !== "") {
    todos.push({
      id: id++,
      text: todoText,
      complete: false,
    });
  } else {
    alert("할 일을 입력해주세요!");
  }
};

// todo 삭제
const onDelete = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};

// todo 모두 삭제
const onAllDelete = () => {
  todos = [];
};
allDeleteButton.addEventListener("click", () => {
  onAllDelete();
  onRender(todos);
});

// todo 상태변경
const onUpdateTodo = (id) => {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, complete: !todo.complete };
    }
    return todo;
  });
};

// 모든 todo
const onFilterAll = () => {
  onRender(todos);
};
allButton.addEventListener("click", onFilterAll);

// 완료 된 todo
const onFilterComplete = () => {
  const completeTodos = todos.filter((todo) => {
    return todo.complete === true;
  });
  console.log(completeTodos);
  onRender(completeTodos);
};
completeButton.addEventListener("click", onFilterComplete);

// 진행 중 todo
const onFilterActive = () => {
  const activeTodos = todos.filter((todo) => {
    return todo.complete === false;
  });
  onRender(activeTodos);
};
activeButton.addEventListener("click", onFilterActive);

createTodo();
onRender(todos);
