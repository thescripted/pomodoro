import React from "react";

const Pomodoro = () => {
  return (
    <div className="container">
      <h1>Time</h1>
      <div className="button-container">
        <span className="minute">
          <button className="button smaller-button minute-button">
            Add One Minute
          </button>
        </span>
        <span className="pomodoro">
          <button className="button bigger-button pomodoro-button">
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
