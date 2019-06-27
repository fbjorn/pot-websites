import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'

import Logo from "../images/platformoftrust-wide-white-rgb.svg"
import Facebook from "../images/facebook.svg"
import Twitter from "../images/twitter.svg"
import Github from "../images/github.png"
import Linkedin from "../images/linkedin.png"

const Footer = () => (
  <footer className="page-footer footer font-small pt-4" >

    <svg width="0" height="0">
      <clipPath id="clipPathSVG" clipPathUnits="objectBoundingBox">
        <polygon points="0, 1, 0.05, 0, 0.95, 0, 1, 1"/>
      </clipPath>
    </svg>

    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-3 offset-md-1">
          <img src={Logo} className="logo__footer" alt="Logo" />
        </div>

        <div className="col-md-3 mt-md-0 mt-3">
          <h5 className="text-uppercase mb-3">Platform of Trust Oy</h5>
          <p>VAT number: FI29800052</p>
          <p><a href="https://www.tilaajavastuu.fi/en/data-protection/">Data protection</a></p>
          <nav className="some-links mt-4">
            <a href="#" class="some-link facebook"><img src={Facebook} className="some-icon" alt="Facebook" /></a>
            <a href="#" class="some-link twitter"><img src={Twitter} className="some-icon" alt="Twitter" /></a>
            <a href="#" class="some-link github"><img src={Github} className="some-icon" alt="Github" /></a>
            <a href="#" class="some-link linkedin"><img src={Linkedin} className="some-icon" alt="Linkedin" /></a>
          </nav>

        </div>

        <hr className="clearfix w-100 d-md-none pb-3" />

        <nav className="sitemap col-md-2 mb-md-0 mb-3">

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
        </nav>
      </div>

    </div>

    {/* <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://www.tilaajavastuu.fi"> Suomen Tilaajavastuu Oy</a>
    </div> */}

  </footer>
)



export default Footer
