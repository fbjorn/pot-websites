import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = () => (
    <footer 
        className="page-footer footer font-small pt-4" 
        style={{
            background: `rebeccapurple`,
            marginTop: `2rem`,
            background:  `#343a40`,
            color: `white`
          }}>

    <div className="container-fluid text-center text-md-left">

      <div className="row">

        <div className="col-md-6 mt-md-0 mt-3">

          <h5 className="text-uppercase">Footer Content</h5>
          <p>Something pretty smart.</p>

        </div>

        <hr className="clearfix w-100 d-md-none pb-3" />

        <div className="col-md-3 mb-md-0 mb-3">

          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>

        </div>

        <div className="col-md-3 mb-md-0 mb-3">

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
      </div>

    </div>

    <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://www.tilaajavastuu.fi"> Suomen Tilaajavastuu Oy</a>
    </div>

  </footer>
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



export default Footer
