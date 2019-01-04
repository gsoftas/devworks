import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <nav className="is-transparent" style={{ marginBottom: '2rem', backgroundColor: 'rgba(255,255,255,0)', display: 'flex' }}>
  <div className="navbar-brand">

    <Link className="navbari" to="/">
      {/* <img src="icons/icon-256x256.png" alt={siteTitle} /> */}
    </Link>
  </div>


    <div className="nend" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'stretch', marginLeft: 'auto'}}>
      {/* <Link to="/about" className="navbari" style={{color: 'white'}}>About</Link> */}
      {/* <Link to="/page-2" className="navbari" style={{color: 'white'}}>Page 2</Link> */}
    </div>

</nav>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
