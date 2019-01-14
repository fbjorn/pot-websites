import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import 'bootstrap/dist/css/bootstrap.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="Home fullwidth">
      <div className="jumbotron jumbotron-fluid"> 
        <div className="container">
            <h1 className="display-4">Platform of Trust</h1>
            <p className="lead">Platform of trust helps to create better built environments by providing ​data one can trust on.​</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Get started</a>
        </div>
      </div>
  
      <main className="container fullwidth">
        <h2>Main page content </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ea asperiores cumque autem at, dolorem vitae consequuntur vel officia consectetur? Repudiandae nesciunt sed recusandae dicta error quo neque, velit dolorum.</p>
      </main>
    </section>
  </Layout>
)

export default IndexPage
