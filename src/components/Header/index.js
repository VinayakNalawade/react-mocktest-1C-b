import {ReactLink, Navbar, HeaderLogo} from './styledComponents'

const Header = () => (
  <Navbar>
    <ReactLink to="/">
      <HeaderLogo
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
      />
    </ReactLink>
  </Navbar>
)

export default Header
