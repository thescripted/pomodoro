import React, { useState, useEffect } from "react";
import { formatTime } from "./helper";
import styled, { css } from "styled-components";

const Pomodoro = (props) => {
  const [timer, setTimer] = useState(1500);
  const [active, setActive] = useState(false);
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

  useEffect(() => {
    const time = setTimeout(() => setTimer(timer - 1), 1000);
    if (!active) {
      clearTimeout(time);
    }
  }, [timer, active]);

  const handleButtonClick = () => {
    // Set the timer
    setActive(!active);

    //Update the background from parent if timer is active or not
    props.backgroundUpdate(active);
  };

  return (
    <div className="container">
      <h1>{formatTime(timer)}</h1>
      <div className="button-container">
        <span className="minute">
          <Button className="button smaller-button minute-button">
            Add One Minute
          </Button>
        </span>
        <span className="pomodoro">
          <Button
            primary
            className="button bigger-button pomodoro-button"
            onClick={handleButtonClick}
          >
            Start/Pause
          </Button>
        </span>
        <span className="break">
          <Button className="button smaller-button break-button">
            Start Break
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Pomodoro;
