import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

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
        <div>
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
        </div>
      </StyledNews>
    )}
  />
)

export default FeaturedNews