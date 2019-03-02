import format from "date-fns/format";
import addDays from "date-fns/add_days";
/**
 * Returns days around of the day or today if no day parameters
 *
 * @param {string} day Day date in ISO format
 *
 * @returns {Date[]} Array containing 3 days before 1 day after
 */
const currentWeek = (day = isoFormatDate()) => {
  const firstDayOfWeek = addDays(day, -6);
  return [...Array(7).keys()].map(i => addDays(firstDayOfWeek, i));
};

/**
 * Returns current week in ISO format of the day or today if no day parameters
 *
 * @param {string} day Day date in ISO format
 *
 * @returns {string[]} Array containing 3 days before 1 day after
 */
const currentWeekISO = (day = isoFormatDate()) =>
  currentWeek(day).map(isoFormatDate);

/**
 * Returns the date ISO formated: YYYY-MM-DD
 *
 * @param {Date} date Date to format
 *
 * @returns {string} The date formatted
 */
const isoFormatDate = (date = new Date()) => format(date, "YYYY-MM-DD");

export { currentWeek, isoFormatDate, currentWeekISO };
