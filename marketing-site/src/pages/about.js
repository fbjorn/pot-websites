import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

import Video from '../components/Video'
// import CustomRoundedButton from '../components/CustomRoundedButton'
import HexIcon from '../components/hexIcon'
import { colors, variables } from '../Theme.js'

const StyledPage = styled.div`
  width: auto;
  max-width: ${ variables.pageWidthNarrow };
  margin: 0 auto;
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
const StyledVideo = styled.section`
  &&& { max-width: ${ variables.pageWidth } }
  margin: 5rem auto;  

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
      
       
      <StyledSection className="container">
        <div classname="row">
          <h1>About</h1>
            
            <StyledGraph>
              <h2>Graafi</h2> 
            </StyledGraph> 
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>Communally built Platform of Trust is a platform that makes data move between systems and organisations. It makes knowledge-based decisions possible but also creates grounds for new business models with harmonised data. </p>
          </div>
          <div className="col-md-6">
            <p>Platform of Trust differs from other platforms with a built-in trust engine that makes sure both the data and the data producers and users are trustworthy. </p>
          </div>
        </div>
      </StyledSection>
      <StyledSection className="container">
        <h2>For whom</h2>
        <div className="row">
          <div className="col-4 col-md-2">
            <HexIcon icon="chart-line" color="main" />
          </div>
          <div className="col-7 col-md-4 d-flex align-items-center">
            <p>Any business that is using or planning to use data for business development and new business models.</p>
          </div>
          <div className="col-4 col-md-2">
            <HexIcon icon="terminal" color="main" />
          </div>
          <div className="col-7 col-md-4 d-flex align-items-center">
            <p>Developers that long for faster time-to-market and want to experience high-quality developer experience.</p>
          </div>
        </div>
      </StyledSection>
      <StyledSection className="container">
        <StyledVideo>
          <h2>Platform of Trust benefits in one minute by CEO Toni Luhti</h2>
          <Video 
            videoSrcURL="https://www.youtube.com/embed/sGgt88bkoOA"
            videoTitle="Start using your data"
          />
        </StyledVideo>
        {/* <Link to="/">
          <CustomRoundedButton label="See our pricing plans" textColor="light" bgColor="tomato" />
        </Link> */}
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
