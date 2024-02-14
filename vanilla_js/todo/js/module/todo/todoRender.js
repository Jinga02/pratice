import todoDetail from "./todoDetail.js";

const section = document.querySelector("section"); // todo 상세 정보를 표시할 섹션
const todoList = document.querySelector("ul"); // todo 목록

const todoRender = (todos) => {
  todoList.innerHTML = "";

  todos.map((todo) => {
    const todoItem = todoDetail.createTodoItem(todo);
    const todoText = todoDetail.createTodoText(todo);
    const deleteButton = todoDetail.createDeleteButton(todo, todoRender, todos);
    const updateButton = todoDetail.createUpdateButton(todo, todoRender, todos);
    const importantButton = todoDetail.createImportantButton(
      todo,
      todoRender,
      todos
    );
    const todoDetailWrap = todoDetail.createTodoDetailWrap();
    const detailImgWrap = todoDetail.createDetailImgWrap();
    const detailCloseButton = todoDetail.createDetailCloseButton();
    const detailUpdateButton = todoDetail.createUpdateButton(
      todo,
      todoRender,
      todos
    );
    const detailImportantButton = todoDetail.createImportantButton(
      todo,
      todoRender,
      todos
    );
    todoDetailWrap.appendChild(detailImgWrap);
    detailImgWrap.appendChild(deleteButton);
    detailImgWrap.appendChild(detailUpdateButton);
    detailImgWrap.appendChild(detailImportantButton);
    todoDetailWrap.appendChild(detailCloseButton);
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
    todoItem.appendChild(updateButton);
    todoItem.appendChild(todoText);
    todoItem.appendChild(importantButton);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
};
export default todoRender;
