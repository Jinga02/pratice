import DeleteTodo from "./todoItem/DeleteTodo.js";
import ImportantTodo from "./todoItem/ImportantTodo.js";
import { createTodoText } from "./todoItem/TodoItem.js";
import UpdateTodo from "./todoItem/UpdateTodo.js";

const TodoDetail = (todo, todos, TodoRender) => {
  const todoDetailWrap = createEl.createTodoDetailWrap();
  const detailTodoText = createTodoText(todo);
  const detailImgWrap = createEl.createDetailImgWrap();
  const detailCloseButton = createEl.createDetailCloseButton();
  const detailUpdateButton = UpdateTodo(todo, todos, TodoRender);
  const detailImportantButton = ImportantTodo(todo, todos, TodoRender);
  const deleteButton = DeleteTodo(todo, TodoRender, todos);

  detailImgWrap.appendChild(detailUpdateButton);
  detailImgWrap.appendChild(detailImportantButton);
  detailImgWrap.appendChild(detailCloseButton);
  detailImgWrap.appendChild(deleteButton);
  todoDetailWrap.appendChild(detailImgWrap);
  todoDetailWrap.appendChild(detailTodoText);

  return { todoDetailWrap, detailCloseButton, deleteButton };
};

export default TodoDetail;

const createEl = {
  createTodoDetailWrap: function () {
    const todoDetailWrap = document.createElement("div");
    todoDetailWrap.id = "todoDetailWrap";
    return todoDetailWrap;
  },

  createDetailCloseButton: function () {
    const detailCloseButton = document.createElement("button");
    detailCloseButton.id = "detailCloseButton";
    const detailCloseImg = document.createElement("img");
    detailCloseImg.id = "detailCloseImg";
    detailCloseImg.src = "./asset/close.png";
    detailCloseButton.appendChild(detailCloseImg);

    return detailCloseButton;
  },

  createDetailImgWrap: function () {
    const detailImgWrap = document.createElement("div");
    detailImgWrap.id = "detailImgWrap";
    return detailImgWrap;
  },
};
// export default TodoDetail;
