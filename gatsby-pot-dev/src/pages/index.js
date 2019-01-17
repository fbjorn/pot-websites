import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="Home fullwidth page-content">
      <div className="jumbotron jumbotron-fluid"> 
        <div className="container">
          <h1 className="display-4">Platform of Trust</h1>
          <p className="lead">Platform of Trust gives access to both rich build environment data and customers.​</p>
        </div>
      </div>
  
      <main className="container">
        <section  className="container row">
          <h2>Become part of a growth story and ecosystem of trust</h2>
          <p>Jotain sisältöä nyt holderina, pitkästi ja innostavasti....</p>
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

export default IndexPage
