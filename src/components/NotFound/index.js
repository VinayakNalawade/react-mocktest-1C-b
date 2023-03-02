import {
  Failure,
  FailureImg,
  FailureHeading,
  FailurePara,
} from './styledComponents'

import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <Failure>
      <FailureImg
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      />
      <FailureHeading>Page Not Found</FailureHeading>
      <FailurePara>
        We are sorry, the page you requested could not be found.
      </FailurePara>
    </Failure>
  </>
)

export default NotFound
