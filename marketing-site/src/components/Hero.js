import React from 'react'
// import { StaticQuery, graphql } from "gatsby"
// import MDXRenderer from "gatsby-mdx/mdx-renderer"
import styled from 'styled-components'

import HexBg from '../images/bg-square2.jpg'
import HexImage from './HexImage'
import { device } from '../Theme.js'

const StyledHero = styled.div`
position: relative;
padding-top: 100%;
width: 100%;
@media ${device.tablet} { width: 66.666%; padding-top: 77%; }
z-index: 2;
`
const StyledBg =styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`
const StyledContent =styled.h1`
  position: absolute;
  // padding: 25% 1rem 25% 50%;
  width: 45%;
  top: 25%;
  left: 50%;
  color: white;
  font-size: 5vw;
  // @media ${device.mobileL} { font-size: 1.8rem; }
  @media ${device.tablet} { font-size: 1.6rem; }
  @media ${device.laptopL} { font-size: 2rem; }
  z-index: 2;
`

const Hero = ({ data }) => (
  <StyledHero>
    <StyledBg>
      <HexImage pic={HexBg}/>
    </StyledBg>

    <StyledContent>
      Create better living environment and make smarter business decisions with flowing data
    </StyledContent>
  </StyledHero>
)

export default Hero