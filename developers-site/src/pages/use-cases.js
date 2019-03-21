import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
// import Helmet from "react-helmet"

import Layout from '../components/layout'

// import '../styles/blog-listing.css'

export default function UseCases({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout className="use-cases">
      <section className="use-case">
        {posts
          // .filter(post => post.node.frontmatter.title.length > 0)
          // .filter(post => post.node.frontmatter.type === "usecase")
          .map(({ node: post }) => {
            return (
                <div className="usecase-preview card" key={post.id}>
                  <h1 className="card-header" >
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  </h1>
                  <div className="card-body">
                  <h2>{post.frontmatter.date}</h2>
                  <p>{post.excerpt}</p>
                  <Link to={post.frontmatter.path}>Read More...</Link>
                  </div>
                </div>
            );
          })}
        </section>
    </Layout>
  );
}
export const pageQuery = graphql`
  query UseCasesQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "usecase" } } }
    ) {
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