import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`Platform of Trust`]} />
      <section className="Home fullwidth page-content">
        <div className="jumbotron jumbotron-fluid"> 
          <div className="container">
            <h1 className="display-4">Welcome to Platform of Trust</h1>
            <p className="lead">temporary landing page. Public release June 2019.</p>
            <p className="lead">More information about Platform of Trust at <a href="platformoftrust.net">platformoftrust.net</a></p>
          </div>
        </div>

        <main className="container">
          
          <section className="container row equal">
          
            <div className="col-sm d-flex">
              <div className="card">
                <div className="card-header"><h3>MANAGE YOUR DATA</h3></div>
                <div className="card-body">
                  <p>Check out getting started package and add new data products with integrations for other developers to consume</p>
                </div>
                <div className="card-footer">
                  <a href="https://myworld.oftrust.net">Go to myworld >> </a>
                </div>
              </div>
            </div>
            <div className="col-sm d-flex">
              <div className="card">
                <div className="card-header"><h3>DEVELOPER TOOLS</h3></div>
                <div className="card-body">
                  <p>Read the getting started and build new applications on top of the data products.</p>
                </div>
                <div className="card-footer">
                  <a href="https://developer.oftrust.net">Go to developer portal >></a>
                </div>
              </div>
            </div>
            <div className="col-sm d-flex">
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
          </section> 
        </main>
      </section>
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
