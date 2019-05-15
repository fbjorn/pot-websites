import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import { icon, library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHexagon } from '@fortawesome/pro-solid-svg-icons'
import { faTerminal } from '@fortawesome/pro-solid-svg-icons'
import { faPiggyBank } from '@fortawesome/pro-light-svg-icons'
import { faDraftingCompass } from '@fortawesome/pro-solid-svg-icons'
import { faBadge } from '@fortawesome/pro-light-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'

import Header from './header'
import Footer from './footer'
import './layout.css'

library.add(fal, faHexagon)
// icon({prefix: 'fal', iconName: 'draftingCompass'})

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
