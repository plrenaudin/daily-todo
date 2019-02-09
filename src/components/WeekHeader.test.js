import React from "react";
import renderer from "react-test-renderer";
import { WeekHeader } from "./WeekHeader";
import "jest-styled-components";

it("renders the DayHeader correctly", () => {
  const component = <WeekHeader startDate={new Date(1549509463523)} />;
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
