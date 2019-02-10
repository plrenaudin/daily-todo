import React from "react";
import { ADD } from "../modules/model";
import { TodoStore } from "../components/Store";

const TodoInput = React.memo(() => {
  let textInput = React.useRef();
  const createTodo = () => {
    if (!textInput.current.value) return;
    dispatch({ type: ADD, data: textInput.current.value });
    textInput.current.value = "";
  };
  const { dispatch } = React.useContext(TodoStore);
  return (
    <>
      <input
        type="text"
        ref={textInput}
        onKeyDown={e => e.keyCode === 13 && createTodo()}
      />
      <button onClick={createTodo}>Add</button>
    </>
  );
});

export { TodoInput };
