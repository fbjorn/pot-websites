import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { variables, colors } from '../Theme.js'

export const componentColors = {
  freemium: `${colors.mainDark}`,
  transaction: `${colors.ok}`,
  standard: `${colors.success}`,
  premium: `${colors.notice}`,
}

const StyledCard = styled.article`
flex: 1;
margin: 0 0.5rem;
background: white;
&:first-child { margin-left: 0; }
&:last-child { margin-right: 0; }

header {
  padding: 1rem;
  background: ${props => componentColors[props.color]};
  * { color: white; }
  h1 { font-size: 1.6rem; }
}

main {
  padding: 1rem;
  * { 
    font-size: 1rem;
    font-weight: 500; 
  }
  ul { list-style: none; }
}
`;


const pricingCard = (props) => {
  return (
    <StyledCard color={props.color} > 
      <header>
        <FontAwesomeIcon icon={['fal', `${props.icon}`]} size="3x" />
        <h1>{props.name}:<br />
        {props.price}</h1>
      </header>
      <main>
        <div className="card-text content-fragment" dangerouslySetInnerHTML={{ __html: props.content }} />
      </main>
    </StyledCard>
)}


export default pricingCard