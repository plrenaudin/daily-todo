import React from "react";
import renderer from "react-test-renderer";
import { TodoList } from "./TodoList";
import "jest-styled-components";
import { TodoStore } from "./Store";
jest.mock("idb");

it("renders the Todolist correctly", () => {
  const component = (
    <TodoStore.Provider value={{ todos: ["plip", "huhu"] }}>
      <TodoList />
    </TodoStore.Provider>
  );
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
