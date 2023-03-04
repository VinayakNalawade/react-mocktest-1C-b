import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <Link className="react-link" to="/">
      <img
        className="header-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
      />
    </Link>
  </nav>
)

export default Header
