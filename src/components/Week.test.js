import React from "react";
import renderer from "react-test-renderer";
import { Week } from "./Week";
import "jest-styled-components";

it("renders the Week correctly", () => {
  const component = <Week startDate={new Date(1549509463523)} />;
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
