import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import CustomImage from "../components/CustomImage"
import CustomSquareButton from "../components/CustomSquareButton"
import Layout from '../components/layout'
import { colors, device, variables } from '../Theme.js'

export const subtypeColors = {
  blog: `${colors.ok}`,
  news: `${colors.notice}`,
  article: `${colors.alert}`,
  business: `${colors.success}`,
  technical:`${colors.mainLightest}`,
}
const StyledSection = styled.article`
  &&& { max-width: ${ variables.pageWidthNarrow } }
  margin: 5rem auto;
  // background: ${ colors.mainDarker }
`
const StyledBlogs = styled.article`
  padding: 5%;
`
const StyledTools = styled.nav`
  // background: ${ colors.mainDarkest }; 
  padding: 0.4rem;
`
const StyledSelector = styled.button`
  background: none;
  border: none;
  outline: none;
  color: white;
  &.selected-filter { 
    span { border-bottom: 1px dotted white; }
  }
  &:focus { outline: none; }
  svg { margin-right: 0.2em; }
`
const StyledBlogBlock = styled.article`
  display: inline-block;
  width: width: 100%; 
  @media ${device.laptop} { width: calc(50% - 2rem); }
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
  transform: translateX(-1rem) rotate(10deg) scale(0.9);
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%); 
`
const StyledPad = styled.div`
  margin: 1rem;
`

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [ 'blog', 'article', 'press-release', 'business', 'technical' ],
      selected: "all",
      showFooter: true,
    }
  }

  handleFiltering = filter => {
    filter === "all" ? this.setState({ filters: ['blog', 'article', 'press-release', 'business', 'technical'] }) : this.setState({ filters: [filter] })
    this.setState({ selected: [filter] })
  }

  render() {
    const { filters, selected  } = this.state
    const data = this.props.data.allMdx
    const { edges: posts } = this.props.data.allMdx;
    console.log(data)
    return (
      <Layout className="blog-posts">
        <StyledPad>
          <StyledSection className="posts-listing">
            <StyledTools className="filters">
              <StyledSelector className={`tool-block all ${ selected[0] === "all" ? "selected-filter" : "" }`}>
                <span onClick={() => this.handleFiltering("all")}>All</span>
              </StyledSelector>
              {/* <StyledSelector className={`tool-block blog ${ selected[0] === "blog" ? "selected-filter" : "" }`}>
                <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors.ok } />
                <span onClick={() => this.handleFiltering("blog")}>Blogs</span>
              </StyledSelector>
              <StyledSelector className={`tool-block press-release ${ selected[0] === "press-release" ? "selected-filter" : "" }`}>
                <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors.alert } />
                <span onClick={() => this.handleFiltering("press-release")}>Press releases</span>
              </StyledSelector> */}
              <StyledSelector className={`tool-block business ${ selected[0] === "business" ? "selected-filter" : "" }`}>
                <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors.success } />
                <span onClick={() => this.handleFiltering("business")}>Business</span>
              </StyledSelector>
              <StyledSelector className={`tool-block article ${ selected[0] === "technical" ? "selected-filter" : "" }`}>
                <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors.mainLightest } />
                <span onClick={() => this.handleFiltering("technical")}>Technical</span>
              </StyledSelector>
            </StyledTools>
            <StyledBlogs className="posts">
              <h1>Events</h1>
            
            {posts
              // .filter(post => post.node.frontmatter.title.length > 0)
              // .filter(post => post.node.frontmatter.type === "blog")
              .filter(post => filters.includes(post.node.frontmatter.subtype))
              .map(({ node: post }) => {
                return (
                  
                  <StyledBlogBlock className="post-preview" key={post.id} >
                    <div className="featured-image">
                      {post.frontmatter.potevent && (
                      <Link to={post.frontmatter.path} className="post-link" >
                        <StyledHexImage>
                          <CustomImage filename={post.frontmatter.pic} alt={post.frontmatter.title} />
                        </StyledHexImage>
                      </Link>
                      )}
                      {!post.frontmatter.potevent && (
                        <StyledHexImage>
                          <a 
                            href={post.frontmatter.eventlink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <CustomImage filename={post.frontmatter.pic} alt={post.frontmatter.title} />
                          </a>
                        </StyledHexImage>
                      )}
                    </div>
                    <div className="post-preview-content">
                      <div className="title">
                      {post.frontmatter.potevent && (
                        <Link to={post.frontmatter.path} className="post-link" >
                          <h2>{post.frontmatter.title}</h2>
                        </Link>
                      )}
                      {!post.frontmatter.potevent && (
                        <a 
                          href={post.frontmatter.eventlink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h2>{post.frontmatter.title}</h2>
                        </a>
                      )}
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
                          {post.frontmatter.time && (
                            <>
                            <span>{post.frontmatter.time}</span>
                            <span className="divider">.</span>
                            </>
                          )}
                          {post.frontmatter.place && (
                            <span>{post.frontmatter.place}</span>
                          )}
                        </p>
                      </div>
                      <div className="event-link">
                        {post.frontmatter.potevent && (
                          <Link to={post.frontmatter.path}>
                            <CustomSquareButton label="Read more" />
                          </Link>
                        )}
                        {!post.frontmatter.potevent && (
                          <>
                          <MDXRenderer >
                            {post.code.body}
                          </MDXRenderer>
                          <a 
                            href={post.frontmatter.eventlink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          <CustomSquareButton label="Visit event page" />
                          </a>
                        </>
                        )}
                      </div>
                    </div>
                  </StyledBlogBlock>

                );
              })}
            </StyledBlogs>
          </StyledSection>
        </StyledPad>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query eventsQuery {
    allMdx(
      filter: { frontmatter: { type: { eq: "event" } } }
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
            potevent
            type
            subtype 
            time
            place
            eventlink
            pic
          }
          code {
            body
          }
        }
      }
    }
  }
`;