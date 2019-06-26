import React from 'react'
import styled from 'styled-components'

import FooterInfo from './FooterInfo'
import SomeIcons from './SomeIcons'
import Logo from "../images/platformoftrust-wide-white-rgb.svg"
import { colors } from '../Theme.js'

const StyledMenuFooter = styled.footer`
display: flex;
background: ${colors.mainDarker};
img { margin-bottom: 2rem; }
h5 { font-size: 1rem; }
.footer-content { 
  flex: 3; 
  padding: 1rem;
}
.footer-some { 
  flex: 1;
  padding: 1rem 1rem 1rem 0;
  min-width: calc(32px + 1rem);
  max-width: calc(42px + 1rem);
}
`
const MenuFooter = () => (
  <StyledMenuFooter>
    <div className="footer-content">
      <img src={Logo} className="logo__footer" alt="Logo" />
      <FooterInfo />
    </div>
    <div className="footer-some">
      <SomeIcons vertical />
    </div>
  </StyledMenuFooter>
)

export default MenuFooter
