import React from "react";
import { ADD } from "../modules/model";
import { TodoStore } from "../components/Store";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem 0 0.5rem 0.3rem;
`;

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
      <Input
        type="text"
        placeholder="Add Todo"
        ref={textInput}
        onKeyDown={e => e.keyCode === 13 && createTodo()}
      />
    </>
  );
});

export { TodoInput };
