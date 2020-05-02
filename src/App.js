import React, { useState } from "react";
import "./App.css";
import Pomodoro from "./Pomodoro";
import styled, { css } from "styled-components";

const App = () => {
  const Main = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    background: #aaa;
    & .main header {
      font-size: 60px;
    }
  `;

  return (
    <Main>
      <header>The Pomodoro Timer</header>
      <Pomodoro />
      <footer>
        <p>Created by Benjamin Kinga</p>
        <p>contact information</p>
      </footer>
    </Main>
  );
};

export default App;

// App (timers & features)
// - Header and Settings
// - Pomodoro and Options
// - Footer
