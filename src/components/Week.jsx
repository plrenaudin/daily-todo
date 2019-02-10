import React from "react";
import { WeekHeader } from "./WeekHeader";
import styled from "styled-components";
import { ConfigStore, TodoStore, WeekStore } from "./Store";
import { currentWeekISO } from "../modules/date";
import { TOGGLE } from "../modules/model";

const Table = styled.table`
  border: 1px solid grey;
`;

const Row = styled.tr`
  background-color: lightgray;
`;

const Cell = styled.td`
  padding: 0.3rem;
`;

const onToggle = (dailyTodoStore, day, todo) => () => {
  dailyTodoStore.dispatch({ type: TOGGLE, todo, day });
};

const Week = React.memo(() => {
  const config = React.useContext(ConfigStore);
  const todoStore = React.useContext(TodoStore);
  const dailyTodoStore = React.useContext(WeekStore);

  return (
    <Table>
      <WeekHeader />
      <tbody>
        {todoStore.todos.map(todo => (
          <Row key={todo}>
            {currentWeekISO(config.currentDate).map(day => (
              <Cell key={day}>
                <input
                  type="checkbox"
                  checked={(dailyTodoStore.week[day] || []).includes(todo)}
                  onChange={onToggle(dailyTodoStore, day, todo)}
                />
              </Cell>
            ))}
          </Row>
        ))}
      </tbody>
    </Table>
  );
});

export { Week };
