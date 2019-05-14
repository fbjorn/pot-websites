import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HexBlurb = (props) => (
  <div className="hex-col">
    <svg height="0" width="0" viewBox="0 0 500 500" >
      <defs>
          <clipPath id="hex-clip" clipPathUnits="objectBoundingBox">
            <polygon fill="none" points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
          </clipPath>
      </defs>
    </svg>
    <div className="content-wrapper">
      <div className="content">
        <FontAwesomeIcon icon={props.icon} />
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>>
    </div>
  </div>
)

export default HexBlurb