import React from "react";
import { WeekHeader } from "./WeekHeader";
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid grey;
`;

const Week = React.memo(({ startDate, todos }) => (
  <Table>
    <WeekHeader {...{ startDate }} />
  </Table>
));

export { Week };
