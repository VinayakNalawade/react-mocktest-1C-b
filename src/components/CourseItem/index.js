import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  CourseItemPage,
  CourseItemContainer,
  CourseItemImg,
  DetailsContainer,
  ItemName,
  ItemDescription,
  Failure,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styledComponents'

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
      <CourseItemPage>
        <CourseItemContainer>
          <CourseItemImg alt={dataList.name} src={dataList.imageUrl} />
          <DetailsContainer>
            <ItemName>{dataList.name}</ItemName>
            <ItemDescription>{dataList.description}</ItemDescription>
          </DetailsContainer>
        </CourseItemContainer>
      </CourseItemPage>
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
    return this.renderPage()
  }
}

export default CourseItem
