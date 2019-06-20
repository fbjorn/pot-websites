import React from 'react'
import styled from 'styled-components'

import Facebook from "../images/facebook-square-brands.svg"
import Twitter from "../images/twitter-square-brands.svg"
import Github from "../images/github-square-brands.svg"
import Linkedin from "../images/linkedin-square-brands.svg"
import { colors } from '../Theme.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledSomeIcons = styled.nav`
  display: inline-flex;
  width: 100%;
  a {
    display: inline-block;
    width: 100%;
    padding: 0;
    margin: 0 2.5% 0 0;
    line-height: 1;
  } 
  svg {
    max-width: 100%;
    height: auto;
    line-height: 0;
    vertical-align: 0;
    color: ${ props => props.color ? colors[props.color] : colors.main }
  }
`

const SomeIcons = (props) => {
  return (
    <StyledSomeIcons className="some-links" color={props.color}>

      <a href="https://www.facebook.com/platformoftrust" className="some-link facebook">
        <FontAwesomeIcon icon={['fab', `facebook-square`]} size="8x" />
      </a>
    
      <a href="https://twitter.com/PlatformOfTrust" className="some-link twitter">
        <FontAwesomeIcon icon={['fab', `twitter-square`]} size="8x" />
      </a>
    
      <a href="https://www.linkedin.com/company/platform-of-trust/" className="some-link github">
        <FontAwesomeIcon icon={['fab', `github-square`]} size="8x" />
      </a>
    
      <a href="https://github.com/PlatformOfTrust/" className="some-link linkedin">
        <FontAwesomeIcon icon={['fab', `linkedin`]} size="8x" />
      </a>
    
      <a href="https://www.youtube.com/channel/UCSHXKYHxBCl_hXdBZU_A-gg" className="some-link youtube">
        <FontAwesomeIcon icon={['fab', `youtube-square`]} size="8x" />
      </a>
    </StyledSomeIcons>
)}

export default SomeIcons