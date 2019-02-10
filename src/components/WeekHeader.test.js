import React from "react";
import renderer from "react-test-renderer";
import { WeekHeader } from "./WeekHeader";
import { ConfigStore } from "./Store";

it("renders the WeekHeader correctly", () => {
  const component = (
    <ConfigStore.Provider value={{ currentDate: "2019-02-24" }}>
      <WeekHeader />
    </ConfigStore.Provider>
  );
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
