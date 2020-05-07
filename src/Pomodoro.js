import React, { useState, useEffect, useRef } from "react";
import { formatTime } from "./helper";
import justsaying from "./resources/justsaying.mp3";
import { Button } from "./css/style";
import "./css/index.css";

const Pomodoro = ({ updateBG }) => {
  const [timer, setTimer] = useState(1500);
  const [isActive, setIsActive] = useState(false); // Inform if the timer is active
  const [feature, setFeature] = useState("pomodoro");
  const [playToggle, setPlayToggle] = useState(false);
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

  const handleStart = () => {
    setIsActive(!isActive);
    setPlayToggle(!playToggle);
  };

  return (
    <div className="container">
      <h1>{formatTime(timer)}</h1>
      <div className="button-container">
        <span className="minute">
          <Button
            className="button smaller-button minute-button"
            onClick={() => setTimer(timer + 60)}
          >
            <i class="fas fa-plus"></i>
          </Button>
        </span>
        <span className="pomodoro">
          <Button primary onClick={handleStart}>
            <i class={`fas fa-play ${playToggle && "hide"}`}></i>
          </Button>
        </span>
        <span className="break">
          <Button
            className="button smaller-button break-button"
            onClick={handleNext}
          >
            <i class="fas fa-fast-forward"></i>{" "}
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Pomodoro;
