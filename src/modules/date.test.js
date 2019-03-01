import { currentWeek, isoFormatDate, currentWeekISO } from "./date";

it("gets the current week of the day", () => {
  expect(currentWeekISO("2019-02-06")).toEqual([
    "2019-02-04",
    "2019-02-05",
    "2019-02-06",
    "2019-02-07"
  ]);
});
it("gets the current week of the day", () => {
  expect(currentWeek("2019-02-06").map(i => isoFormatDate(i))).toEqual([
    "2019-02-04",
    "2019-02-05",
    "2019-02-06",
    "2019-02-07"
  ]);
});

it("formats the date to ISO", () => {
  expect(isoFormatDate(new Date(1549681335901))).toEqual("2019-02-08");
});
