import TodoDetail from "./TodoDetail.js";
import TodoItem from "./todoItem/TodoItem.js";

const section = document.querySelector("section"); // todo 상세 정보를 표시할 섹션
const todoList = document.querySelector("ul"); // todo 목록

const TodoList = (todos) => {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const { todoItem, todoText } = TodoItem(todo, todos, TodoList);
    const { todoDetailWrap, detailCloseButton, deleteButton } = TodoDetail(
      todo,
      todos,
      TodoList
    );

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

export default TodoList;
