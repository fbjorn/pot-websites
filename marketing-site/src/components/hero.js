import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FeaturedNews from './FeaturedNews'

import { variables, colors } from '../Theme.js'

const StyledHero = styled.div`
@media (max-width: 768px) {
  &&& { display: none; }
}
`


const Hero = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        intro: allMarkdownRemark(filter: {
          frontmatter: {
          # path: {eq: "/index#introduction"}, 
          section: {eq: "herohex"}
          }}) {
            totalCount
            edges {
            node {
              id
              html
              frontmatter {
                  title
                  path
                }
              }
            }
          }
      }
    `}
    render={data => (
      <StyledHero className="hero">
        <svg height="0" width="0" viewBox="0 0 500 500" >
          <defs>
              <clipPath id="hex-clip" clipPathUnits="objectBoundingBox">
                <polygon fill="none" points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
              </clipPath>
          </defs>
        </svg>
        <div id="herohex" className="hexagon-wrapper hex-shadow">
          <span className="hex-bg" />
          <span className="hex-content">

            {data.intro.edges.map(({ node }) => (
              <h1 
                key={node.id} 
                className="content-fragment" 
                dangerouslySetInnerHTML={{ __html: node.html }} 
              />
            ))} 

          </span>
        </div>
        <FeaturedNews />
      </StyledHero>
    )}
  />
)

export default Hero