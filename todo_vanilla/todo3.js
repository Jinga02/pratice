const todoList = document.getElementById("todoList");
const inputTodo = document.getElementById("inputTodoText");

// todo를 담을 변수
let todos = [];
let id = 0;

const createTodo = () => {
  document.getElementById("todoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    onAdd(inputTodo.value);
    inputTodo.value = "";
    console.log(todos);
    onRender();
  });
};

const onRender = () => {
  todoList.innerHTML = "";
  todos.map((todo) => {
    const todoItem = document.createElement("li");
    todoItem.dataset.id = todo.id;
    todoItem.id = "todoItem";
    const todoText = document.createElement("p");
    todoText.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.addEventListener("click", () => {
      onDelete(todo.id);
      onRender();
    });

    const updateButton = document.createElement("button");
    updateButton.addEventListener("click", () => {
      onUpdateTodo(todo.id);
      onRender();
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

const onUpdateTodo = (id) => {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, complete: !todo.complete };
    }
    return todo;
  });
};

createTodo();
onRender();
