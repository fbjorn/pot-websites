import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="Header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="#">PoT</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="#">My World</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/developers">For developers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="#">Marketplace</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/wp-blog">WP-blogs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="#">Community</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="#">Issues</Link>
          </li>

        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul className="nav navbar navbar-right">
          <li><Link to="#"><span className="glyphicon glyphicon-user"></span> Sign Up </Link></li>

          <li><Link to="#"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
        </ul>
      </div>
    </nav>
  </header>
  // <div
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
