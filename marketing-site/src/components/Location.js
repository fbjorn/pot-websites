import React from 'react'
import styled from 'styled-components'

import { colors, device } from '../Theme.js'
import Map from "../images/map.jpg"

const StyledLocation = styled.article`
  margin-bottom: 1rem;
  .content {
    display: flex;
    flex-direction: column;
    padding 1rem;
    background: ${colors.mainDarker};
    border-radius: 1rem;
    box-shadow: 0 0.6rem 1rem ${colors.mainDark};
    opacity: 0.9;
    h3 {
      font-size: 1.2rem;
      font-weight: 900;
    }
    p {
      font-size: 1.2rem;
    }
  }
`

const Location = (props) => {
  return (
    <StyledLocation className="location col-12 col-md-6 col-lg-4">
      <div className="content">
        <img src={Map}  alt="Map" />
        <h3>{props.nam}</h3>
        <p>Tarvonsalmenkatu 17 B</p>
        <p>00260 Espoo</p>
        <p>Finland</p>
      </div>
    </StyledLocation>  
)}


export default Location