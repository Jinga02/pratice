// DOM 요소들을 가져옵니다.
const inputTodoText = document.getElementById("inputTodoText");
const todoList = document.getElementById("todoList");
const allButton = document.getElementById("allButton");
const completeButton = document.getElementById("completeButton");
const activeButton = document.getElementById("activeButton");
const allDeleteButton = document.getElementById("allDeleteButton");
// 할 일 목록과 ID를 관리하는 변수들을 선언합니다.
let todos = [];
let id = 0;

// 할 일을 추가하는 함수를 정의합니다.
const addTodo = () => {
  // 할 일 입력 폼에 이벤트 리스너를 추가합니다.
  document.getElementById("todoForm").addEventListener("submit", (e) => {
    e.preventDefault(); // 기본 동작을 막습니다.
    const todoText = inputTodoText.value.trim(); // 입력된 할 일을 가져옵니다.
    if (todoText !== "") {
      // 할 일이 비어있지 않은 경우
      todos.push({ id: id++, text: todoText, completed: false }); // 할 일 목록에 추가합니다.
      inputTodoText.value = ""; // 입력 폼을 비웁니다.
      renderTodoList(); // 할 일 목록을 다시 렌더링합니다.
    }
  });
};

// 전체 할 일 목록을 렌더링하는 함수를 정의합니다.
const renderTodoList = () => {
  todoList.innerHTML = ""; // 할 일 목록을 비웁니다.
  todos.forEach((todo) => {
    // 모든 할 일에 대해 반복합니다.
    const todoItem = document.createElement("li"); // 새로운 할 일 항목을 생성합니다.
    const todoText = document.createElement("span"); // 할 일 텍스트를 생성합니다.
    todoText.textContent = todo.text; // 할 일 텍스트를 설정합니다.
    if (todo.completed) {
      // 할 일이 완료된 경우
      todoText.classList.add("completed"); // 텍스트에 완료된 스타일을 추가합니다.
      todoText.style.textDecoration = "line-through"; // 텍스트에 줄을 그어 완료된 상태를 표시합니다.
    }
    const deleteButton = document.createElement("button"); // 삭제 버튼을 생성합니다.
    deleteButton.textContent = "삭제"; // 버튼 텍스트를 설정합니다.
    deleteButton.addEventListener("click", () => {
      // 삭제 버튼에 클릭 이벤트 리스너를 추가합니다.
      deleteTodoById(todo.id); // 해당 할 일을 삭제합니다.
      renderTodoList(); // 할 일 목록을 다시 렌더링합니다.
    });
    const completeButton = document.createElement("button"); // 완료 버튼을 생성합니다.
    completeButton.textContent = "완료"; // 버튼 텍스트를 설정합니다.
    completeButton.addEventListener("click", () => {
      // 완료 버튼에 클릭 이벤트 리스너를 추가합니다.
      toggleTodoComplete(todo.id); // 해당 할 일의 완료 상태를 변경합니다.
      renderTodoList(); // 할 일 목록을 다시 렌더링합니다.
    });
    // 생성된 요소들을 할 일 항목에 추가합니다.
    todoItem.appendChild(todoText);
    todoItem.appendChild(completeButton);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem); // 할 일 항목을 할 일 목록에 추가합니다.
  });
};

// 할 일을 ID를 이용하여 삭제하는 함수를 정의합니다.
const deleteTodoById = (id) => {
  todos = todos.filter((todo) => todo.id !== id); // 해당 ID를 가진 할 일을 필터링합니다.
};

// 할 일의 완료 상태를 변경하는 함수를 정의합니다.
const toggleTodoComplete = (id) => {
  const index = todos.findIndex((todo) => todo.id === id); // 해당 ID를 가진 할 일의 인덱스를 찾습니다.
  if (index !== -1) {
    // 인덱스를 찾은 경우
    todos[index].completed = !todos[index].completed; // 완료 상태를 반전시킵니다.
  }
};

// "모든 할 일 보기" 버튼의 클릭 이벤트 리스너를 추가합니다.
allButton.addEventListener("click", () => {
  renderTodoList(); // 전체 할 일 목록을 렌더링합니다.
});

// "완료된 할 일만 보기" 버튼의 클릭 이벤트 리스너를 추가합니다.
completeButton.addEventListener("click", () => {
  const completedTodos = todos.filter((todo) => todo.completed); // 완료된 할 일만 필터링합니다.
  renderFilteredTodos(completedTodos); // 필터링된 할 일 목록을 렌더링합니다.
});

// "완료되지 않은 할 일만 보기" 버튼의 클릭 이벤트 리스너를 추가합니다.
activeButton.addEventListener("click", () => {
  const activeTodos = todos.filter((todo) => !todo.completed); // 완료되지 않은 할 일만 필터링합니다.
  renderFilteredTodos(activeTodos); // 필터링된 할 일 목록을 렌더링합니다.
});

// 필터링된 할 일 목록을 렌더링하는 함수를 정의합니다.
const renderFilteredTodos = (filteredTodos) => {
  todoList.innerHTML = ""; // 할 일 목록을 비웁니다.
  filteredTodos.forEach((todo) => {
    // 필터링된 할 일에 대해 반복합니다.
    const todoItem = document.createElement("li"); // 새로운 할 일 항목을 생성합니다.
    const todoText = document.createElement("span"); // 할 일 텍스트를 생성합니다.
    todoText.textContent = todo.text; // 할 일 텍스트를 설정합니다.
    if (todo.completed) {
      // 할 일이 완료된 경우
      todoText.classList.add("completed"); // 텍스트에 완료된 스타일을 추가합니다.
    }
    const deleteButton = document.createElement("button"); // 삭제 버튼을 생성합니다.
    deleteButton.textContent = "삭제"; // 버튼 텍스트를 설정합니다.
    deleteButton.addEventListener("click", () => {
      // 삭제 버튼에 클릭 이벤트 리스너를 추가합니다.
      deleteTodoById(todo.id); // 해당 할 일을 삭제합니다.
      renderFilteredTodos(filteredTodos); // 필터링된 할 일 목록을 다시 렌더링합니다.
    });
    const completeButton = document.createElement("button"); // 완료 버튼을 생성합니다.
    completeButton.textContent = "완료"; // 버튼 텍스트를 설정합니다.
    completeButton.addEventListener("click", () => {
      // 완료 버튼에 클릭 이벤트 리스너를 추가합니다.
      toggleTodoComplete(todo.id); // 해당 할 일의 완료 상태를 변경합니다.
      renderFilteredTodos(filteredTodos); // 필터링된 할 일 목록을 다시 렌더링합니다.
    });
    // 생성된 요소들을 할 일 항목에 추가합니다.
    todoItem.appendChild(todoText);
    todoItem.appendChild(completeButton);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem); // 할 일 항목을 할 일 목록에 추가합니다.
  });
};

// 초기화 함수를 호출하여 페이지가 로드될 때 할 일 목록을 렌더링합니다.
addTodo();
renderTodoList();
