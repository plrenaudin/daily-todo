import React from "react";
import renderer from "react-test-renderer";
import { Week } from "./Week";
import { ConfigStore, TodoStore, WeekStore } from "./Store";

it("renders the Week correctly", () => {
  const component = (
    <ConfigStore.Provider value={{ currentDate: "2019-02-24" }}>
      <TodoStore.Provider value={{ todos: ["plip", "huhu"] }}>
        <WeekStore.Provider value={{ week: { "2019-02-24": ["huhu"] } }}>
          <Week />
        </WeekStore.Provider>
      </TodoStore.Provider>
    </ConfigStore.Provider>
  );
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
