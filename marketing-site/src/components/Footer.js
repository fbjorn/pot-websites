import React from 'react'
import Link from "gatsby-link"
import styled from 'styled-components'

import Logo from "../images/platformoftrust-wide-white-rgb.svg"
import LogoSymbol from "../images/logo-symbol.svg"
import Facebook from "../images/facebook-square-brands.svg"
import Twitter from "../images/twitter-square-brands.svg"
import Github from "../images/github-square-brands.svg"
import Linkedin from "../images/linkedin-square-brands.svg"
import { colors, device } from '../Theme.js'

const StyledFooter = styled.footer`
  background: ${colors.mainDark};
  clip-path: url("#footerPathSVG");
  div { padding: 0 0.5rem 0 0.5rem; }
  .logo-footer { 
    opacity: 0.5;
    svg { width: 100%; }
  }
  .logo-mobile { display: block; }
  .logo-mobile { @media ${device.laptop} { display: none; } }
  .logo-desk { display: none; }
  .logo-desk { @media ${device.laptop} { display: block; } }
  .sitemap { display: none; }
  .sitemap { @media ${device.laptop} { display: block; } }
  .footer-contact { 
    opacity: 0.5;
    text-align: left;
    font-size: 0.6rem; 
    h5 { font-size: 0.8rem; }
  }
`

const Footer = () => (
  <StyledFooter className="page-footer footer" >

    <svg width="0" height="0">
      <clipPath id="footerPathSVG" clipPathUnits="objectBoundingBox">
        <polygon points="0, 1, 0.1, 0, 0.90, 0, 1, 1"/>
      </clipPath>
    </svg>

    <div className="container-fluid text-center text-md-left">
      <div className="row">
      
        <div className="footer-logo col-2 offset-1">
          <img src={Logo} className="logo-footer logo-desk" alt="Logo" />
          <img src={LogoSymbol} className="logo-footer logo-mobile" alt="Logo" />
        </div>

        <div className="footer-contact col-4 col-lg-2 mt-md-0 mt-1">
          <h5 className="mb-md-3">Platform of Trust</h5>
          <p>Business ID FI29800052</p>
          {/* <p><a href="https://www.tilaajavastuu.fi/en/data-protection/">Data protection statement</a></p>*/}
        </div> 

        <div className="sitemap col-md-1">
          <Link to="/pricing">Pricing</Link><br />
          <Link to="/cases">Cases</Link><br />
          <Link to="/news">News</Link><br />
        </div>

        <div className="sitemap col-md-1">
          <Link to="/events">Events</Link><br />
          <Link to="/about">About</Link><br />
          <Link to="/contact">Contact</Link><br />
        </div>

        <div className="sitemap col-md-1">
          <Link to="/faq">FAQ</Link><br />
          <Link to="/logos">Logos</Link><br />
        </div>

        <div className="sitemap col-md-1">
          <Link to="/">Login</Link><br />
        </div>

        <div className="footer-somelinks  col-4 col-lg-1 text-right">
          <nav className="some-links">
            <a href="https://www.facebook.com/platformoftrust" className="some-link facebook"><img src={Facebook} className="some-icon" alt="Facebook" /></a>
            <a href="https://twitter.com/PlatformOfTrust" className="some-link twitter"><img src={Twitter} className="some-icon" alt="Twitter" /></a>
            <a href="https://www.linkedin.com/company/platform-of-trust/" className="some-link github"><img src={Linkedin} className="some-icon" alt="Github" /></a>
            <a href="https://github.com/PlatformOfTrust/" className="some-link linkedin"><img src={Github} className="some-icon" alt="Linkedin" /></a>
          </nav>
        </div>

        {/* <nav className="sitemap col-md-2 mb-md-0 mb-3">

          <h5 className="text-uppercase">Pages</h5>
          <ul className="list-unstyled">
            <li>
              <Link className="nav-link" to="/pricing">Pricing plans</Link>
            </li>
            <li>
              <Link className="nav-link" to="/news">News</Link>
            </li>
            <li>
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li>
              <Link className="nav-link" to="/Team">Team</Link>
            </li>
          </ul>
        </nav>

        <nav className="sitemap col-md-2 mb-md-0 mb-3">
          <h5 className="text-uppercase">Services</h5>
          <ul className="list-unstyled">
            <li>
              <a className="nav-link" href="http://preview.oftrust.net">Platform of Trust</a>
            </li>
            <li>
              <a className="nav-link" href="http://market.oftrust.net/">Market place</a>
            </li>
            <li>
              <a className="nav-link" href="http://world.oftrust.net/">My World</a>
            </li>
            <li>
              <a className="nav-link" href="http://developer.oftrust.net/">Developer portal</a>
            </li>
          </ul>
        </nav> */}

      </div>

    </div>
  </StyledFooter>
)

export default Footer
