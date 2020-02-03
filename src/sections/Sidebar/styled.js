import styled, { css } from "styled-components";

export const StyledSidebar = styled.aside(
  ({ visible }) => css`
    top: 40px;
    bottom: 0;
    width: 240px;
    position: absolute;
    background: #d9e9f1;
    left: 0;
    transition: 0.3s ease-in-out;
    transform: translateX(${visible ? "0" : "-240px"});
  `
);
