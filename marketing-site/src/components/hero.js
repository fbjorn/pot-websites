import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FeaturedNews from './featuredNews'

import { variables, colors } from '../Theme.js'

const StyledHero = styled.div`
@media (max-width: 768px) {
  &&& { display: none; }
}
`


const Hero = () => (
  <StyledHero className="hero">
    <svg height="0" width="0" viewBox="0 0 500 500" >
      <defs>
          <clipPath id="hex-clip" clipPathUnits="objectBoundingBox">
            <polygon fill="none" points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
          </clipPath>
      </defs>
    </svg>
    <div id="hex1" className="hexagon-wrapper hex-shadow">
      <span className="hex-bg" />
      <span className="hex-content">
        <h1>Create better living environment and make smarter business decisions with flowing data</h1>
      </span>
    </div>
    <FeaturedNews />
    {/* <div className="featured-news hexagon-wrapper">
      <span className="hex-bg"></span>
      <div className="hex-content">
        <h2>Latest News</h2>

        <p className="meta">
          <span className="icon icon-blog">
            <FontAwesomeIcon icon="hexagon" />
          </span>
          <span className="type">Blog</span>
          <span className="date">January 19, 2019</span>
        </p>
        <p className="excerpt">
          Ratione mollitia dignissimos quibusdam maioresdelectus...
        </p>

        <p className="meta">
          <span className="icon icon-news">
            <FontAwesomeIcon icon="hexagon" />
          </span>
          <span className="type">News</span>
          <span className="date">February 19, 2019</span>
        </p>
        <p className="excerpt">
          Foobar Lorem ipsum dolordipisicing elit...
        </p>

        <p className="meta">
          <span className="icon icon-article">
            <FontAwesomeIcon icon="hexagon" />
          </span>
          <span className="type">Article</span>
          <span className="date">January 19, 2019</span>
        </p>
        <p className="excerpt">
          Foobar Lorem ipsum dolor sit amet, optio...
        </p>
        <Link to="/" className="go-to-link">Go to news</Link>
      </div>
    </div> */}
  </StyledHero>
)

export default Hero