import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { colors } from '../Theme.js'

const StyledFooterInfo = styled.div`
color: ${colors.light};
h5 { 
  font-weight: 600;
  color: ${colors.main}; 
}
a {
  font-weight: 900; 
  color: ${colors.mainDark}; 
}
a:visited { color: ${colors.mainDarker}; }
`

const FooterInfo = (props) => {
  return (
    <StyledFooterInfo> 
      <h5 className="mb-md-1">Platform of Trust Oy</h5>
      <p>VAT-number FI29800052</p>
      {/* <p><a href="https://www.tilaajavastuu.fi/en/data-protection/">Data protection statement</a></p>*/}
    </StyledFooterInfo>
)}

export default FooterInfo