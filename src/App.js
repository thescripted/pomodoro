import React from "react";
import "./App.css";
import Pomodoro from "./Pomodoro";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background: #aaa;
  & header {
    font-size: 60px;
    margin-bottom: 100px;
  }
`;

const App = () => {
  return (
    <Main>
      <header>The Pomodoro Timer</header>
      <Pomodoro />
      <footer>
        <p>Created by Benjamin Kinga</p>
        <p>github.com/thescripted</p>
      </footer>
    </Main>
  );
};

export default App;

// App (timers & features)
// - Header and Settings
// - Pomodoro and Options
// - Footer
