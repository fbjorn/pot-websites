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
  &&& { max-width: ${ variables.pageWidthNarrow } }
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
  .pagination-number {
    margin: 0 0.5em;
    padding: 0.5em;
    display: inline-block;
    width: 2.0em;
    height: 2.0em;
    background: ${colors.main};
    border-radius: 50%;
    &.current {
      font-weight: 900;
      background: ${colors.mainDark};
      border: 2px dotted ${colors.light};
      padding: 0.6em;
      width: 2.4em;
      height: 2.4em;
    }
  }
`

let items = null

export default class newsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [ 'blog', 'article', 'press-release' ],
      selected: "all",
      showFooter: true,
    }
  }

  handleFiltering = filter => {
    filter === "all" ? this.setState({ filters: ['blog', 'article', 'press-release'] }) : this.setState({ filters: [filter] })
    this.setState({ selected: [filter] })
  }

  render() {
    const { filters, selected, showFooter } = this.state
    const posts = this.props.data.allMdx.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/news" : `/news/${(currentPage - 1).toString()}`
    const nextPage = `/news/${(currentPage + 1).toString()}`
    const limitNews = this.props.pageContext.limit

    // const numPages = this.props.pageContext.numPages
    // const currentPage = this.props.pageContext.currentPage
    // const nextPage = this.props.pageContext.currentPage + 1
    // const prevPage = currentPage === 2 ? "" : this.props.pageContext.currentPage - 1
    // console.log(this.props)
    return (
      <Layout className="blog-posts">
      <StyledPad>
        <StyledSection className="posts-listing">
          <StyledTools className="filters">
            <StyledSelector className={`tool-block all ${ selected[0] === "all" ? "selected-filter" : "" }`}>
              <span onClick={() => this.handleFiltering("all")}>All</span>
            </StyledSelector>
            <StyledSelector className={`tool-block blog ${ selected[0] === "blog" ? "selected-filter" : "" }`}>
              <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors.ok } />
              <span onClick={() => this.handleFiltering("blog")}>Blogs</span>
            </StyledSelector>
            <StyledSelector className={`tool-block press-release ${ selected[0] === "press-release" ? "selected-filter" : "" }`}>
              <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors.alert } />
              <span onClick={() => this.handleFiltering("press-release")}>Press releases</span>
            </StyledSelector>
            <StyledSelector className={`tool-block article ${ selected[0] === "article" ? "selected-filter" : "" }`}>
              <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors.notice } />
              <span onClick={() => this.handleFiltering("article")}>Articles</span>
            </StyledSelector>
            
          </StyledTools>
          <StyledBlogs className="posts">
            <h1>News</h1>
          {posts
            // .filter(post => post.node.frontmatter.title.length > 0)
            // .filter(post => post.node.frontmatter.subtype === "article")
            .filter(post => filters.includes(post.node.frontmatter.subtype))
            .map(( { node: post }, index ) => {
              // console.log('Index on', index)
              // this.setState({items: index})
              items = index + 1
              return (
                <StyledBlogBlock className="post-preview" key={post.id} >
                  {/* {items} */}
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

          {(numPages > 1 || !isFirst ) && (
          <StyledBlogFooter>
            <div className="row">
              <div className="col col-3 offset-1">
                {!isFirst  && (
                  <p>
                    <Link to={prevPage}>
                      <FontAwesomeIcon icon={['fal', 'arrow-left']} color="white" size="1x" />
                      Previous page 
                    </Link>
                  </p>
                )}
              </div>

              <div className="col col-4">
                
                {Array.from({ length: numPages }, (_, i) => (
                  <Link 
                    className={`pagination-number ${(i + 1) === currentPage ? "current" : ""}`}
                    key={`pagination-number${i + 1}`} 
                    to={`/news/${i === 0 ? "" : i + 1}`}
                  >
                    {i + 1}
                  </Link>
                ))}
              </div>

              <div className="col col-3">
                {!isLast && (
                <p>
                  <Link to={nextPage}>
                    More news 
                    <FontAwesomeIcon icon={['fal', 'arrow-right']} color="white" size="1x" />
                  </Link>
                </p>
                )}
              </div>
            </div>
          </StyledBlogFooter>
          )}
        </StyledSection>
      </StyledPad>
    </Layout>
    )
  }
}

export const newsListQuery = graphql`
  query newsListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { type: { eq: "news" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
`