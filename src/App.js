import React from "react";
import "./App.css";
import Pomodoro from "./Pomodoro";

const App = () => {
  return (
    <div className="main">
      <header>The Pomodoro Timer</header>
      <Pomodoro />
      <footer>
        <p>Created by Benjamin Kinga</p>
        <p>contact information</p>
      </footer>
    </div>
  );
};

export default App;

// App (timers & features)
// - Header and Settings
// - Pomodoro and Options
// - Footer
