const todoForm = document.querySelector("form");
const todoInput = document.querySelector("input");
const todoList = document.querySelector("ul");
const all = document.getElementById("all");
const active = document.getElementById("active");
const complete = document.getElementById("complete");

let todos = [];
let id = 0;

const onAddTodo = () => {
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todoInput.value.trim() == "") {
      return alert("오늘 할 일을 입력해주세요!.");
    }
    const todo = {
      id: id++,
      text: todoInput.value,
      complete: false,
    };
    todos.push(todo);
    todoInput.value = "";
    onRender(todos);
  });
};

const onDeleteTodo = (id) => {
  todos = todos.filter((todo) => {
    return todo.id !== id;
  });
  onRender(todos);
};

const onUpdateTodo = (id) => {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, complete: !todo.complete };
    }
    return todo;
  });
  onRender(todos);
};

const showAllTodo = () => {
  onRender(todos);
};
all.addEventListener("click", () => {
  showAllTodo();
});
const showActiveTodo = () => {
  const activeTodos = todos.filter((todo) => {
    return todo.complete === false;
  });
  onRender(activeTodos);
};
active.addEventListener("click", () => {
  showActiveTodo();
});
const showCompleteTodo = () => {
  const completeTodos = todos.filter((todo) => {
    return todo.complete === true;
  });
  onRender(completeTodos);
};
complete.addEventListener("click", () => {
  showCompleteTodo();
});

const onRender = (todos) => {
  todoList.innerHTML = "";
  todos.map((todo) => {
    const todoItem = document.createElement("li");
    todoItem.dataset.id = todo.id;

    const todoText = document.createElement("p");
    todoText.textContent = todo.text;

    const updateButton = document.createElement("button");
    updateButton.textContent = todo.complete ? "미완료" : "완료";
    updateButton.addEventListener("click", () => {
      onUpdateTodo(todo.id);
    });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.addEventListener("click", () => {
      onDeleteTodo(todo.id);
    });

    todoList.appendChild(todoItem);
    todoItem.appendChild(updateButton);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);
  });
};

onAddTodo();
onRender();
