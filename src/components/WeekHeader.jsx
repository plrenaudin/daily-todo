import React from "react";
import { currentWeek } from "../modules/date";
import styled from "styled-components";
import { DayHeader } from "./DayHeader";
import { ConfigStore } from "./Store";

const Head = styled.tr`
  padding: 0.3rem;
`;

const WeekHeader = React.memo(() => {
  const config = React.useContext(ConfigStore);
  return (
    <thead>
      <Head>
        {currentWeek(config.currentDate).map(i => (
          <DayHeader key={i.getTime()} day={i} />
        ))}
      </Head>
    </thead>
  );
});

export { WeekHeader };
