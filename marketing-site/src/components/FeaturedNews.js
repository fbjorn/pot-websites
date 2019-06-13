import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import HexSvg from '../images/hex.svg'

const StyledNews = styled.div`
  position: relative;
  background: url(${HexSvg});
  background-size: cover; 
  margin-top: -58%;
  width: 66.6%;
  margin-left: 33.333%;
  padding-top: 77%;
  z-index: 0;
  svg { fill: blue; }
  @media (max-width: 768px) {
  }
`
const StyledContent = styled.div`
  // display: none;
  position: absolute;
  top: 25%;
  width: calc(50% - 2rem);
  left: calc(50% + 1rem);
  a:link { text-decoration: none; }
  a.go-to-link { text-decoration: 2px dotted; }
  span {
    font-size: 1rem;
  }
  .meta {
    font-size: 80%;
    margin-bottom: 0.2em;
    .type, .date {
      text-transform: capitalize;
      margin: 0 0.2em;
      font-weight: 500;
    }
  }
  .icon {
    margin-right: 0.4em;
    font-size: 0.8rem;
  }
  .title-excerpt {
    padding-bottom: 0.4em;
    border-bottom: 1px dotted white;
    font-size: 1.2rem;
    font-weight: 300;
  }  
  @media (max-width: 768px) {
    // &&& { display: none; }
  }
`
const FeaturedNews = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        news: allMarkdownRemark(
          limit: 2
          filter: {
            frontmatter: {
              type: {eq: "news"}
              status: {eq: "published"}
            }
          },
          sort: {
            fields: [frontmatter___date]
            order: DESC
          }
        
        ) {
          totalCount
          edges {
            node {
              id
              html
              frontmatter {
                title
                path
                date(formatString: "dddd DD MMMM YYYY")
                tags
                status
                type
                subtype
              }
              excerpt(
                format: PLAIN
                pruneLength: 20
                truncate: true
              )
            }
          }
        }
      }
    `}
    render={data => (
      <StyledNews>
        <StyledContent>
          <h2>Latest News</h2>

          {data.news.edges.map(({ node }) => (
            <Link to={ node.frontmatter.path } key={node.id}>
              <div>
                <p className="meta">
                  <span className="icon icon-blog">
                    <FontAwesomeIcon icon="hexagon" />
                    {/* <FontAwesomeIcon icon={['fas', 'hexagon']} size="1x" /> */}
                  </span>
                  <span className="type">{ node.frontmatter.type }</span>
                  <span className="date">{ node.frontmatter.date }</span>
                </p>
                <p className="title-excerpt">
                  { node.frontmatter.title }
                </p>
              </div>
            </Link>
          ))}

          <Link to="/" className="go-to-link">Go to news</Link>
        </StyledContent>
      </StyledNews>
    )}
  />
)

export default FeaturedNews