import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Day = styled.th`
  padding: 0.3rem 0;
  width: 8%;
  ${props =>
    props.current &&
    `
   background-color: aliceblue;
   width: 14%;
  `};
`;

const DayLabel = styled.em`
  font-size: 1rem;
  font-weight: bold;
  display: block;
`;

const DayDigit = styled.small`
  color: grey;
`;

const DayHeader = React.memo(({ day, current }) => {
  const [label, digit] = format(day, "dd D").split(" ");
  return (
    <Day {...{ current }}>
      <DayLabel>{label}</DayLabel>
      <DayDigit>{digit}</DayDigit>
    </Day>
  );
});

export { DayHeader };
