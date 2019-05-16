import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby' 

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import HexBlurb from '../components/HexBlurb'
import ToolsIntro from '../components/ToolsIntro'
import PricingCard from '../components/PricingCard'

import { colors } from '../Theme.js'

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


        <div className="test">
          <h1 className="test">TESTING</h1>
          {/* {data.intro.edges.map(({ node }) => (
            <div key={node.id}>
              <h1>{node.frontmatter.title}</h1>
              <p className="content-fragment" dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          ))}  */}
        </div>

        <div className="row">
          <div className="col-xl-8">
            <Hero />
          </div>
          <div className="col-xl-4">
            <Featured />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2>What if you <strong>used</strong> your data?</h2>
          </div>
          <div className="col-md-6">
            <h3>
              Your business creates exponential amounts of data that you could use to make smarter decisions and more profitable business.
            </h3>
          </div>
          <div className="col-md-3">
            <ul>
              <li className="benefit">
                Skip the costly and time-consuming part where you build integrations and try the make the data move
              </li>
              <li className="benefit">
                Jump right to the part where you start using that data and turning it into revenue
              </li>
            </ul>
          </div>
          <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          </div>
          <div className="col-12">
            <h3>Platform of Trust is a data linking platform with built-in trust capabilities that makes you’re your data flow easily, with marginal of cost while you rule your data:</h3>
          </div>
        </div>
        <div  className="row">

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
        <div  className="row">
          <div className="col-12">
            <h2>What if you <strong>used</strong> your data?</h2>
          </div>

          <div className="viz-col col-3">
            <h2 className="data-number">214587€</h2>
            <img src="https://via.placeholder.com/150" />
            <h4>Ratione mollitia dignissimos quibusdam maioresdelectus:</h4>
          </div>
          <div className="viz-col col-3">
            <h2 className="data-number">214587€</h2>
            <img src="https://via.placeholder.com/150" />
            <h4>Ratione mollitia dignissimos quibusdam maioresdelectus:</h4>
          </div>
          <div className="viz-col col-3">
            <h2 className="data-number">214587€</h2>
            <img src="https://via.placeholder.com/150" />
            <h4>Ratione mollitia dignissimos quibusdam maioresdelectus:</h4>
          </div>
          <div className="viz-col col-3">
            <h2 className="data-number">214587€</h2>
            <img src="https://via.placeholder.com/150" />
            <h4>Ratione mollitia dignissimos quibusdam maioresdelectus:</h4>
          </div>

          <ToolsIntro />

          <div className="col-12">
            <h2>Enjoy the benefits:</h2>
          </div>

          <div className="col-md-3">
            <PricingCard />          
          </div>
          <div className="col-md-3">
            <PricingCard />          
          </div>
          <div className="col-md-3">
            <PricingCard />          
          </div>
          <div className="col-md-3">
            <PricingCard />          
          </div>
          
          {/* <div className="price-card col-3">
            <h2 className="data-number">214587€</h2>
            <img src="https://via.placeholder.com/150" />
            <h4>Ratione mollitia dignissimos quibusdam maioresdelectus:</h4>
          </div>
          <div className="price-card col-3">
            <h2 className="data-number">214587€</h2>
            <img src="https://via.placeholder.com/150" />
            <h4>Ratione mollitia dignissimos quibusdam maioresdelectus:</h4>
          </div>
          <div className="price-card col-3">
            <h2 className="data-number">214587€</h2>
            <img src="https://via.placeholder.com/150" />
            <h4>Ratione mollitia dignissimos quibusdam maioresdelectus:</h4>
          </div> */}

          <div className="col-12">
            <h3>Enjoy the benefits:</h3>
          </div>

          <p>
          Kojamo Oyj  &middot;  Keskinäinen työeläkevakuutusyhtiö Varma  &middot;  Tampereen Tilapalvelut Oy, GSP Group Oy  &middot;  Hämeen ammattikorkeakoulu HAMK  &middot;  Forum Virium Helsinki  &middot;  Honkio Oy  &middot;  Cozify Oy  &middot; Flexitila / Joustotoimisto Oy  &middot;  Metropolia Ammattikorkeakoulu  &middot;  Senaatti-kiinteistöt, Suomen Yliopistokiinteistöt Oy  &middot;  Tieto Oyj  &middot;  Granlund Oy  &middot;  Digital Living International Oy  &middot;  Tunninen Oy Finland  &middot;  Teknologian tutkimuskeskus VTT Oy  &middot;  Helsingin seudun opiskelija-asuntosäätiö sr (Hoas).
          </p>

        </div>

        {/* <div className="intro row-fluid pr-5">
          <div className="col-md-9 offset-sm-1">
            <h1 className="display-4">Welcome to Platform of Trust</h1>
            <p className="lead">Temporary landing page. Public release June 2019.</p>
            <p className="lead">More information about Platform of Trust at <a href="https://www.platformoftrust.net/">platformoftrust.net</a></p>
          </div>
        </div>
        <div className="row equal pt-5 pb-5">
          <div className="col-sm-10 col-md-4 d-flex offset-sm-1">
            <div className="card">
              <div className="card-header"><h3>MANAGE YOUR DATA</h3></div>
              <div className="card-body">
                <p>Check out getting started package and add new data products with integrations for other developers to consume</p>
              </div>
              <a href="https://world.oftrust.net">
                <div className="card-footer">
                  Go to myworld >> 
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-10 col-md-4 d-flex offset-sm-1">          
            <div className="card">
              <div className="card-header"><h3>DEVELOPER TOOLS</h3></div>
              <div className="card-body">
                <p>Read the getting started and build new applications on top of the data products.</p>
              </div>
              <a href="https://developer.oftrust.net">
                <div className="card-footer">
                  Go to developer portal >>
                </div>
                </a>
            </div>
          </div> */}
          {/* <div className="col-sm d-flex">
            <div className="card">
              <div className="card-header"><h3>MARKETPLACE FOR DATA AND SERVICES</h3></div>
              <div className="card-body">
                <p>All data exposed by the platform must be harmonised and use standard data models. Get familiar and start using along with Translator component. </p>
                
              </div>
              <div className="card-footer">
              <a href="https://marketplace.oftrust.net">Go to marketplace >></a>
              </div>
            </div>
          </div> 
        </div> */}
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
