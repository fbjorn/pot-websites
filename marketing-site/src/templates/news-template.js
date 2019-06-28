// import React, { useState, component } from "react"
import React from "react"
import Helmet from "react-helmet"
import Img from 'gatsby-image'
import { graphql, Link } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Disqus from 'gatsby-plugin-disqus'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CustomImage from '../components/CustomImage'
import Layout from '../components/layout'
import { colors, device, variables } from '../Theme.js'

const StyledBlog = styled.article`
  &&& { max-width: ${ variables.pageWidthNarrow } }
  margin: 0 auto;
  padding: 1rem;
  @media ${device.laptop} {
  }
`
const StyledHeader = styled.header`
  margin-bottom: 1rem;
  &&& { max-width: ${variables.pageWidthNarrow} }
  // .row {
  //   margin: 0 1rem;
  //   @media (min-width: 1272px)  { margin: 0 -15px; }
  // }
  &&& a { 
    font-size: 1.2rem; 
    text-decoration: none;
  }
  h1 { 
    margin-top: 0.4em; 
    color: white;
    text-align: left;
    width: 100%;
  }
`
const StyledMeta = styled.div`
  // display: block;
  text-transform: capitalize;
  * { margin-right: 0.5em; }
`
const StyledPost = styled.div`
  &&& { max-width: ${variables.pageWidth} }
  position: relative;
  background: ${colors.mainDarker};
  p { line-height: 1.5; }
  a:link { text-decoration: underline dotted }
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
const StyledBlogFooter = styled.div`
  &&& { max-width: ${variables.pageWidth} }
  margin: 0 auto;
  padding: 2rem 0;
  background: ${colors.mainDarker};
  border-top: 2px dotted white;
  // .col { border: 1px solid; }
  .col:nth-of-type(2) { text-align: center; }
  .col:nth-of-type(3) { text-align: right; }
  p { 
    padding-top: 0.5em;
    a { color: ${colors.main}; }
  }
  svg { 
    vertical-align: middle; 
    // &.fa-hexagon { transform: rotate(90deg); }
    &.fa-arrow-left { margin-right: 1rem; }
    &.fa-arrow-right { margin-left: 1rem; }
  }
`
const StyledCustomImage = styled.div`
  // display: inline-block;
  max-width: 150px;
  margin-bottom: 2rem;
  transform: translateX(-1rem) rotate(10deg) scale(0.9);
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%); 
  .gatsby-image-wrapper { transform: rotate(-10deg); }
`
const StyledDisqus = styled.div`
  background: ${colors.mainDarker};
  padding: 1rem 7%;
`
// const StyledPad = styled.div`
//   margin: 1rem;
// `

export default function Template({
  data, location, pageContext 
}) {
  const post = data.mdx; 
  const { next, prev } = pageContext

  return (
    <Layout pathname={location.pathname}>
      <Helmet title={`Platform of Trust - ${post.frontmatter.title}`} />
      <StyledBlog>
        <StyledHeader className="container">
          <div className="row">
            <Link to="/news"><FontAwesomeIcon icon={['fal', 'arrow-left']} /> Back to news</Link>
            <h1>{post.frontmatter.title}</h1>
            <StyledMeta>
              <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors[post.frontmatter.subtype] } />
              <span>{post.frontmatter.subtype}</span>
              {post.frontmatter.subtype === "blog" && (<span>{post.frontmatter.author}</span>)}
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
            <div className="blog-post-content col-10 offset-1 pt-5" > 
              <MDXRenderer >{data.mdx.code.body}</MDXRenderer>
            </div>
          </div>
        </StyledPost>
        <StyledPostFooter className="container">
          {post.frontmatter.author && (<div className="row">
            {post.frontmatter.subtype === "blog" && (<div className="col-1 offset-1">
            <StyledCustomImage>
                <CustomImage filename={post.frontmatter.authorpic} alt={post.frontmatter.author} />
              </StyledCustomImage>
            </div>)}
            <div className={`col-10 ${post.frontmatter.subtype !== "blog" ? "offset-1" : "" }`} >
              <p className="pt-md-5">
                {/* <FontAwesomeIcon icon={['fa', 'hexagon']} color="white" size="4x" /> */}
                Author {post.frontmatter.author} 
              </p>
            </div>
          </div>)}
          <div className="row">
            <div className="col-10 offset-1">
              <p>
                <FontAwesomeIcon icon={['fal', 'share-alt']} color="white" size="1x" />
                Come on, share this piece. You know you want to. 
                <FontAwesomeIcon icon={['fal', 'arrow-right']} color="white" size="1x" />

                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.platformoftrust.net${post.frontmatter.path}`} target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'facebook-square']} color="white" size="1x" />
                </a> 
                <a href={`https://twitter.com/intent/tweet/?text=${post.frontmatter.title}&url=https://www.platformoftrust.net${post.frontmatter.path}%2F&via=PlatformOfTrust`}  target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'twitter-square']} color="white" size="1x" />
                </a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.platformoftrust.net${post.frontmatter.path}&title=${post.frontmatter.title}&source=${post.frontmatter.title}`}target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} color="white" size="1x" />
                </a>
              </p>
            </div>
          </div>
        </StyledPostFooter>
        <StyledDisqus>
          {post.frontmatter.subtype === "blog" &&(
          <Disqus 
            identifier={location.pathname}
            title={post.frontmatter.title}
            url={location.href}
          />
          )}
        </StyledDisqus>
        <StyledBlogFooter>
          <div className="row">
            <div className="col col-3 offset-1">
              <p>
                {prev && (
                <Link to={prev.frontmatter.path}>
                  <FontAwesomeIcon icon={['fal', 'arrow-left']} color="white" size="1x" />
                  Previous
                  {/* {prev.frontmatter.title} */}
                </Link>
                )}
              </p>
            </div>

            <div className="col col-4">
              <p>
                <Link to="/news">
                  Back to news
                </Link>
              </p>
            </div>

            <div className="col col-3">
              <p>
                {next && (
                <Link to={next.frontmatter.path}>
                  
                  Next 
                  {/* {next.frontmatter.title} */}
                  <FontAwesomeIcon icon={['fal', 'arrow-right']} color="white" size="1x" />
                </Link>
                )}
              </p>
            </div>
          </div>
        </StyledBlogFooter>
      </StyledBlog>
    </Layout>
  );
}

export const pageQuery = graphql`
  query newsPostByPath($path: String!) {
    mdx(
        frontmatter: { path: { eq: $path } }
    ) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtype
        author
        authorpic
        pictext
        image {
          childImageSharp { 
            fluid(maxWidth: 1440) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`
;