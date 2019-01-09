import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

class Header extends React.Component {

  render() {
    return (
      <header className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">PoT</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">My World</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/developers">For developers</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Issues</a>
              </li>

            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul className="nav navbar navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up </a></li>
              <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;