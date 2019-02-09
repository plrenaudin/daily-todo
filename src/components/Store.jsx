import React from "react";
import {
  LOAD,
  ADD,
  addTodo,
  REMOVE,
  removeTodo,
  listTodo
} from "../modules/model";

const TodoStore = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD:
      return action.data;
    case ADD:
      return addTodo(state, action.data);
    case REMOVE:
      return removeTodo(state, action.data);
    default:
      throw new Error();
  }
};

const useTodos = () => {
  const [todos, dispatch] = React.useReducer(reducer, []);
  return { todos, dispatch };
};

const Provider = ({ children }) => {
  const store = useTodos();
  React.useEffect(() => {
    listTodo().then(data => {
      store.dispatch({ type: LOAD, data });
    });
  }, []);
  return <TodoStore.Provider value={store}>{children}</TodoStore.Provider>;
};

export { TodoStore, Provider };
