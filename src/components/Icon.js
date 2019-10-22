import React from "react";
import styled from "styled-components";
import { color } from "styled-system";

let Icon = props => {
  const StyledIconFrame = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    i {
      font-size: ${props => (props.size ? props.size : 24)}px !important;
      ${color}
    }
  `;
  return (
    <StyledIconFrame size={props.size} color={props.color}>
      <i className="material-icons mdc-button__icon" aria-hidden="true">
        {props.children || "favorite"}
      </i>
    </StyledIconFrame>
  );
};

export default Icon;
