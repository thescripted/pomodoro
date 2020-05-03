import React, { useState, useEffect, useRef } from "react";
import { formatTime } from "./helper";
import justsaying from "./resources/justsaying.mp3";
import { Button } from "./css/style";

const Pomodoro = ({ updateBG }) => {
  const [timer, setTimer] = useState(10);
  const [isActive, setIsActive] = useState(false); // Inform if the timer is active
  const [feature, setFeature] = useState("pomodoro");
  const _mounted = useRef(false);

  let notif = new Audio(justsaying);

  const handleNext = () => {
    if (feature === "pomodoro") {
      setFeature("break");
      setTimer(300);
    } else if (feature === "break") {
      setFeature("pomodoro");
      setTimer(1500);
    }
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => setTimer(timer - 1), 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }

    if (timer === 0) {
      notif.play();
      handleNext();
    }
    console.log(timer);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    // Current Hack to prevent first-render
    if (!_mounted.current) {
      _mounted.current = true;
    } else {
      updateBG(feature);
    }
  });

  return (
    <div className="container">
      <h1>{formatTime(timer)}</h1>
      <div className="button-container">
        <span className="minute">
          <Button
            className="button smaller-button minute-button"
            onClick={() => setTimer(timer + 60)}
          >
            Add One Minute
          </Button>
        </span>
        <span className="pomodoro">
          <Button
            primary
            className="button bigger-button pomodoro-button"
            onClick={() => setIsActive(!isActive)}
          >
            Start/Pause
          </Button>
        </span>
        <span className="break">
          <Button
            className="button smaller-button break-button"
            onClick={handleNext}
          >
            {`Skip to ${feature === "pomodoro" ? "break" : "timer"} `}
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Pomodoro;
