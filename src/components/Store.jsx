import React from "react";
import {
  LOAD,
  ADD,
  addTodo,
  REMOVE,
  removeTodo,
  listTodo,
  TOGGLE,
  toggleTodo,
  listWeekTodo
} from "../modules/model";
import { isoFormatDate, currentWeekISO } from "../modules/date";

const ConfigStore = React.createContext();
const TodoStore = React.createContext();
const WeekStore = React.createContext();

const todoReducer = (state, action) => {
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

const weekReducer = (state, action) => {
  switch (action.type) {
    case LOAD:
      return action.data;
    case TOGGLE:
      return toggleTodo(state, action.todo, action.day);
    default:
      throw new Error();
  }
};

const useDayTodos = () => {
  const [week, dispatch] = React.useReducer(weekReducer, []);
  return { week, dispatch };
};

const useTodos = () => {
  const [todos, dispatch] = React.useReducer(todoReducer, []);
  return { todos, dispatch };
};

const Provider = ({ children }) => {
  //Config
  const [currenDate, setCurrentDate] = React.useState(isoFormatDate());
  const configStore = { currenDate, setCurrentDate };

  //Week
  const weekStore = useDayTodos();

  //Todos
  const todoStore = useTodos();

  React.useEffect(() => {
    const week = currentWeekISO();
    Promise.all([listTodo(), listWeekTodo(week)]).then(([todos, weekTodos]) => {
      todoStore.dispatch({ type: LOAD, data: todos });
      weekStore.dispatch({ type: LOAD, data: weekTodos });
    });
  }, []);

  return (
    <ConfigStore.Provider value={configStore}>
      <TodoStore.Provider value={todoStore}>
        <WeekStore.Provider value={weekStore}>{children}</WeekStore.Provider>
      </TodoStore.Provider>
    </ConfigStore.Provider>
  );
};

export { ConfigStore, WeekStore, TodoStore, Provider };
