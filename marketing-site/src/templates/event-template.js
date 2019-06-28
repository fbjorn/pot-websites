import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import CustomImage from "../components/CustomImage"
import { colors, device, variables } from '../Theme.js'

const StyledBlog = styled.article`
  &&& { max-width: ${ variables.pageWidthNarrow } }
  margin: 0 auto;
  padding: 1rem; 
  @media ${device.laptop} {
  }
  hr {border-top: 2px dotted ${colors.light};}
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
    text-align: left;
    width: 100%;
  }
`
const StyledPost = styled.div`
  &&& { max-width: ${variables.pageWidth} }
  position: relative;
  padding-top: 1rem;
  background: ${colors.mainDarker};
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
  padding: 2rem 0;
  background: ${colors.mainDarker};
  border-top: 2px dotted white;
  // .col { border: 1px solid; }
  .col:nth-of-type(2) { text-align: center; }
  .col:nth-of-type(3) { text-align: right; }
  p { color: white; }
  svg { 
    // margin-right: 1rem;
    vertical-align: middle; 
    // &.fa-hexagon { transform: rotate(90deg); }
    // &.fa-arrow-right { margin-left: 1rem; }
  }
`
const StyledPostContent = styled.section`
  .event { display: flex; flex-direction: column;  }
  .left { flex: 1; order: 2; padding-right: 1rem; }
  .right { flex: 2; order: 1; }
  @media ${device.laptop} {
    .event { flex-direction: row; }
    .left { flex: 1; order: 1; }
    .right { 
      flex: 2; 
      order: 2; 
      transform: translateY(-20rem);
      margin-bottom: -20rem;
    }
  }
`
const StyledCustomImage = styled.div`
  max-width: 350px;
  margin-bottom: 0rem;
  transform: translateX(-1rem) rotate(10deg) scale(1);
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%); 
`

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
            <div className="col-12">
              <Link to="/events"><FontAwesomeIcon icon={['fal', 'arrow-left']} /> Back to events</Link>
            </div>
          </div>
        </StyledHeader>
        <StyledPost className="container">
          {/* <div className="row">
            {post.frontmatter.image && <Img fluid={post.frontmatter.image.childImageSharp.fluid} className="col-12" />}
          </div>
          <StyledCaption className="row">
            <p>{post.frontmatter.pictext}</p> 
          </StyledCaption> */}
          <div className="row">
            <div className="col-11 offset-1">
              <h1>{post.frontmatter.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3 offset-1">
              <StyledCustomImage>
                <CustomImage filename={post.frontmatter.pic} alt="Platform of Trust event illustration" />
              </StyledCustomImage>
            </div>
          </div>
          <div className="row">
            <StyledPostContent className="blog-post-content col-10 offset-1 pt-5">
              <MDXRenderer >{data.mdx.code.body}</MDXRenderer>
            </StyledPostContent>
          </div>
        </StyledPost>
        <StyledPostFooter className="container">
          
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
                <Link to="/events">
                  Back to events
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
  query eventPostByPath($path: String!) {
    mdx(
        frontmatter: { path: { eq: $path } }
    ) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        shorttitle
        potevent
        time
        place
        eventlink
        subtype
        pictext
        pic
        lang
        status
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