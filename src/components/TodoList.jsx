import React from "react";
import { REMOVE } from "../modules/model";
import { TodoStore } from "./Store";

const TodoList = React.memo(() => {
  const { todos, dispatch } = React.useContext(TodoStore);

  const remove = data => dispatch({ type: REMOVE, data });

  return (
    <ul>
      {todos.map(i => (
        <li key={i}>
          {i} <button onClick={() => remove(i)}>X</button>
        </li>
      ))}
    </ul>
  );
});

export { TodoList };
