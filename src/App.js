import React, { useState } from "react";
import "./App.css";
import Pomodoro from "./Pomodoro";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  & header {
    font-size: 60px;
    margin-bottom: 100px;
  }
  transition: background 0.5s linear;
`;

const App = () => {
  const [styleFromChild, setStyleFromChild] = useState("#cfb695"); // Not the cleanest way to handle this

  const updateBG = (feature) => {
    let bgcolor = feature === "pomodoro" ? "#ff6242" : "#b1ffad";
    setStyleFromChild(bgcolor);
  };

  return (
    <Main style={{ background: styleFromChild }}>
      {console.log(styleFromChild)}
      <header>The Pomodoro Timer</header>
      <Pomodoro updateBG={updateBG} />
      <footer>
        <p>Created by Benjamin Kinga</p>
        <p>
          Check it out on{" "}
          <a href="https://www.github.com/thescripted/pomodoro">github</a>!
        </p>
      </footer>
    </Main>
  );
};

export default App;

// App (timers & features)
// - Header and Settings
// - Pomodoro and Options
// - Footer
