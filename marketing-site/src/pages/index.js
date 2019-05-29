import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'
import '../styles/temp-index.css'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`Platform of Trust`]} />
      <main className="home page-content container pt-5 mb-5">
        <div className="intro row-fluid pr-5">
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
          </div>
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
          </div> */}
        </div> 
      </main>
    </Layout>
  )
}

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