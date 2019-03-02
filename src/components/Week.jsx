import React from "react";
import { WeekHeader } from "./WeekHeader";
import styled from "styled-components";
import { ConfigStore, TodoStore, WeekStore } from "./Store";
import { currentWeekISO } from "../modules/date";
import { TOGGLE, REMOVE } from "../modules/model";
import { TodoInput } from "./TodoInput";
import { generateColor } from "../modules/color";
import isToday from "date-fns/is_today";

const Table = styled.table`
  border-spacing: 0.1rem;
  table-layout: fixed;
  width: 100%;
`;

const Row = styled.tr`
  text-align: center;
`;

const Cell = styled.td`
  padding: 1rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: ${props => props.color || "transparent"};
  ${props => props.isToday && "width: 14%;"}
`;

const TodoCell = styled(Cell)`
  text-align: left;
  padding: 0 0.3rem;
  height: 100%;
  background-color: ${props => props.color || "transparent"};
`;

const CheckBox = styled.input`
  visibility: hidden;
`;

const onToggle = (dailyTodoStore, day, todo) => () => {
  isToday(day) && dailyTodoStore.dispatch({ type: TOGGLE, todo, day });
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
                  <Cell
                    key={day}
                    color={done ? doneColor : baseColor}
                    isToday={isToday(day)}
                    onClick={onToggle(dailyTodoStore, day, todo)}
                  >
                    <CheckBox
                      type="checkbox"
                      checked={done}
                      onChange={onToggle(dailyTodoStore, day, todo)}
                    />
                  </Cell>
                );
              })}
              <TodoCell color={doneColor}>
                <label>{todo}</label>
                <svg
                  style={{ float: "right" }}
                  className="icon icon-cancel-circle"
                  onClick={() => remove(todo)}
                >
                  <use xlinkHref="#icon-cancel-circle" />
                </svg>
              </TodoCell>
            </Row>
          );
        })}
        <Row>
          {currentWeekISO(config.currentDate).map(day => (
            <Cell key={day} isToday={isToday(day)}>
              &nbsp;
            </Cell>
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
