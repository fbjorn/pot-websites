import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import HexBlurb from './hexBlurb'
import CustomButton from './customButton'

import { variables, colors } from '../Theme.js'

const ToolsSection = styled.div`
  max-width: ${variables.pageWidth};
  width: 100%;
  @media (min-width: 992px) {
    .row:nth-of-type(2) { transform: translateY(25%) }
    .row:nth-of-type(3) { transform: translateX(-1%) }
    .row:nth-of-type(4) { transform: translate(-2%, -25%) }
  }
`

const ToolsIntro = (props) => {
  return (
    <ToolsSection className="container" bgColor={props.bgColor}>
      <div className="row">
        <div className="col-12">
          <h2>Here are the tools we offer:</h2>
        </div>
      </div>

      <div className="row">
        <div className="hex-col col-2">
          <HexBlurb title="Developer portal" icon="terminal" textColor="white" bgColor="black" />
        </div>
        <div className="col-lg-6 col-7">
          <h3>Hack data</h3>
          <p>
          Our developer portal has all the tools and data you need in order to create new solutions and services. This portal has been built from the point of view of a developer in order to create the best possible DX.
          </p>
        </div>
        <div className="col-3 col-lg-2"> 
          <Link to="/">
            <CustomButton label="Join the party" primary />
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="hex-col col-2 offset-lg-1">
          <HexBlurb title="MyWorld" icon="globe-stand" textColor="white" bgColor={colors.mainDark} />
        </div>
        <div className="col-lg-6 col-7">
          <h3>Rule data (coming soon)</h3>
          <p>
          My world is a visualisation tool where you can manage your data in a digital twin, see where it comes from and where it links to.
          </p>
        </div>
        <div className="col-3 col-lg-2"> 
          <Link to="/">
            <CustomButton label="Coming soon" primary disabled />
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="hex-col col-2  offset-lg-2">
          <HexBlurb title="Market place" icon="shopping-bag" textColor={colors.main} />
        </div>
        <div className="col-lg-6 col-7">
          <h3>Sell &amp; Buy (future feature)</h3>
          <p>
            Make your data earn. We are creating a marketplace for data products and applications where you can offer your data for others to utilise or a ready-made service or application for others to buy. You define the pricing, we take care of contracts and licensing. Automatically.
          </p>
        </div>
        <div className="col-3 col-lg-2"> 
          <Link to="/">
            <CustomButton label="Future feature" primary disabled />
          </Link>
        </div>
      </div>
    </ToolsSection>
)}

export default ToolsIntro