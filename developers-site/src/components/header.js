import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';

import Logo from "../images/platformoftrust-wide-white-rgb.svg"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      dropdown: false
    };
  }

  componentWillMount() {
    this.setState({
      collapsed: !this.state.collapsed,
      dropdown: false
    });
  }

  componentDidUpdate(prevProps) {
    console.log("Updated")
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      dropdown: false
    });
  }
  toggleDropdown = () => {  this.setState({ dropdown: !this.state.dropdown }); }

  render() {
    const classMobileMenu = 'navbar-collapse' + (this.state.collapsed ? 'collapse' : '')
    const classDropdownMenu = `dropdown-menu ${this.state.dropdown ? 'show' : ''}` 
    const { collapsed, dropdown } = this.state
    return (
      <header className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="http://localhost:8001/">
            <img src={Logo} className="logo__header" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classMobileMenu} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://www.platformoftrust.net/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://builder-staging.oftrust.net/">My World</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="http://localhost:8001/">Market Place</a>
              </li>
              <li className="nav-item activedropdown">
                <Link className="nav-link" to="/"  style={{ display: 'inline-block' }} >For developers</Link>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggleDropdown}  style={{ display: 'inline-block' }} ></a>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdownMenuLink">
                  <ul>
                    <li className="nav-item">
                      <Link className="nav-link" to="/use-cases">Use Cases</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/apis">APIs</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blogs">Blogs</Link>
                    </li> 
                    <li className="nav-item">
                      <Link className="nav-link" to="/guides">Guides</Link>
                    </li> 
                    </ul>  
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="http://localhost:8001/">About us</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul className="nav navbar navbar-right">
              <li>
                <button className="btn btn-primary">
                  <a className="nav-link" href="https://login.oftrust.net/">Login</a>
                </button>
              </li>
            </ul>
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