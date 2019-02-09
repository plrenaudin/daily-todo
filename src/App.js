import React from "react";
import "./App.css";
import { Week } from "./components/Week";
import { TodoList } from "./components/TodoList";
import { Provider } from "./components/Store";
import { TodoInput } from "./components/TodoInput";

const App = () => {
  return (
    <Provider>
      <main>
        <h1>Todo-daily</h1>
        <Week />
        <TodoList />
        <TodoInput />
      </main>
    </Provider>
  );
};

export default App;
