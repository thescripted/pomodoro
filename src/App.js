import React, { useState, useRef } from "react";
import Pomodoro from "./Pomodoro";
import { Main } from "./css/style";

const App = () => {
  const [styleFromChild, setStyleFromChild] = useState("#cfb695"); // Not the cleanest way to handle this
  const _removeHeader = useRef(false);

  const updateBG = (feature) => {
    let bgcolor = feature === "pomodoro" ? "#bd432a" : "#86b384";
    setStyleFromChild(bgcolor);
    _removeHeader.current = true;
  };

  return (
    <Main style={{ background: styleFromChild }}>
      <header>The Pomodoro Timer</header>
      <Pomodoro updateBG={updateBG} />
      <footer>
        <p>Created by Benjamin Kinga</p>
        <p>
          Check it out on{" "}
          <a href="https://www.github.com/thescripted/pomodoro">github</a>
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
