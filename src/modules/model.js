import db, { TODOS } from "./db";

export const LOAD = "load";
export const ADD = "add";
export const REMOVE = "remove";

const addTodo = (input, todo) => {
  const todos = input.slice();
  if (!todos.includes(todo)) {
    todos.push(todo);
    db.set(TODOS, todos);
  }
  return todos;
};

const removeTodo = (input, todo) => {
  const todos = input.slice();
  const index = todos.indexOf(todo);
  if (index >= 0) {
    todos.splice(index, 1);
    db.set(TODOS, todos);
  }
  return todos;
};

const listTodo = async () => await db.get(TODOS);

export { addTodo, removeTodo, listTodo };
