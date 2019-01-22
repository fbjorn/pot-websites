import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

const DeveloperPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="Home fullwidth page-content">
      <div className="jumbotron jumbotron-fluid"> 
        <div className="container">
          <h1 className="display-4">Build trusted products in minutes</h1>
          <p className="lead">Platform of Trust gives access to both rich build environment data and customers.​</p>
          <form>
            <label htmlFor="signup">Sign up for an account today</label>
            <div className="form-group row" style={{maxWidth: '20em'}}>
              <input type="email" className="form-control col-sm" id="signup" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <button type="submit" className="btn btn-primary">Sign up</button>            
            </div>
          </form>  
        </div>
      </div>
  
      <main className="container">
        <h2>What do you want to do next?</h2>
        <section className="container row equal">
          <div className="col-sm d-flex">
            <div className="card">
              <div className="card-header"><h3>CREATE DATA PRODUCTS</h3></div>
              <div className="card-body">
                <p>Check out getting started package and add new data products with integrations for other developers to consume</p>
              </div>
              <div className="card-footer">
                <Link to="/developers/getstarted/data-products">Learn more >> </Link>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex">
            <div className="card">
              <div className="card-header"><h3>BUILD APPS</h3></div>
              <div className="card-body">
                <p>Read the getting started and build new applications on top of the data products.</p>
              </div>
              <div className="card-footer">
                <Link to="/developers/getstarted/build-apps">Learn more >> </Link>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex">
            <div className="card">
              <div className="card-header"><h3>CREATE API PRODUCTS</h3></div>
              <div className="card-body">
                <p>Build and publish new functional APIs on top of the Platform of Trust provided trusted data.</p>
              </div>
              <div className="card-footer">
                <Link to="/">Explore docs >> </Link>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex">
            <div className="card">
              <div className="card-header"><h3>READ THE DOCS</h3></div>
              <div className="card-body">
                <p>Take a deep dive into API documentation including code examples for Python, Node.js, Java and shell (curl)</p>
              </div>
              <div className="card-footer">
                <Link to="/">Explore docs >> </Link>
              </div>
            </div>
          </div>
        </section> 
        <section  className="container">
          <h2>Get started with the Platform of Trust APIs in minutes</h2>
          <p>Try out the most commonly used APIs instantly. Just select API, preferred code example and hit "run". The response with headers is printed below.</p>
          <div className="container row">
            <div className="col-md-6">
              <div className="bd-clipboard">
                <button className="btn-clipboard" title="" data-original-title="Copy to clipboard">Copy</button>
              </div>
              <figure className="highlight">
                <pre>
                  <code className="language-html" data-lang="html">
                    <span className="nt">&lt;link</span>
                    <br />
                    <span className="na"> rel=</span>
                    <span className="s">"stylesheet"</span> 
                    <span className="na"> href=</span>
                    <br />
                    <span className="s">"https://foo.com.min.css"</span> 
                    <span className="nt">&gt;</span>
                  </code>
                </pre>
              </figure>
            </div>
            <div className="col-md-3">
            <button className="btn btn-primary btn-block">Login API</button>  
            <button className="btn btn-primary btn-block">Context API</button>  
            <button className="btn btn-primary btn-block">Identity API</button>   
            <button className="btn btn-primary btn-block">Product API</button>  
            <button className="btn btn-primary btn-block">Broker API</button> 
            <Link to="/developers/apis">Read more about APIs >> </Link>    
            </div>
          </div>
        </section>
        <section  className="container row">
          <h2>Become part of a growth story and ecosystem of trust</h2>
          <p>Jotain talous insentiivejä (developerin managerille)</p>
        </section>
        <section  className="container row">
          <h2>Learn why developers and data providers are choosing Platform of Trust</h2>
          <div className="container row equal">
            <div className="col-sm d-flex">
              <div className="card">
                <div className="card-header"><h3>DATA PRODUCT USE CASE</h3></div>
                <div className="card-body">
                  <p>Description of use case</p>
                </div>
                <div className="card-footer">
                  <Link to="/">Learn more >> </Link>
                </div>
              </div>
            </div>
            <div className="col-sm d-flex">
              <div className="card">
                <div className="card-header"><h3>APP USE CASE</h3></div>
                <div className="card-body">
                  <p>Description of use case</p>
                </div>
                <div className="card-footer">
                  <Link to="/">Learn more >> </Link>
                </div>
              </div>
            </div>
            <div className="col-sm d-flex">
              <div className="card">
                <div className="card-header"><h3>API PRODUCT USE CASE</h3></div>
                <div className="card-body">
                  <p>Description of use case</p>
                </div>
                <div className="card-footer">
                  <Link to="/">Learn more >> </Link>
                </div>
              </div>
            </div>
          </div> 
        </section>
        <section  className="container">
          <h2>Start building today</h2>
          <form>
            <label htmlFor="signup-2">Sign up for an account today</label>
            <div className="form-group row" style={{maxWidth: '20em'}}>
              <input type="email" className="form-control col-sm" id="signup-2" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <button type="submit" className="btn btn-primary">Sign up</button>            
            </div>
          </form>  
        </section>
      </main>
    </section>
  </Layout>
)

export default DeveloperPage