import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

import 'bootstrap/dist/css/bootstrap.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="Home fullwidth">
      <div className="jumbotron jumbotron-fluid"> 
        <div className="container">
          <h1 className="display-4">Build trusted products in minutes</h1>
          <p className="lead">Platform of Trust gives access to both rich build environment data and customers.​</p>
          <form>
            <label for="signup">Sign up for an account today</label>
            <div className="form-group row" style={{maxWidth: '20em'}}>
              <input type="email" className="form-control col-sm" id="signup" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <button type="submit" className="btn btn-primary">Sign up</button>            
            </div>
          </form>  
        </div>
      </div>
  
      <main className="container">
        <section className="container row equal">
          <div className="col-sm d-flex">
            <div className="card">
              <div className="card-header"><h3>DOCS</h3></div>
              <div className="card-body">
                <p>Read our API documentation and stepby- step guides</p>
              </div>
              <div className="card-footer">
                <Link to="/">Explore docs >> </Link>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex">
            <div className="card">
              <div className="card-header"><h3>CREATE DATA PRODUCTS</h3></div>
              <div className="card-body">
                <p>Add new data products with integrations for other developers to consume</p>
              </div>
              <div className="card-footer">
                <Link to="/">Learn more >> </Link>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex">
            <div className="card">
              <div className="card-header"><h3>BUILD APPS</h3></div>
              <div className="card-body">
                <p>Build new applications on top of the data products</p>
              </div>
              <div className="card-footer">
                <Link to="/">Learn more >> </Link>
              </div>
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
                <div className="card-header"><h3>USE CASE</h3></div>
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
                <div className="card-header"><h3>USE CASE</h3></div>
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
                <div className="card-header"><h3>USE CASE</h3></div>
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
          <h2>Get started with the Platform of Trust APIs in minutes</h2>
          <p>(käyttää sandbox rajapintoja)</p>
          <div className="container row">
            <div className="col-md-6">
              <div class="bd-clipboard">
                <button class="btn-clipboard" title="" data-original-title="Copy to clipboard">Copy</button>
              </div>
              <figure class="highlight">
                <pre>
                  <code class="language-html" data-lang="html">
                    <span class="nt">&lt;link</span>
                    <br />
                    <span class="na"> rel=</span>
                    <span class="s">"stylesheet"</span> 
                    <span class="na"> href=</span>
                    <br />
                    <span class="s">"https://foo.com.min.css"</span> 
                    <span class="nt">&gt;</span>
                  </code>
                </pre>
              </figure>
            </div>
            <div className="col-md-3">
            <button className="btn btn-primary btn-block">Auth API</button>  
            <button className="btn btn-primary btn-block">Context API</button>  
            <button className="btn btn-primary btn-block">Identity API</button>       
            </div>

          </div>
        </section>
        <section  className="container">
          <h2>Start building today</h2>
          <form>
            <label for="signup-2">Sign up for an account today</label>
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

export default IndexPage
