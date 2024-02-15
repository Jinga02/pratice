import UpdateTodo from "./UpdateTodo.js";
import ImportantTodo from "./ImportantTodo.js";

const createTodoItem = (todo) => {
  const todoItem = document.createElement("li");
  todoItem.dataset.id = todo.id;
  todoItem.id = "todoItem";
  return todoItem;
};
export const createTodoText = (todo) => {
  const todoText = document.createElement("p");
  todoText.textContent =
    todo.text.length > 30 ? todo.text.substring(0, 30) + "..." : todo.text;
  todoText.id = "todoText";
  return todoText;
};

const TodoItem = (todo, todos, TodoRender) => {
  const todoItem = createTodoItem(todo);
  const todoText = createTodoText(todo);
  const updateButton = UpdateTodo(todo, todos, TodoRender);
  const importantButton = ImportantTodo(todo, todos, TodoRender);

  todoItem.appendChild(updateButton);
  todoItem.appendChild(todoText);
  todoItem.appendChild(importantButton);

  return { todoItem, todoText, updateButton, importantButton };
};

export default TodoItem;
