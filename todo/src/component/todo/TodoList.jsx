import React, { useContext } from "react";
import style from "./style/TodoList.module.css";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";
import { TodoContext } from "../../context-api/state";

const TodoList = ({ header }) => {
  // context-api
  const { todos } = useContext(TodoContext);
  // console.log(todos);

  // redux-toolkit
  // const todos = useSelector((state) => state.todo.todos);

  const filteredTodos = todos.filter((todo) => {
    if (header === "all") {
      return todo;
    } else if (todo.status === header) {
      return todo;
    }
  });

  return (
    <div className={style.TodoListWrapper}>
      <ul className={style.TodoUl}>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <CreateTodo />
    </div>
  );
};

export default TodoList;
