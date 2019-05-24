import React from "react";
import Helmet from "react-helmet";
import Img from 'gatsby-image';
import { graphql, Link } from "gatsby";

import Layout from '../components/Layout'

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <Layout>
        <Link to="/blogs">&larr; Back to Blogs</Link>
        <article className="blog-post-container">
            <Helmet title={`CodeStack - ${post.frontmatter.title}`} />
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                {post.frontmatter.image && <Img fluid={post.frontmatter.image.childImageSharp.fluid} />}
                <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </article>
    </Layout>
  );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(
            frontmatter: { path: { eq: $path } }
        ) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                image {
                    childImageSharp {
                        
                        fluid(maxWidth: 1440) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
;