import React from 'react'
import styled, { css } from 'styled-components'

import { colors } from '../Theme.js'

const StyledButton = styled.button`
  &&& { background: ${ props => props.bgColor ? colors[props.bgColor] : colors.alert }; }
  &&& { color: ${ props => props.textColor ? colors[props.textColor] : colors.light }; }
  &&& { border-radius: 3rem; }
  padding: 0.25em 1em;
  box-shadow: 0 0 0.2rem ${colors.mainDark};
  transition: all 0.1s ease-out;
  outline: none;

  &:hover {
    // cursor: pointer;
    border-radius: 1rem;
    color: ${colors.light};
    &&& { box-shadow: 0 0 0.4rem ${colors.mainDarker}; }
  }

  &:focus {
    // &&& { background: ${colors.light}; }
    // cursor: pointer;
    border-radius: 1rem;
    &&& { outline: none; }
    &&& { box-shadow: 0 0 0.4rem ${colors.mainDarker}; }
  }

  &:active {
    // &&& { background: ${colors.light}; }
    // cursor: pointer;
    border-radius: 1rem;
    box-shadow: inset 0 0 0.2rem ${colors.mainDark};
    outline: none;
  }

  ${props => props.primary && css`
    &&& { background: ${colors.main}; }
    color: ${colors.light};
    border: 2px solid ${colors.light};
  `}

  ${props => props.disabled && css`
    // &&& { background: transparent; }
    &&& { background: ${colors.main}; }
    color: ${colors.mainDark};
    border: 2px solid ${colors.mainDark};
    cursor: not-allowed;
  `}

`;

const CustomRoundedButton = (props) => {
  // console.log(props);
  return (
    <StyledButton 
      type="button" 
      className="btn" 
      primary={props.primary} 
      disabled={props.disabled}
      textColor={props.textColor}
      bgColor={props.bgColor}
      href="/"
      > 
      {props.label} 
    </StyledButton>
)}

export default CustomRoundedButton