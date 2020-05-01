import React, { useState, useEffect } from "react";
import { formatTime } from "./helper";

const Pomodoro = () => {
  const [timer, setTimer] = useState(1500);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => setTimer(timer - 1), 1000);
    if (!active) {
      clearTimeout(time);
    }
  }, [timer, active]);

  const handleTimer = () => {
    setActive(!active);
  };

  return (
    <div className="container">
      <h1>{formatTime(timer)}</h1>
      <div className="button-container">
        <span className="minute">
          <button className="button smaller-button minute-button">
            Add One Minute
          </button>
        </span>
        <span className="pomodoro">
          <button
            className="button bigger-button pomodoro-button"
            onClick={handleTimer}
          >
            Start/Pause
          </button>
        </span>
        <span className="break">
          <button className="button smaller-button break-button">
            Start Break
          </button>
        </span>
      </div>
    </div>
  );
};

export default Pomodoro;
