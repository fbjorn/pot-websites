import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

import Helmet from 'react-helmet'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHexagon } from '@fortawesome/pro-solid-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Header from './Header'
import Footer from './Footer'
import BgImage from '../images/bg-image.svg'
// import './Layout.css'

import { colors } from '../Theme.js'

library.add( fal, fab, faHexagon )
// icon({prefix: 'fal', iconName: 'draftingCompass'})

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans|Fira+Mono:300,400,500,600,700');

  /* SHARED PROPERTIES */
  p, h1, h2, h3, h4, h5, h6 {margin-bottom: 0.5em;}
  h1, h2, h3, h4, h5, h6 {line-height: 1.05em;}

  /* SPECIFIC PROPERTIES */
  // p {font-weight: 400; font-size: 27px; line-height: 1.125em;}
  h1 {font-weight: 400; font-size: 63px; letter-spacing: 0.01em;}
  h2 {font-weight: 400; font-size: 48px; letter-spacing: 0.01em;}
  h3 {font-weight: 300; font-size: 32px; letter-spacing: 0.02em;}
  h4 {font-weight: 500; font-size: 30px; letter-spacing: 0.02em;}
  h5 {font-weight: 600; font-size: 27px; letter-spacing: 0.03em;}
  h6 {font-weight: 500; font-size: 24px; letter-spacing: 0.03em;}
  /* OVERRIDES */
  &&& { body { 
    font-family: 'Fira+Sans', sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }}
  &&& { a { color: ${colors.light}; }}
`
;

const StyledSite = styled.section`
  background-color: #a897fe;
  background-image: url("${BgImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #f0f0f0;
`

const StyledWrapper = styled.section`
  margin: '0 auto';
  padding-top: 0,
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
      <StyledSite>
        <GlobalStyle />
        <Helmet title={data.site.siteMetadata.title}>}
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledWrapper>
          {children}
        </StyledWrapper>
        <Footer />
      </StyledSite>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
