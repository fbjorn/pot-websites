import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
// import Helmet from "react-helmet"
import SEO from '../components/seo'
import Layout from '../components/layout'

// import HexPic from "../images/cityscape-2008177.jpg"
import HexPic from "../images/oslo-698674.jpg"
// import HexPic from "../images/light-933712.jpg"
// import HexPic from "../images/harbour-city-3928590.jpg"
// import HexPic from "../images/light-painting-2083213.jpg"
// import HexPic from "../images/tunnel-of-light-2080714.jpg"
// import HexPic from "../images/switzerland-2051446.jpg"
// import HexPic from "../images/sparks-265850.jpg"
// import HexPic from "../images/radio-1948002.jpg"
// import HexPic from "../images/hong-kong-1990268.jpg"


const styles = {
  hex: {
    transform: 'rotate(-5deg)'
  }
}

export default function Guides({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout className="container">
      <SEO title="Guides" keywords={[`Platform of trust`, `developers`, 'guides']} />
      <main className="page-content container dark-bg">
        <section className="intro row">
          <div className="side-content col-md-4">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" version="1.1" style={styles.hex}>
              <defs>
                <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                  <image height="1" width="1" preserveAspectRatio="none" xlinkHref={HexPic} />
                </pattern>
              </defs>
              <polygon points="148,183.138438763306 52,183.138438763306 4,100 52,16.8615612366939 148,16.8615612366939 196,99.9999999999999 148,183.138438763306" fill="url(#pattern1)" />
            </svg>
            {/* <svg>
              <defs>
                  <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                      <image height="1" width="1" preserveAspectRatio="none" xlink:href="http://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Gl%C3%BChwendel_brennt_durch.jpg/399px-Gl%C3%BChwendel_brennt_durch.jpg" />
                  </pattern>
              </defs>

              <polygon style="stroke: #999DA3;" fill="url(#pattern1)" points="50 1 95 25 95 75 50 99 5 75 5 25"/>
          </svg> */}
          </div>
          <div className="posts col-md-8">
            <h1>Guides</h1>
          </div>
        </section>
        <section className="blog-posts row">
          <div className="side-content col-md-4">
            
          </div>
          <div className="posts col-md-8">
            {posts
              // .filter(post => post.node.frontmatter.title.length > 0)
              .filter(post => post.node.frontmatter.type === "page")
              .map(({ node: post }) => {
                return (
                  <div className="blog-post-preview" key={post.id}>
                    <h3>
                      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                    </h3>
                    <h6>{post.frontmatter.date}</h6>
                    <p>{post.excerpt}</p>
                    {/* <Link to={post.frontmatter.path}>Read More...</Link> */}
                  </div>
                );
              })}
          </div>
        </section>
      </main>
    </Layout>
  );
}
export const pageQueryGuides = graphql`
  query IndexQueryGuides {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            type
          }
        }
      }
    }
  }
`;