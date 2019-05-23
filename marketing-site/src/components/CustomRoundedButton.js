import React from 'react'
import styled, { css } from 'styled-components'

import { colors } from '../Theme.js'

const StyledButton = styled.button`
background: ${ props => props.color ? colors[props.color] : colors.alert };
border-radius: 3rem;
color: ${colors.main};
margin: 0.5em 1em;
padding: 0.25em 1em;
box-shadow: 0 0 0.2rem ${colors.mainDark};
transition: all 0.1s ease-out;
outline: none;

&:hover {
  cursor: pointer;
  border-radius: 1rem;
  color: ${colors.light};
}

&:focus {
  background: ${colors.light};
  cursor: pointer;
  border-radius: 1rem;
  color: ${colors.main};
  outline: none;
  box-shadow: 0 0 0.2rem ${colors.main};
}

&:active {
  background: ${colors.light};
  cursor: pointer;
  border-radius: 1rem;
  color: ${colors.main};
  outline: none;
}

${props => props.primary && css`
  background: ${colors.main};
  color: ${colors.light};
  border: 2px solid ${colors.light};
`}

${props => props.disabled && css`
  background: transparent;
  color: ${colors.mainDark};
  border: 2px solid ${colors.mainDark};
`}

`;

const CustomRoundedButton = (props) => {
  return (
    <StyledButton 
      type="button" 
      className="btn" 
      primary={props.primary} 
      disabled={props.disabled}
      color={props.color}
      href="/"
      > 
      {props.label} 
    </StyledButton>
)}

export default CustomRoundedButton