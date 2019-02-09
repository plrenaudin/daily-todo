import db, { TODOS } from "./db";
import { useState, useEffect } from "react";

const addTodo = async todo => {
  const todos = await listTodo();
  if (!todos.includes(todo)) {
    todos.push(todo);
    db.set(TODOS, todos);
  }
  return todos;
};

const removeTodo = async todo => {
  const todos = await listTodo();
  const index = todos.indexOf(todo);
  if (index >= 0) {
    todos.splice(index, 1);
    db.set(TODOS, todos);
  }
  return todos;
};

const listTodo = async () => await db.get(TODOS);

const useTodos = () => {
  const [todos, setTodos] = useState(listTodo());

  useEffect(() => {
    console.log("in effect");
  });

  return [todos, setTodos];
};

export { addTodo, removeTodo, listTodo, useTodos };
