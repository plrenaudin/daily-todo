import db, { TODOS } from "./db";

export const LOAD = "load";
export const ADD = "add";
export const REMOVE = "remove";
export const TOGGLE = "TOGGLE";

/**
 * Add todo to the list
 * @param {string[]} state list of todos
 * @param {string} todo todo to add
 *
 * @returns {string[]} changed list of todos
 */
const addTodo = (state, todo) => {
  const todos = state.slice();
  if (!todos.includes(todo)) {
    todos.push(todo);
    db.set(TODOS, todos);
  }
  return todos;
};

/**
 * Remove a todo from the list
 * @param {string[]} state list of todos
 * @param {string} todo todo to remove
 *
 * @returns {string[]} changed list of todos
 */
const removeTodo = (state, todo) => {
  const todos = state.slice();
  const index = todos.indexOf(todo);
  if (~index) {
    todos.splice(index, 1);
    db.set(TODOS, todos);
  }
  return todos;
};

/**
 * List all the todos
 * @returns {Promise<string[]>} promise resolving to the list of todos
 */
const listTodo = async () => await db.get(TODOS);

/**
 * TOGGLE the todo param for the current day param
 * @param {Object.<string,string[]>} state week data
 * @param {string} todo todo to toggle
 * @param {string} day ISO string representation of the day's date
 *
 * @return {Object.<string,string[]>} changed week data
 */
const toggleTodo = (state, todo, day) => {
  const week = JSON.parse(JSON.stringify(state));
  let currentDay = week[day] || [];

  const index = currentDay.indexOf(todo);
  if (~index) {
    currentDay.splice(index, 1);
  } else {
    currentDay.push(todo);
  }

  db.set(day, currentDay);
  week[day] = currentDay;
  return week;
};

/**
 * List all the week daily todos
 * @returns {Promise<Object.<string,string[]>>} promise resolving to the week daily todos
 */
const listWeekTodo = async week => {
  const data = await db.get(week);
  const result = {};
  week.forEach((i, index) => (result[i] = data[index]));
  return result;
};

export { addTodo, removeTodo, listTodo, toggleTodo, listWeekTodo };
