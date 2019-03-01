import React from "react";
import { WeekHeader } from "./WeekHeader";
import styled from "styled-components";
import { ConfigStore, TodoStore, WeekStore } from "./Store";
import { currentWeekISO } from "../modules/date";
import { TOGGLE, REMOVE } from "../modules/model";
import { TodoInput } from "./TodoInput";
import { generateColor } from "../modules/color";

const Table = styled.table`
  border-spacing: 0.3rem;
  border-collapse: separate;
`;

const Row = styled.tr`
  text-align: center;
`;

const Cell = styled.td`
  padding: 1rem 0;
  background-color: ${props => props.color || "transparent"};
`;
const TodoCell = styled(Cell)`
  text-align: left;
  padding: 0 0.3rem;
  background-color: ${props => props.color || "transparent"};
`;
const onToggle = (dailyTodoStore, day, todo) => () => {
  dailyTodoStore.dispatch({ type: TOGGLE, todo, day });
};

const Week = React.memo(() => {
  const config = React.useContext(ConfigStore);
  const todoStore = React.useContext(TodoStore);
  const dailyTodoStore = React.useContext(WeekStore);
  const remove = data =>
    window.confirm(`Delete ${data}?`) &&
    todoStore.dispatch({ type: REMOVE, data });

  return (
    <Table>
      <WeekHeader />
      <tbody>
        {todoStore.todos.map(todo => {
          const baseColor = generateColor(todo, 93);
          const doneColor = generateColor(todo, 70);

          return (
            <Row key={todo}>
              {currentWeekISO(config.currentDate).map(day => {
                const done = (dailyTodoStore.week[day] || []).includes(todo);
                return (
                  <Cell key={day} color={done ? doneColor : baseColor}>
                    <input
                      type="checkbox"
                      checked={done}
                      onChange={onToggle(dailyTodoStore, day, todo)}
                    />
                  </Cell>
                );
              })}
              <TodoCell color={doneColor}>
                <label>{todo}</label>{" "}
                <button onClick={() => remove(todo)}>X</button>
              </TodoCell>
            </Row>
          );
        })}
        <Row>
          {currentWeekISO(config.currentDate).map(day => (
            <Cell key={day}>&nbsp;</Cell>
          ))}
          <TodoCell>
            <TodoInput />
          </TodoCell>
        </Row>
      </tbody>
    </Table>
  );
});

export { Week };
