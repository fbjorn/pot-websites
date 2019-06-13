import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Hex from './Hex'
import HexImage2 from './HexImage2'
import FeaturedEvent from './FeaturedEvent'
import FeaturedCase from './FeaturedCase'
import HexPic from '../images/city-square.jpg'
import { colors, device } from '../Theme.js'

const StyledFeatured = styled.div`
  position: relative;
  x-index: 10;
  .featured-case { transform: translate(25%, 0); color: ${colors.main}; }
  .featured-event { padding-top: 44% }
`
const StyledFeaturedHex = styled.div`
  position: relative;
  .hex {
    position: absolute;
    width: 50%;
    bottom: 0;
    z-index: 3;
  }
`

const Featured = ({ data }) => (
  
  <StyledFeatured className="featured">
    <HexImage2 pic={HexPic} />
    
    <StyledFeaturedHex className="featured-case">
      <FeaturedCase />
      <div className="hex"><Hex color="light" /></div> 
    </StyledFeaturedHex>

    <StyledFeaturedHex className="featured-event">
      <FeaturedEvent />
      <div className="hex"><Hex color="mainDarker" /></div> 
    </StyledFeaturedHex>
  </StyledFeatured>
)

export default Featured