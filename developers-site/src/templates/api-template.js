import React from "react";
// import Helmet from "react-helmet";
import Img from 'gatsby-image';
import { graphql } from "gatsby";
import SEO from '../components/seo'
import styled from 'styled-components'

import Layout from '../components/layout'

const StyledApiProfile = styled.section`
  // border: 10px solid red;
`

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <Layout>
      <SEO title={`${post.frontmatter.title}`}  keywords={[`Platform of trust`, `developers`, 'api']} />
      <StyledApiProfile>
        <header>
          <h1>{post.frontmatter.title}</h1>
        </header>
        <div
          className="api-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
          />
        
      </StyledApiProfile>
    </Layout>
  );
}

export const pageQuery = graphql`
    query apis($path: String!) {
        markdownRemark(frontmatter: { 
          path: { eq: $path } 
        }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                # image {
                #     childImageSharp {
                #         resize(width: 1500, height: 1500) {
                #             src
                #         }
                #         fluid(maxWidth: 786) {
                #             ...GatsbyImageSharpFluid
                #         }
                #     }
                # }
            }
        }
    }
`
;