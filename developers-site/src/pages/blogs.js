import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
// import Helmet from "react-helmet"
import SEO from '../components/seo'

import Layout from '../components/layout'

import '../styles/blog-listing.css'

export default function Blogs({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout className="blog-posts">
     <SEO title="Blogs" keywords={[`Platform of trust`, `developers`, 'blogs']} />
      <section className="posts">
        {posts
          // .filter(post => post.node.frontmatter.title.length > 0)
          .filter(post => post.node.frontmatter.type === "blog")
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
                <Link to={post.frontmatter.path}>Read More...</Link>
                <hr />
              </div>
            );
          })}
        </section>
    </Layout>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
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