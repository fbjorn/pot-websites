import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
// import { Global, css } from "@emotion/core"
import styled from '@emotion/styled'

import Helmet from 'react-helmet'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHexagon } from '@fortawesome/pro-solid-svg-icons'
// import { faTerminal } from '@fortawesome/pro-solid-svg-icons'
// import { faPiggyBank } from '@fortawesome/pro-light-svg-icons'
// import { faDraftingCompass } from '@fortawesome/pro-solid-svg-icons'
// import { faBadge } from '@fortawesome/pro-light-svg-icons'
// import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Header from './Header'
import Footer from './Footer'
import './Layout.css'

library.add( fal, fab, faHexagon )
// icon({prefix: 'fal', iconName: 'draftingCompass'})

const Wrapper = styled("div")`
margin: '0 auto',
paddingTop: 0,
`

const Layout = ({ pathname, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content={`${data.site.siteMetadata.siteUrl}${pathname}twitter-card.jpg`}
          />
        </Helmet>
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
