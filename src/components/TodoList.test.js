import React from "react";
import renderer from "react-test-renderer";
import { TodoList } from "./TodoList";
import { TodoStore } from "./Store";

it("renders the Todolist correctly", () => {
  const component = (
    <TodoStore.Provider value={{ todos: ["plip", "huhu"] }}>
      <TodoList />
    </TodoStore.Provider>
  );
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
