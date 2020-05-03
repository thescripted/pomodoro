import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  transition-duration: 0.2s;
  border: 7px solid #fff;
  background: transparent;
  &:hover {
    border: 7px solid #313757;
    color: #313757;
  }
  &:focus {
    outline: none;
  }

  ${(props) =>
    props.primary &&
    css`
      height: 200px;
      width: 200px;
      font-size: 75px;
    `}
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  & header {
    font-size: 60px;
    margin-bottom: 100px;
    transition: 0.2s;
  }
  transition: background 0.5s linear;
`;
