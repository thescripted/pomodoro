import React, { useState, useEffect } from "react";
import { formatTime } from "./helper";
import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  text-align: center;
  text-decoration: none;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  &:hover {
    background-color: palevioletred;
  }
  &:focus {
    outline: none;
  }

  ${(props) =>
    props.primary &&
    css`
      height: 200px;
      width: 200px;
    `}
`;

const Pomodoro = (props) => {
  const [timer, setTimer] = useState(5);
  const [isActive, setIsActive] = useState(false); // Inform if the timer is active
  const [isBreak, setIsBreak] = useState(false);
  const [isPomo, setIsPomo] = useState(false);
  const [status, setStatus] = useState("");

  const startBreak = () => {
    setTimer(300);
    setIsActive(true);
    setIsBreak(true);
    setIsPomo(false);
    // handle background color and other stuff
  };

  const handleNext = () => {
    setIsBreak(!isBreak);
    setIsPomo(!isPomo);
    setIsActive(!isActive);
    if (isBreak) {
      setStatus("break");
    }
    if (isPomo) {
      setStatus("pomo");
    }
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => setTimer(timer - 1), 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }

    if (timer === 0) {
      window.alert("times up");
      startBreak();
    }
    console.log(timer);
    return () => clearInterval(interval);
  });

  return (
    <div className="container">
      <h1>{formatTime(timer)}</h1>
      <div className="button-container">
        <span className="minute">
          <Button
            className="button smaller-button minute-button"
            onClick={() => setTimer(timer + 2)}
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
            Skip
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Pomodoro;
