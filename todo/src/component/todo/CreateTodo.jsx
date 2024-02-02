import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import TodoSlice from "../../slice/TodoSlice";
import style from "./style/CreateTodo.module.css";
import { TodoContext } from "../../context-api/state";

const CreateTodo = () => {
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const { createTodo } = useContext(TodoContext);

  const handleCreateTodo = (e) => {
    e.preventDefault();
    if (todoText.trim().length === 0) {
      return alert("오늘의 할 일을 입력 해주세요.");
    }
    createTodo({ text: todoText, id: uuidv4(), status: "active" });
    setTodoText("");
  };

  // redux-toolkit

  // const dispatch = useDispatch();
  // const createTodo = (e) => {
  //   e.preventDefault();
  //   if (todoText.trim().length === 0) {
  //     return alert("오늘의 할 일을 입력 해주세요.");
  //   }

  //   dispatch(
  //     TodoSlice.actions.createTodo({
  //       text: todoText,
  //       id: uuidv4(),
  //       status: "active",
  //     })
  //   );
  //   setTodoText("");
  // };

  return (
    <div className={style.inpuWrapper}>
      <form className={style.form} onSubmit={createTodo}>
        <input
          className={style.input}
          type="text"
          value={todoText}
          onChange={handleChange}
        />
        <button className={style.button} onClick={handleCreateTodo}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
