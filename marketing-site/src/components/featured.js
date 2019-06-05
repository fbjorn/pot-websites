import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const StyledFeatured = styled.div`
@media (max-width: 768px) {
  &&& { display: none; }
}
`

const Featured = () => (
  <StyledFeatured className="featured">
    {/* <svg height="0" width="0" viewBox="0 0 500 500" >
      <defs>
          <clipPath id="hex-clip" clipPathUnits="objectBoundingBox">
            <polygon fill="none" points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
          </clipPath>
      </defs>
    </svg> */}

    <div className="featured-illustration hexagon-wrapper hex-shadow">
      <span className="hex-bg" />
      <span className="hex-content"></span>
    </div>

    

    <div className="featured-contents">

      <Link to="/" className="featured-event hexagon-wrapper featured-hex">
        <div className="hex-content">
          <div className="content-wrapper">
            <h3>Event</h3>
            <p>Bootcamp @Maria01 </p>
            {/* <a className="read-more">Read more </a> */}
            <span className="read-more">Read more</span>
          </div>
        </div>
      </Link>

      <Link to="/" className="featured-case hexagon-wrapper">
        <div className="hex-content">
          <div className="content-wrapper">
            <h3>Use case</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            {/* <a className="read-more">Read more </a> */}
            <span className="read-more">Read more</span>
          </div>
        </div>
      </Link>

    </div>

    {/* <div className="featured-illustration hexagon-wrapper hex-shadow">
      <span className="hex-bg" />
      <span className="hex-content"></span>
    </div> */}

  </StyledFeatured>
)

export default Featured