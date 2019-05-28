import React from "react";
import Helmet from "react-helmet";
import Img from 'gatsby-image';
import { graphql, Link } from "gatsby";
import styled from 'styled-components'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
const StyledHeader = styled.header`
  margin-bottom: 1rem;
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
  text-transform: capitalize;
  * { margin-right: 0.5em; }
  svg { 
    fill: ${colors.ok};
    stroke: ${colors.ok};
    color: ${colors.ok};
  }
`
const StyledPost = styled.div`
  &&& { max-width: ${variables.pageWidth} }
  position: relative;
  background: ${colors.mainDarker};
`
const StyledCaption = styled.div`
width: 100%
position: absolute;
transform: translateY(-100%);
background: linear-gradient(to bottom, rgba(0,0,0,0), ${colors.mainDarker} 100%);
padding: 4rem 10% 0;
justify-content: flex-end;
p {
  max-width: 30%;
  border-top: 2px dotted white;
  padding-top: 1em;
  font-size: 1rem;
  color: white;
}
`
const StyledPostFooter = styled.div`
  &&& { max-width: ${variables.pageWidth} }
  padding: 2rem 0;
  background: ${colors.mainDarker};
  p { color: white; }
  svg { 
    margin-right: 1rem;
    vertical-align: middle; 
    &.fa-hexagon { transform: rotate(90deg); }
    &.fa-arrow-right { margin-left: 1rem; }
  }
`

export default function Template({
  data, location 
}) {
  const post = data.markdownRemark; 
  return (
    <Layout pathname={location.pathname}>
      <Helmet title={`Platform of Trust - ${post.frontmatter.title}`} />
      <StyledBlog>
        <StyledHeader className="container">
          <div className="row">
            <Link to="/blogs"><FontAwesomeIcon icon={['fal', 'arrow-left']} /> Back to news</Link>
            <h1>{post.frontmatter.title}</h1>
            <StyledMeta>
            <FontAwesomeIcon icon={['fa', 'hexagon']} color="blue" />
              <span>{post.frontmatter.subtype}</span>
              <span>{post.frontmatter.author}</span>
              <span>{post.frontmatter.date}</span>
            </StyledMeta>
          </div>
        </StyledHeader>
        <StyledPost className="container">
          <div className="row">
            {post.frontmatter.image && <Img fluid={post.frontmatter.image.childImageSharp.fluid} className="col-12" />}
          </div>
          <StyledCaption className="row">
            <p>{post.frontmatter.pictext}</p> 
          </StyledCaption>
          <div className="row">
            <div
            className="blog-post-content col-10 offset-1 pt-5"
            dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </StyledPost>
        <StyledPostFooter className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <p>
                <FontAwesomeIcon icon={['fa', 'hexagon']} color="white" size="4x" />
                Author: {post.frontmatter.author} 
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-10 offset-1">
              <p>
                <FontAwesomeIcon icon={['fal', 'share-alt']} color="white" size="1x" />
                Come on, share this piece. You know you want to. 
                <FontAwesomeIcon icon={['fal', 'arrow-right']} color="white" size="1x" />
                <FontAwesomeIcon icon={['fab', 'facebook-square']} color="white" size="1x" />
                <div>
<Link
  href={`https://twitter.com/intent/tweet/?text=${post.frontmatter.title}
  &url=https://mariohernandez.io${post.frontmatter.path}%2F&via=imariohernandez`}>
  // Optional icon
  <span>div on Twitter</span>
</Link>
</div>
              </p>
            </div>
          </div>
        </StyledPostFooter>
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