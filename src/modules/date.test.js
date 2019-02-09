import { currentWeek, isoFormatDate } from "./date";

it("gets the current week of the day", () => {
  expect(currentWeek("2019-02-06").map(i => isoFormatDate(i))).toEqual([
    "2019-02-04",
    "2019-02-05",
    "2019-02-06",
    "2019-02-07",
    "2019-02-08",
    "2019-02-09",
    "2019-02-10"
  ]);
});

it("formats the date to ISO", () => {
  expect(isoFormatDate(new Date(1549681335901))).toEqual("2019-02-08");
});
