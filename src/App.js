import React from "react";
import "./App.css";
import { Week } from "./components/Week";
import { Provider } from "./components/Store";
import styled from "styled-components";

const MainView = styled.section`
  display: flex;
`;

const App = () => {
  return (
    <Provider>
      <main>
        <MainView>
          <Week />
        </MainView>
      </main>
    </Provider>
  );
};

export default React.memo(App);
