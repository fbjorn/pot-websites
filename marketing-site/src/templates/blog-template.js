import React from "react";
import Helmet from "react-helmet";
import Img from 'gatsby-image';
import { graphql, Link } from "gatsby";
import styled from 'styled-components'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/Layout'
import { colors, device, variables } from '../Theme.js'

const StyledBlog = styled.article`
  width: auto;
  max-width: 1440px;
  min-height: 75vh;
  margin: 0 auto;
  @media ${device.laptop} {
  }
`
const StyledHeader = styled(Container)`
  &&& { max-width: ${variables.pageWidth} }
  &&& a { 
    font-size: 1.2rem; 
    text-decoration: none;
  }
  h1 { 
    margin-top: 0.4em; 
    color: white;
  }
`
const StyledMeta = styled.div`
  * { margin-right: 1em; }
  svg { 
    fill: ${colors.ok};
    stroke: ${colors.ok};
    color: ${colors.ok};
  }
`

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <Layout>
      <Helmet title={`Platform of Trust - ${post.frontmatter.title}`} />
      <StyledBlog>
        <StyledHeader>
          <Grid item xs={12}>
            <Link to="/blogs"><FontAwesomeIcon icon={['fal', 'arrow-left']} /> Back to news</Link>
            <h1>{post.frontmatter.title}</h1>
            <StyledMeta>
            <FontAwesomeIcon icon={['fa', 'hexagon']} color="blue" />
              {post.frontmatter.subtype} 
              {post.frontmatter.author} 
              {post.frontmatter.date}
            </StyledMeta>
          </Grid>
        </StyledHeader>
        <div className="blog-post">
          
          {post.frontmatter.image && <Img fluid={post.frontmatter.image.childImageSharp.fluid} />}
          <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </StyledBlog>
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
        subtype
        author
        pictext
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