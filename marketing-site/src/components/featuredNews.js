import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { variables, colors } from '../Theme.js'

const StyledNews = styled.div`
@media (max-width: 768px) {
  &&& { display: none; }
}
`

const FeaturedNews = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        news: allMarkdownRemark(
          limit: 3
          filter: {
            frontmatter: {
              type: {eq: "blog"}
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
                date(formatString: "dddd DD MMMM YYYY")
                tags
                status
                type
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
      <StyledNews className="featured-news hexagon-wrapper">
        <span className="hex-bg"></span>
        <div className="hex-content">
          <h2>Latest News</h2>

          {data.news.edges.map(({ node }) => (
            <div key={node.id}>
              {/* <h1>{node.frontmatter.title}</h1> */}
              {/* <p className="content-fragment" dangerouslySetInnerHTML={{ __html: node.html }} /> */}

              <p className="meta">
                <span className="icon icon-blog">
                  <FontAwesomeIcon icon="hexagon" />
                </span>
                <span className="type">{ node.frontmatter.type }</span>
                <span className="date">{ node.frontmatter.date }</span>
              </p>
              <p className="title-excerpt">
                { node.frontmatter.title }
              </p>

            </div>
          ))}

          <Link to="/" className="go-to-link">Go to news</Link>
        </div>
      </StyledNews>
    )}
  />
)

export default FeaturedNews