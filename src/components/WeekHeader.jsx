import React from "react";
import { currentWeek } from "../modules/date";
import { DayHeader } from "./DayHeader";
import { ConfigStore } from "./Store";
import isToday from "date-fns/is_today";
import styled from "styled-components";

const LastHeader = styled.th`
  min-width: 20%;
`;

const WeekHeader = React.memo(() => {
  const config = React.useContext(ConfigStore);
  return (
    <thead>
      <tr>
        {currentWeek(config.currentDate).map(i => (
          <DayHeader key={i.getTime()} day={i} current={isToday(i)} />
        ))}
        <LastHeader>&nbsp;</LastHeader>
      </tr>
    </thead>
  );
});

export { WeekHeader };
