import React from 'react'
import { StaticQuery, graphql } from "gatsby"
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
const StyledContent =styled.div`
  position: absolute;
  width: 45%;
  top: 25%;
  left: 50%;
  z-index: 2;
  h1 {
    color: white;
    // font-size: 5vw;
    font-size: 9vw;
    @media ${device.tablet} { font-size: 2.6rem; }
    @media ${device.laptopM} { font-size: 3rem; }
    @media ${device.laptopL} { font-size: 3.6rem; }
  }
`

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        intro: allMarkdownRemark(
          filter: { frontmatter: { section: { eq: "herohex" } } }
          limit: 1
        ) {
          edges {
          node {
            id
            html
          }
        }
      }
    }
  `}
    render={data =>  {
      const content = data.intro.edges[0].node
      return (
      <StyledHero>
        <StyledBg>
          <HexImage pic={HexBg} hexId="HeroHex"/>
        </StyledBg>
        <StyledContent 
          key={content.id}
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </StyledHero>
    )}}
  />
)

export default Hero