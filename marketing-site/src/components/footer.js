// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'

import Logo from "../images/platformoftrust-wide-white-rgb.svg"

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

        <div className="col-md-4 mt-md-0 mt-3">

          <h5 className="text-uppercase">Dev Footer Content #################</h5>
          <p>Something pretty smart.</p>
          <a href="https://www.tilaajavastuu.fi"> Suomen Tilaajavastuu Oy</a>

        </div>

        <hr className="clearfix w-100 d-md-none pb-3" />

        <div className="col-md-2 mb-md-0 mb-3">

          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!">Terms</a>
            </li>
            <li>
              <a href="#!">Privacy</a>
            </li>
            <li>
              <a href="#!">FooBar</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>

        </div>

        <div className="col-md-1 mb-md-0 mb-3">

          <h5 className="text-uppercase">Some</h5>

          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>

        </div>
      </div>

    </div>

    {/* <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://www.tilaajavastuu.fi"> Suomen Tilaajavastuu Oy</a>
    </div> */}

  </footer>
)



export default Footer
