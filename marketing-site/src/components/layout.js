import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from "@emotion/styled"

import Header from './header'
import Footer from './footer'
import './layout.css'

const Wrapper = styled("div")`
margin: '0 auto',
paddingTop: 0,
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper
          // style={{
          //   margin: `0 auto`,
          //   paddingTop: 0,
          // }}
        >
          {children}
        </Wrapper>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
