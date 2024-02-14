import todoDetail from "./todoDetail.js";
import deleteTodo from "./todoItem/deleteTodo.js";
import importantTodo from "./todoItem/importantTodo.js";
import updateTodo from "./todoItem/updateTodo.js";

const section = document.querySelector("section"); // todo 상세 정보를 표시할 섹션
const todoList = document.querySelector("ul"); // todo 목록

const createTodoItem = (todo) => {
  const todoItem = todoDetail.createTodoItem(todo);
  const todoText = todoDetail.createTodoText(todo);
  const updateButton = updateTodo(todo, todoRender, todos);
  const importantButton = importantTodo(todo, todoRender, todos);
  const deleteButton = deleteTodo(todo, todoRender, todos);

  todoItem.appendChild(updateButton);
  todoItem.appendChild(todoText);
  todoItem.appendChild(importantButton);
  todoItem.appendChild(deleteButton);

  return { todoItem, todoText, updateButton, importantButton, deleteButton };
};

const createTodoDetail = (todo) => {
  const todoDetailWrap = todoDetail.createTodoDetailWrap();
  const detailTodoText = todoDetail.createTodoText(todo);
  const detailImgWrap = todoDetail.createDetailImgWrap();
  const detailCloseButton = todoDetail.createDetailCloseButton();
  const detailUpdateButton = updateTodo(todo, todoRender, todos);
  const detailImportantButton = importantTodo(todo, todoRender, todos);

  detailImgWrap.appendChild(detailUpdateButton);
  detailImgWrap.appendChild(detailImportantButton);
  detailImgWrap.appendChild(detailCloseButton);

  todoDetailWrap.appendChild(detailImgWrap);
  todoDetailWrap.appendChild(detailTodoText);

  return { todoDetailWrap, detailCloseButton };
};

const todoRender = (todos) => {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const { todoItem, todoText, updateButton, importantButton, deleteButton } =
      createTodoItem(todo);
    const { todoDetailWrap, detailCloseButton } = createTodoDetail(todo);

    todoText.addEventListener("click", () => {
      document.querySelectorAll("#todoDetailWrap").forEach((detailWrap) => {
        detailWrap.parentNode.removeChild(detailWrap);
      });
      section.appendChild(todoDetailWrap);
    });

    detailCloseButton.addEventListener("click", () => {
      section.removeChild(todoDetailWrap);
    });

    deleteButton.addEventListener("click", () => {
      section.removeChild(todoDetailWrap);
    });

    todoList.appendChild(todoItem);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
};

export default todoRender;
