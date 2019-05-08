import React from 'react'

const Hero = () => (
  <div className="hero">
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
    <div id="hex2" className="hexagon-wrapper">
      <span className="hex-bg"></span>
      <span className="hex-content">Foobar Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, optio? Ratione mollitia dignissimos quibusdam maiores, odit saepe illum delectus.</span>
    </div>
  </div>
)

export default Hero