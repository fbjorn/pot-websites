import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import styled from 'styled-components'

import CustomRoundedButton from '../components/CustomRoundedButton'
import HexIcon from '../components/hexIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors, device, variables } from '../Theme.js'

const StyledPage = styled.div`
  width: auto;
  max-width: ${ variables.pageWidth };
  min-height: 75vh;
  margin: 0 auto;
  @media ${ device.laptop } {
  }
  * { color: white }
`
const StyledGraph = styled.div`
  width: auto;
  max-width: ${ variables.pageWidth };
  min-height: 30vh;
  margin: 0 auto;   
  background-color: white;
  h2{ color: ${ colors.main }; }
`
const StyledSection = styled.section`
  &&& { max-width: ${ variables.pageWidth } }
  margin: 5rem auto;   
`
const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  min-height: 30vh;
  margin: 0 auto 0 0;   
  background-color: black;
  h2{ color: ${ colors.white }; }
`

const About = () => (
  <Layout>
    <SEO title="About Platform of Trust" />
    <svg height="0" width="0" viewBox="0 0 500 500" >
      <defs>
          <clipPath id="hex-clip" clipPathUnits="objectBoundingBox">
            <polygon fill="none" points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
          </clipPath>
      </defs>
    </svg>
    <StyledPage>
      <h1>About</h1>
      <StyledGraph>
        <h2>Graafi</h2> 
      </StyledGraph>  
      <StyledSection className="container">
        <div className="row">
          <div className="col">
            <p>Communally built Platform of Trust is a platform that makes data move between systems and organisations. It makes knowledge-based decisions possible but also creates grounds for new business models with harmonised data. </p>
          </div>
          <div className="col">
            <p>Platform of Trust differs from other platforms with a built-in trust engine that makes sure both the data and the data producers and users are trustworthy. </p>
          </div>
        </div>
      </StyledSection>
      <StyledSection className="container">
        <h2>For whom</h2>
        <div className="row">
          <div className="col-2">
            <HexIcon icon="chart-line" color="main" />
          </div>
          <div className="col-4">
            <p>Any business that is using or planning to use data for business development and new business models.</p>
          </div>
          <div className="col-2">
            <HexIcon icon="terminal" color="main" />
          </div>
          <div className="col-4">
            <p>Developers that long for faster time-to-market and want to experience high-quality developer experience.</p>
          </div>
        </div>
      </StyledSection>
      <StyledSection className="container">
        <h2>Platform of Trust benefits in one minute by CEO Toni Luhti</h2>
        <StyledVideo>
          <FontAwesomeIcon icon={['fal', 'play']} size="4x" />
        </StyledVideo>
        <Link to="/">
          <CustomRoundedButton label="See our pricing plans" textColor="light" bgColor="tomato" />
        </Link>
      </StyledSection>
      <StyledSection className="container">
        <h2>Our partners and customers</h2>
        <StyledGraph>
          <h2>Logot</h2>
        </StyledGraph>
      </StyledSection>
      <StyledSection className="container">
        <h3>Platform of Trust is part of <a href="https://www.tilaajavastuu.fi/en/" >Suomen Tilaajavastuu Group</a></h3>
      </StyledSection>
    </StyledPage>

  </Layout>
)

export default About
