import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Day = styled.th`
  padding: 1rem;
`;

const DayLabel = styled.em`
  font-size: 1.3rem;
  font-weight: bold;
  display: block;
`;

const DayDigit = styled.small`
  color: grey;
`;

const DayHeader = React.memo(({ day }) => {
  const [label, digit] = format(day, "dd Do").split(" ");
  return (
    <Day>
      <DayLabel>{label}</DayLabel>
      <DayDigit>{digit}</DayDigit>
    </Day>
  );
});

export { DayHeader };
