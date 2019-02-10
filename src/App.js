import React from "react";
import "./App.css";
import { Week } from "./components/Week";
import { TodoList } from "./components/TodoList";
import { Provider } from "./components/Store";
import { TodoInput } from "./components/TodoInput";
import styled from "styled-components";

const MainView = styled.section`
  display: flex;
`;

const App = () => {
  return (
    <Provider>
      <main>
        <h1>Todo-daily</h1>
        <MainView>
          <Week />
          <TodoList />
        </MainView>
        <TodoInput />
      </main>
    </Provider>
  );
};

export default React.memo(App);
