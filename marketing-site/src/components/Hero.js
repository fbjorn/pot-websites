import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import styled from 'styled-components'

import HexImage from './HexImage'

import { device, variables } from '../Theme.js'

const StyledHero = styled.div`
position: relative;
border: 1px solid red;
margin-bottom: 25%;
`
const StyledBg =styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`
const StyledContent =styled.h1`
  position: relative;
  padding: 25% 1rem 25% 50%;
  color: white;
  font-size: 1.4rem; 
  z-index: 2;
  @media ${device.tablet} { font-size: 3rem; }
  @media ${device.laptop} { font-size: 2rem; }
`

const Hero = ({ data }) => (
  <StyledHero>
    <StyledBg>
      <HexImage />
    </StyledBg>

    <StyledContent>
      Create better living environment and make smarter business decisions with flowing data
    </StyledContent>
  </StyledHero>
)

export default Hero