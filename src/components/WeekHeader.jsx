import React from "react";
import { currentWeek } from "../modules/date";
import styled from "styled-components";
import { DayHeader } from "./DayHeader";

const Head = styled.tr`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

const WeekHeader = React.memo(({ startDate }) => (
  <thead>
    <Head>
      {currentWeek(startDate).map(i => (
        <DayHeader key={i.getTime()} day={i} />
      ))}
    </Head>
  </thead>
));

export { WeekHeader };
