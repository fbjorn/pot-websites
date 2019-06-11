import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import CustomImage from "../components/CustomImage"
import Layout from '../components/layout'
import { colors, device, variables } from '../Theme.js'

export const subtypeColors = {
  blog: `${colors.ok}`,
  news: `${colors.notice}`,
  article: `${colors.alert}`,
}

const StyledSection = styled.article`
  &&& { max-width: ${ variables.pageWidth } }
  margin: 5rem auto;
  background: ${ colors.mainDarker }
`
const StyledBlogs = styled.article`
  padding: 5%;
`
const StyledTools = styled.nav`
  background: ${ colors.mainDarkest }; 
  padding: 0.4rem;
`
const StyledSelector = styled.button`
  background: none;
  border: none;
  outliner: none;
  color: white;
  &.selected { border-bottom: 1px dotted white; }
  svg { margin-right: 0.2em; }
`
const StyledBlogBlock = styled.article`
  display: inline-block;
  width: calc(50% - 2rem);
  padding: 1.5rem;
  margin: 1rem;
  border-top: 2px dotted ${ colors.main }; 
  h2 { font-size: 1.4rem; }

  &:nth-of-type(1) { 
    width: 100%; 
    border-top: none;
    h2 { font-size: 2.4rem; }
  }

  &:nth-child(n+5) {
    width: 100%; 
    .featured-image, .excerpt { display: none }
    .title { order: 2; }
    .meta { order: 1; }
    .post-preview-content { width: 100%; }
    h2 { font-size: 2.4rem; }
  }

  .post-link { 
    text-decoration: none;
  }
  .meta {
    svg { margin-right: 0.4em; }
    span { 
      margin-right: 0.3em; 
      text-transform: capitalize; 
    }
    .divider { 
      display: inline-block;
      transform: translateY(-0.2em);
     }
  }
  .featured-image { 
    display: inline-block;
    width: 30%;
  }
  .post-preview-content { 
    display: inline-flex;
    flex-direction: column;
    width: 70%;
    padding: 1rem 10% 1rem 0;
    vertical-align: top;
    h2 {
      font-weight: 400;
    }
  }
`
const StyledHexImage = styled.div`
  // max-width: 250px;
  // margin-bottom: 2rem;
  // width: 100px;
  // height: 100px;
  transform: translateX(-1rem) rotate(10deg) scale(0.9);
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%); 
`

export default function News({ data }) {
  const { edges: posts } = data.allMdx;
  return (
    <Layout className="blog-posts">
      <StyledSection className="posts-listing">
        <StyledTools className="filters">
          <StyledSelector className="tool-block all selected">
            <span>All</span>
          </StyledSelector>
          <StyledSelector className="tool-block blocks">
            <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors.ok } />
            <span>Blogs</span>
          </StyledSelector>
          <StyledSelector className="tool-block press-releases">
            <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors.alert } />
            <span>Press releases</span>
          </StyledSelector>
          <StyledSelector className="tool-block articles">
            <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors.notice } />
            <span>Articles</span>
          </StyledSelector>
          
        </StyledTools>
        <StyledBlogs className="posts">
          <h1>News</h1>
        
        {posts
          // .filter(post => post.node.frontmatter.title.length > 0)
          // .filter(post => post.node.frontmatter.type === "blog")
          .map(({ node: post }) => {
            return (
              
              <StyledBlogBlock className="post-preview" key={post.id} >
                <div className="featured-image">
                  <Link to={post.frontmatter.path} className="post-link" >
                    <StyledHexImage>
                      <CustomImage filename={post.frontmatter.pic} alt={post.frontmatter.title} />
                    </StyledHexImage>
                  </Link>
                </div>
                <div className="post-preview-content">
                  <div className="title">
                  <Link to={post.frontmatter.path} className="post-link" >
                      <h2>{post.frontmatter.title}</h2>
                  </Link>
                  </div>
                  <div className="meta">
                    <p>
                      <FontAwesomeIcon icon={['fa', 'hexagon']} color={ subtypeColors[post.frontmatter.subtype] } />
                      {post.frontmatter.subtype && (
                        <>
                        <span>{post.frontmatter.subtype}</span>
                        <span className="divider">.</span>
                        </>
                      )}
                      {post.frontmatter.author && (
                        <>
                      <span>{post.frontmatter.author}</span>
                      <span className="divider">.</span>
                        </>
                      )}
                      <span>{post.frontmatter.date}</span>
                    </p>
                  </div>
                  <div className="excerpt">
                    <Link to={post.frontmatter.path} className="post-link" >
                      <p>{post.excerpt}</p>
                    </Link>
                  </div>
                </div>
              </StyledBlogBlock>

            );
          })}
        </StyledBlogs>
      </StyledSection>
    </Layout>
  );
}
export const pageQuery = graphql`
  query newsQuery {
    allMdx(
      filter: { frontmatter: { type: { eq: "news" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
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
            subtype
            author
            pic
          }
        }
      }
    }
  }
`;