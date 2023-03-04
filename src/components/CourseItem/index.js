import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import './index.css'

class CourseItem extends Component {
  state = {isLoading: '', dataList: ''}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({isLoading: 'loading'})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)

    const data = await response.json()

    if (response.ok) {
      const courseDetails = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }

      this.setState({
        isLoading: 'success',
        dataList: courseDetails,
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
      <h1 className="failure-heading ">Oops! Something Went Wrong</h1>
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
      <div className="course-item-page">
        <div className="course-item-container">
          <img
            className="course-item-img"
            alt={dataList.name}
            src={dataList.imageUrl}
          />
          <div className="details-container">
            <h1 className="item-name ">{dataList.name}</h1>
            <p className="item-description ">{dataList.description}</p>
          </div>
        </div>
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

export default CourseItem
