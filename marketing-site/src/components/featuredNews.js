import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { variables, colors } from '../Theme.js'

const StyledNews = styled.div`
@media (max-width: 768px) {
  &&& { display: none; }
}
`

const FeaturedNews = () => (
  <StyledNews className="featured-news hexagon-wrapper">
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
  </StyledNews>
)

export default FeaturedNews