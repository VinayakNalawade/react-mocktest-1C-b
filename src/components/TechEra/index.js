import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import {
  Home,
  HomeHeading,
  CoursesList,
  ReactLink,
  CourseItem,
  CourseItemImg,
  CourseName,
  Failure,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styledComponents'

class TechEra extends Component {
  state = {isLoading: '', dataList: ''}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({isLoading: 'loading'})

    const response = await fetch('https://apis.ccbp.in/te/courses')

    const data = await response.json()

    if (response.ok) {
      const courses = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))

      this.setState({
        isLoading: 'success',
        dataList: {courses, total: data.total},
      })
    } else {
      this.setState({isLoading: 'failure'})
    }
  }

  renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#1e293b" height="50" width="50" />
    </div>
  )

  renderFailure = () => (
    <Failure>
      <FailureImg
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We cannot seem to find the page you are looking for.
      </FailurePara>
      <RetryButton onClick={this.getData} type="button">
        Retry
      </RetryButton>
    </Failure>
  )

  renderSuccess = () => {
    const {dataList} = this.state

    return (
      <Home>
        <HomeHeading>Courses</HomeHeading>
        <CoursesList>
          {dataList.courses.map(each => (
            <ReactLink key={each.id} to={`/courses/${each.id}`}>
              <CourseItem>
                <CourseItemImg src={each.logoUrl} alt={each.name} />
                <CourseName>{each.name}</CourseName>
              </CourseItem>
            </ReactLink>
          ))}
        </CoursesList>
      </Home>
    )
  }

  renderPage = () => {
    const {isLoading} = this.state

    switch (isLoading) {
      case 'success':
        return this.renderSuccess()
      case 'failure':
        return this.renderFailure()
      case 'loading':
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderPage()}
      </>
    )
  }
}

export default TechEra
