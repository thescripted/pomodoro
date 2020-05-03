import styled, { css } from "styled-components";

export const Button = styled.button`
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

export const Main = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  & header {
    font-size: 60px;
    margin-bottom: 100px;
  }
  transition: background 0.5s linear;
`;
