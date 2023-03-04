import './index.css'

import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="failure">
      <img
        className="failure-img"
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      />
      <h1 className="failure-heading ">Page Not Found</h1>
      <p className="failure-para">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)

export default NotFound
