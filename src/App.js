import React from "react";
import "./App.css";
import { Week } from "./components/Week";
import { Provider } from "./components/Store";
import styled from "styled-components";

const MainView = styled.main`
  display: flex;
`;

const App = () => {
  return (
    <Provider>
      <MainView>
        <Week />
      </MainView>
    </Provider>
  );
};

export default React.memo(App);
