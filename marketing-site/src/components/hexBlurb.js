import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconLookup } from '@fortawesome/fontawesome-svg-core'

const Hex = styled.div`
  background: ${props => props.bgColor ? props.bgColor : "white"};
  padding-top: 115.4701%;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: url("#hex-clip");
`
const HexContent = styled.div`
  position: absolute;
  width: 85%;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  && * {
    color: ${props => props.textColor ? props.textColor : "black"}
  }
  
  // h5 {
  //   @media (max-width: 992px){
  //     display: none;
  //   }
  // }
`

const HexBlurb = (props) => {
  return (
    <Hex className="content-wrapper" bgColor={props.bgColor}>
      <HexContent className="content" textColor={props.textColor} >
        <FontAwesomeIcon icon={['fal', `${props.icon}`]} size="3x" />
        <h5>{props.title}</h5>
        <p>{props.content}</p>
      </HexContent>>
    </Hex>
)}

export default HexBlurb