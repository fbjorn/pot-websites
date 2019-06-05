import React from 'react'
import { graphql } from 'gatsby' 
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import HexBlurb from '../components/HexBlurb'
import CustomRoundedButton from '../components/CustomRoundedButton'
import ToolsIntro from '../components/ToolsIntro'
import PricingCards from '../components/PricingCards'
import SavedVizs from '../components/SavedVizs'
import NewsletterCTA from '../components/NewsletterCTA'


import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'
import { colors } from '../Theme.js'

const StyledBenefits = styled.ul`
  font-size: 1.4rem;
  list-style: none;
  li { margin-bottom: 1em; }
  svg {
    position: absolute;
    margin-left: -1.2em;
    path { color: white; }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
      <SEO title="Home" keywords={[`Platform of Trust`]} />
      <svg height="0" width="0" viewBox="0 0 500 500" >
        <defs>
            <clipPath id="hex-clip" clipPathUnits="objectBoundingBox">
              <polygon fill="none" points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
            </clipPath>
        </defs>
      </svg>
      <main className="home page-content container">
        {/*<div className="test">
          <h1 className="test">TESTING</h1>
           {data.intro.edges.map(({ node }) => (
            <div key={node.id}>
              <h1>{node.frontmatter.title}</h1>
              <p className="content-fragment" dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          ))}  
        </div>*/}
        <div className="row">
          <div className="col-xl-8">
            <Hero />
          </div>
          <div className="col-xl-4">
            <Featured />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12">
            <h2>What if you <strong>used</strong> your data?</h2>
          </div>
          <div className="col-md-6">
            <h3>
              Your business creates exponential amounts of data that you could use to make smarter decisions and more profitable business.
            </h3>
          </div>
          <div className="col-md-3">
            <StyledBenefits>
              <li className="benefit">
                <FontAwesomeIcon icon={['fal', `check-circle`]} size="1x" />
                Skip the costly and time-consuming part where you build integrations and try the make the data move
              </li>
              <li className="benefit">
                <FontAwesomeIcon icon={['fal', `check-circle`]} size="1x" />
                Jump right to the part where you start using that data and turning it into revenue
              </li>
            </StyledBenefits>
          </div>
          <div className="col-md-3">
            <NewsletterCTA />
          </div>
          <div className="col-12 mt-5">
            <h3>Platform of Trust is a data linking platform with built-in trust capabilities that makes you’re your data flow easily, with marginal of cost while you rule your data:</h3>
          </div>
        </div>

        <div  className="row mt-3 mb-5">

          <div className="hex-blurb col">
            <HexBlurb title="Create better and smarter buildings and cities" icon="drafting-compass" textColor={colors.main} />
          </div>
          
          <div className="hex-blurb col">
            <HexBlurb title="Improve the productivity of any daily processes" icon="badge" textColor={colors.main} />
          </div>

          <div className="hex-blurb col">
            <HexBlurb title="Earn with new services and innovative business models" icon="sack" textColor={colors.main} />
          </div>

          <div className="hex-blurb col">
            <HexBlurb title="Save on time, energy and material costs" icon="piggy-bank" textColor={colors.main} />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h2>What if you <strong>used</strong> your data?</h2>
          </div>
        </div>

        <div className="row mt-5">
          <SavedVizs />
        </div>

        <div className="row mt-5">
          <ToolsIntro />
        </div>
        
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="mb-5">Enjoy the benefits:</h2>
            <PricingCards />      
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-4 text-left">
            <CustomRoundedButton label="Book online presentation"/>
          </div>
          <div className="col-lg-2 offset-md-6 text-right">
            <CustomRoundedButton label="Get started"/>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12">
            <h2>These smart companies and organizations are already using Platform of Trust:</h2>
            <p>
              Kojamo Oyj  &middot;  Keskinäinen työeläkevakuutusyhtiö Varma  &middot;  Tampereen Tilapalvelut Oy, GSP Group Oy  &middot;  Hämeen ammattikorkeakoulu HAMK  &middot;  Forum Virium Helsinki  &middot;  Honkio Oy  &middot;  Cozify Oy  &middot; Flexitila / Joustotoimisto Oy  &middot;  Metropolia Ammattikorkeakoulu  &middot;  Senaatti-kiinteistöt, Suomen Yliopistokiinteistöt Oy  &middot;  Tieto Oyj  &middot;  Granlund Oy  &middot;  Digital Living International Oy  &middot;  Tunninen Oy Finland  &middot;  Teknologian tutkimuskeskus VTT Oy  &middot;  Helsingin seudun opiskelija-asuntosäätiö sr (Hoas).
            </p> 
            <CustomRoundedButton className="ml-0" label="become reseller"/>
          </div>
        </div>
      </main>
    </Layout>
)

export const query = graphql`
  query {
    intro: allMarkdownRemark(filter: {
      frontmatter: {
      path: {eq: "/index#introduction"}, 
      section: {eq: "introduction"}
      }}) {
        totalCount
        edges {
        node {
          id
          html
          frontmatter {
              title
              path
            }
          }
        }
      }
  }
`

export default IndexPage
