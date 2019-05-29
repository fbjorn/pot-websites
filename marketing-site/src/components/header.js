import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import MenuFooter from './menufoot'
import Logo from "../images/platformoftrust-wide-white-rgb.svg"

class Header extends React.Component {

  render() {
    return (
      <header className="wrapper">
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <img src={Logo} className="logo__header" alt="Logo" />
          </Link>
        </div>
        <input id="swipe" data-function="swipe" type="checkbox" />
        <label id="menu-toggle" data-function="swipe" htmlFor="swipe" tabIndex="0" role="button" aria-pressed="false">
          <svg focusable="false" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
          <rect className="st0" width="512" height="400"/>
          <path className="st1" d="m304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"/>
          </svg>
        </label>
        <nav className="menus">
            <nav className="apps"> 
              <Link className="nav-link active" to="/">Platform of Trust</Link>
              <a className="nav-link" href="https://developer.oftrust.net/">Developer portal</a>
            </nav>
            <div className="menu-footer">
              <MenuFooter />
            </div>
        </nav> 
    </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
