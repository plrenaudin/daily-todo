import React from "react";
import renderer from "react-test-renderer";
import { TodoInput } from "./TodoInput";
import "jest-styled-components";
import { TodoStore } from "./Store";

jest.mock("idb");

it("renders the TodoInput correctly", () => {
  const component = (
    <TodoStore.Provider value={{ todos: ["plip", "huhu"], dispatch: () => {} }}>
      <TodoInput />
    </TodoStore.Provider>
  );
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
