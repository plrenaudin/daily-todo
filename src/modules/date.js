import { startOfWeek, format, addDays } from "date-fns";

/**
 * Returns current week of the day or today if no day parameters
 *
 * @param {string} day Day date in ISO format
 *
 * @returns {Date[]} Array containing the dates of the week in ISO format
 */
const currentWeek = (day = isoFormatDate()) => {
  const firstDayOfWeek = startOfWeek(day, { weekStartsOn: 1 });
  return [...Array(7).keys()].map(i => addDays(firstDayOfWeek, i));
};

/**
 * Returns the date ISO formated: YYYY-MM-DD
 *
 * @param {Date} date Date to format
 *
 * @returns string The date formatted
 */
const isoFormatDate = (date = new Date()) => format(date, "YYYY-MM-DD");

export { currentWeek, isoFormatDate };
