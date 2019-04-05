import React from 'react'
// import { graphql, Link } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

import EndToEnd from "../images/end-to-end-dx.png"

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Platform of Trust Developers" keywords={[`Platform of trust`, `developers`]} />
      <section className="Home fullwidth page-content">
        <div className="jumbotron jumbotron-fluid"> 
          <div className="container">
            <h1 className="display-4">Build trusted products</h1>
            <p className="lead">Platform of Trust gives access to both rich build environment data and customers.​</p>
            <div className="set">
              <form>
                <input type="email" placeholder="Email" />
                <button type="submit" className="btn btn-primary">Sign up</button>            
              </form>
            </div> 
            <p><a href="https://docs.oftrust.net">View API documentation</a></p>
            <p><Link to="/apis">View APIs</Link></p>

          </div>
        </div>
    
        <main className="container">

          <section  className="container">
            <h2>From Data Products to Applications</h2>  
            <p>An overview of the processes included in the End-to-end Developer eXperience</p>
            <img src={EndToEnd} className="logo__header" alt="End-to-end developer experience (DX) illustration" />
            <p>From below you'll find getting started guides for the processes. </p>    
          </section>
          
          <h2>What do you want to do next?</h2>
          <section className="container row equal">
          
            <div className="col-sm d-flex">
            <Link to="/guides/data-products">
              <div className="card">
                
                  <div className="card-header"><h3>CREATE DATA PRODUCTS</h3></div>
                  <div className="card-body">
                    <p>Check out getting started package and add new data products with integrations for other developers to consume</p>
                  </div>
                  <div className="card-footer">
                    <p>Learn more >> </p>
                  </div>
              </div>
              </Link>
            </div>
            
            <div className="col-sm d-flex">
              <div className="card">
                <div className="card-header"><h3>BUILD APPS</h3></div>
                <div className="card-body">
                  <p>Read the getting started and build new applications on top of the data products.</p>
                </div>
                <div className="card-footer">
                  <Link to="/guides/build-apps">Learn more >> </Link>
                </div>
              </div>
            </div>
            <div className="col-sm d-flex">
              <div className="card">
                <div className="card-header"><h3>USE STANDARD DATA MODELS</h3></div>
                <div className="card-body">
                  <p>All data exposed by the platform must be harmonised and use standard data models. Get familiar and start using along with Translator component. </p>
                  
                </div>
                <div className="card-footer">
                <Link to="/guides/data-models">Learn more >> </Link>
                </div>
              </div>
            </div>
          </section> 

 
          
          <p>We are creating more guides on various topics. We also welcome community driven guides. Checkout how to contribute and see full list of guides.</p>
          <div><button type="submit" className="btn btn-primary">Full list of guides! (/guides)</button></div>
           

          <section  className="container">
            <h2>We love developers</h2>  
            <p>Developer experience is at the forefront of everything we do. We strive to make products 
                that are both delightful and get out of your way, so that you can focus on what you do best - 
                building great apps and data products. </p>
                
            <p>Take a deep dive into API documentation including code examples for shell (curl)</p>
            
            <p><a href="https://docs.oftrust.net">View API documentation >></a></p>

            <p>
            Platform of Trust APIs and libraries. Get familiar with the APIs and start building trusted data products and applications on top our platform.   
            </p>

            <Link to="/apis">Read more about APIs and tools available >> </Link>  
                
          </section>
      
          <section  className="container row">
            <h2>Learn why developers and data providers are choosing Platform of Trust</h2>
            <div className="container row equal">
              <div className="col-sm d-flex">
                <div className="card">
                  <div className="card-header"><h3>DATA PRODUCT USE CASE</h3></div>
                  <div className="card-body">
                    <p>Check out getting started package and add new data products with integrations for other developers to consume</p>
                  </div>
                  <div className="card-footer">
                    <Link to="/use-cases/data-product">Learn more >> </Link>
                  </div>
              </div>
              </div>
              <div className="col-sm d-flex">
                <div className="card">
                  <div className="card-header"><h3>APP USE CASE</h3></div>
                  <div className="card-body">
                    <p>Read the getting started and build new applications on top of the data products.</p>
                  </div>
                  <div className="card-footer">
                    <Link to="/use-cases/build-application">Learn more >> </Link>
                  </div>
                </div>
              </div>
            </div>          
          </section> 
          <section  className="container">
            <h2>Stay informed and participate</h2>  
            <p>Our daily communication is based on Slack and mailing list. Subscibe now and stay informed!</p>
            <a href="https://www.platformoftrust.net/set-subscription">Subscribe >> </a>
          </section>
          
        </main>
      </section>
    </Layout>
  )
}

// export const query = graphql`
// query {
//     intro: allMarkdownRemark(filter: {
//         frontmatter: {
//         path: {eq: "/index#introduction"}, 
//         section: {eq: "introduction"}
//         }}) {
//             totalCount
//             edges {
//             node {
//                 id
//                 html
//                 frontmatter {
//                     title
//                     path
//                     }
//                 }
//             }
//         }
// }
// `

export default IndexPage
