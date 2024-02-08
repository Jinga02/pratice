const inputTodoText = document.getElementById("inputTodoText");

const todoList = document.getElementById("todoList");

let todos = [];
let id = 0;

const onAddTodo = () => {
  document.getElementById("todoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const todoText = inputTodoText.value.trim();
    if (todoText.trim() !== "") {
      todos.push({
        id: id++,
        text: todoText,
        completed: false,
      });
      inputTodoText.value = "";
      renderTodoList();
    } else {
      alert("오늘 할 일을 입력해주세요!");
    }
  });
};

const renderTodoList = () => {
  // todoList를 빈값으로 초기화하지 않으면 기존의 todo들이 추가로 생성됨
  todoList.innerHTML = "";
  todos.map((todo) => {
    // todoItem
    const todoItem = document.createElement("li");
    todoItem.dataset.id = todo.id;
    todoItem.id = "todoItem";
    // todo 내용
    const todoText = document.createElement("span");
    todoText.textContent = todo.text;

    // 완료 된 할일 처리
    if (todo.completed === true) {
      // 할 일이 완료된 경우
      todoText.id = "completed";
    }

    // todo 삭제
    const deletedButton = document.createElement("button");
    deletedButton.textContent = "삭제";
    deletedButton.addEventListener("click", () => {
      deleteTodo(todo.id);
      renderTodoList();
    });

    // todo 완료
    const updatedButton = document.createElement("button");
    updatedButton.textContent = "완료";
    updatedButton.addEventListener("click", () => {
      updateTodo(todo.id);
      renderTodoList();
    });

    todoItem.appendChild(updatedButton);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deletedButton);
    todoList.appendChild(todoItem);
  });
};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};

const updateTodo = (id) => {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });
};

onAddTodo();
renderTodoList();
