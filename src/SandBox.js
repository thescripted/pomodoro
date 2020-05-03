import React from "react";
import styled, { css } from "styled-components";
import "./SandBox.css";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  text-align: center;
`;

const G = styled.g`
  fill: none;
  stroke: none;
`;

const Circle = styled.circle`
  stroke-width: 7px;
  stroke: grey;
`;

const Path = styled.path`
  stroke-width: 7px;
  color: green;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
  stroke: currentColor;
`;

const SandBox = () => {
  return (
    <div>
      <Container>
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "scaleX(-1)" }}
        >
          <G className="base-timer__circle">
            <Circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            />
            <Path
              id="base-timer-path-remaining"
              strokeDasharray="283"
              d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
            ></Path>
          </G>
        </svg>

        <span>Time</span>
      </Container>
    </div>
  );
};

export default SandBox;
