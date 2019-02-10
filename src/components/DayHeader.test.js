import React from "react";
import renderer from "react-test-renderer";

import { DayHeader } from "./DayHeader";

it("renders the DayHeader correctly", () => {
  const component = <DayHeader day={new Date(1549509463523)} />;
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
