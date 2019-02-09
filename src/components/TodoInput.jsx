import React from "react";
import { ADD } from "../modules/model";
import { TodoStore } from "../components/Store";

const TodoInput = () => {
  let textInput = React.useRef();
  const createTodo = () => {
    dispatch({ type: ADD, data: textInput.current.value });
    textInput.current.value = "";
  };
  const { dispatch } = React.useContext(TodoStore);
  return (
    <>
      <input type="text" ref={textInput} />
      <button onClick={createTodo}>Add</button>
    </>
  );
};

export { TodoInput };
