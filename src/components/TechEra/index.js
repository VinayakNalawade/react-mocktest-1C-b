import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import './index.css'

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
    <div className="failure">
      <img
        className="failure-img"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-para">
        We cannot seem to find the page you are looking for.
      </p>
      <button className="retry-button" onClick={this.getData} type="button">
        Retry
      </button>
    </div>
  )

  renderSuccess = () => {
    const {dataList} = this.state

    return (
      <div className="home">
        <h1 className="home-heading">Courses</h1>
        <ul className="courses-list">
          {dataList.courses.map(each => (
            <Link
              className="react-link"
              key={each.id}
              to={`/courses/${each.id}`}
            >
              <li className="course-items">
                <img
                  className="course-item-img"
                  src={each.logoUrl}
                  alt={each.name}
                />
                <p className="course-name ">{each.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
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
