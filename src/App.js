import React from "react";
import "./App.css";
import { Week } from "./components/Week";
import { addTodo } from "./modules/model";
import { TodoList } from "./components/TodoList";

const App = () => {
  let textInput = React.createRef();
  const createTodo = todo => {
    addTodo(textInput.current.value);
    textInput.current.value = "";
  };

  return (
    <main>
      <h1>Hello</h1>
      <Week />
      <TodoList />
      <input type="text" ref={textInput} />
      <button onClick={createTodo}>Add</button>
    </main>
  );
};

export default React.memo(App);
