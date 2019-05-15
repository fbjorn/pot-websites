import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Featured from '../components/featured'
import HexBlurb from '../components/hexBlurb'

import { colors } from '../Theme.js'

const rel2 = () => (
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
          <div className="col-md-6">
            <p className="benefit">
              Skip the costly and time-consuming part where you build integrations and try the make the data move
            </p>
            <p className="benefit">
              Jump right to the part where you start using that data and turning it into revenue
            </p>
          </div>
          <div className="col-12">
            <h3>Platform of Trust is a data linking platform with built-in trust capabilities that makes you’re your data flow easily, with marginal of cost while you rule your data:</h3>
          </div>
        </div>
        <div  className="row">

          <div className="hex-blurb col">
            <HexBlurb title="Create better and smarter buildings and cities" icon="draftingCompass" textColor={colors.main} />
          </div>
          
          <div className="hex-blurb col">
            <HexBlurb title="Improve the productivity of any daily processes" icon="badge" textColor={colors.main} />
          </div>

          <div className="hex-blurb col">
            <HexBlurb title="Earn with new services and innovative business models" icon="draftingCompass" textColor={colors.main} />
          </div>

          <div className="hex-blurb col">
            <HexBlurb title="Save on time, energy and material costs" icon="piggyBank" textColor={colors.main} />
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

          <div className="col-12">
            <h2>Here are the tools we offer:</h2>
          </div>

          <div className="hex-col col-3">
            {/* <h4>Developer portal</h4> */}
            <HexBlurb title="Developer portal" icon="terminal" textColor="white" bgColor="black" />
          </div>
          <div className="hex-col col-4">
            <h3>Hack data</h3>
            <p>
            Our developer portal has all the tools and data you need in order to create new solutions and services. This portal has been built from the point of view of a developer in order to create the best possible DX.
            </p>
          </div>
          <div className="col-3"> 
            <Link to="/">
              <button type="button" className="btn btn-outline-primary"> Join the party </button>
            </Link>
          </div>
          <div className="hex-col col-2  offset-1">
            <HexBlurb title="My World" icon="terminal" textColor="white" bgColor={colors.mainDark} />
          </div>
          <div className="hex-col col-4">
            <h3>Rule data (coming soon)</h3>
            <p>
            My world is a visualisation tool where you can manage your data in a digital twin, see where it comes from and where it links to.
            </p>
          </div>
          <div className="col-3"> 
            <Link to="/">
              <button type="button" className="btn btn-outline-primary" disabled> coming soon </button>
            </Link>
          </div>
          <div className="hex-col col-3  offset-2">
            <HexBlurb title="Market place" icon="terminal" textColor={colors.main} />
          </div>
          <div className="hex-col col-4">
            <h3>Sell &amp; Buy (future feature)</h3>
            <p>
              Make your data earn. We are creating a marketplace for data products and applications where you can offer your data for others to utilise or a ready-made service or application for others to buy. You define the pricing, we take care of contracts and licensing. Automatically.
            </p>
          </div>
          <div className="col-3"> 
            <Link to="/">
              <button type="button" className="btn btn-outline-primary"> future feature </button>
            </Link>
          </div>

          <div className="col-12">
            <h2>Enjoy the benefits:</h2>
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
          </div>

          <div className="col-12">
            <h3>Enjoy the benefits:</h3>
          </div>

          <p>
          <p>Kojamo Oyj  &middot;  Keskinäinen työeläkevakuutusyhtiö Varma  &middot;  Tampereen Tilapalvelut Oy, GSP Group Oy  &middot;  Hämeen ammattikorkeakoulu HAMK  &middot;  Forum Virium Helsinki  &middot;  Honkio Oy  &middot;  Cozify Oy  &middot; Flexitila / Joustotoimisto Oy  &middot;  Metropolia Ammattikorkeakoulu  &middot;  Senaatti-kiinteistöt, Suomen Yliopistokiinteistöt Oy  &middot;  Tieto Oyj  &middot;  Granlund Oy  &middot;  Digital Living International Oy  &middot;  Tunninen Oy Finland  &middot;  Teknologian tutkimuskeskus VTT Oy  &middot;  Helsingin seudun opiskelija-asuntosäätiö sr (Hoas).</p>
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

export default rel2
