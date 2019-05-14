import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Featured from '../components/featured'
import HexBlurb from '../components/hexBlurb'

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
              Ratione mollitia dignissimos quibusdam maioresdelectus.
            </h3>
          </div>
          <div className="col-md-6">
            <p className="benefit">
              Ratione mollitia dignissimos quibusdam maioresdelectus.
            </p>
            <p className="benefit">
              Ratione mollitia dignissimos quibusdam maioresdelectus.
            </p>
          </div>
          <div className="col-12">
            <h3>Platform mollitia dignissimos quibusdam maioresdelectus:</h3>
          </div>
        </div>
        <div  className="row">
          <div className="hex-blurb col">
            <HexBlurb title="foo" icon="hexagon" color="blue" primary />
          </div>
          
          <div className="hex-blurb col">
            <div className="content-wrapper">
              <div className="content">
                <h4>Ratione mollitia dignissimos quibusdam maioresdelectus:</h4>
              </div>>
            </div>
          </div>
          <div className="hex-blurb col">
            <div className="content-wrapper">
              <div className="content">
                <h4>Ratione mollitia dignissimos quibusdam maioresdelectus:</h4>
              </div>>
            </div>
          </div>
          <div className="hex-blurb col">
            <div className="content-wrapper">
              <div className="content">
                <h4>Save mollitia dignissimos quibusdam maioresdelectus:</h4>
 
</div>           </div>
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
            <h2>Herea are the toos we offer:</h2>
          </div>

          <div className="hex-col col-3">
            <h4>Market place</h4>
          </div>
          <div className="hex-col col-9">
            <h3>Sell & Buy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="hex-col col-3">
            <h4>Market place</h4>
          </div>
          <div className="hex-col col-9">
            <h3>Sell & Buy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="hex-col col-3">
            <h4>Market place</h4>
          </div>
          <div className="hex-col col-9">
            <h3>Sell & Buy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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
            <span className="partner">Kojamo Oy</span>
            <span className="partner">Kojamo Oy</span>
            <span className="partner">Kojamo Oy</span>
            <span className="partner">Kojamo Oy</span>
            <span className="partner">Kojamo Oy</span>
            <span className="partner">Kojamo Oy</span>
            <span className="partner">Kojamo Oy</span>
            <span className="partner">Kojamo Oy</span>
            <span className="partner">Kojamo Oy</span>
            <span className="partner">Kojamo Oy</span>
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
