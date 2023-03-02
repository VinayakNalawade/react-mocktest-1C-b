import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const Home = styled.div`
  flex-grow: 1;
  padding: 5%;
  padding-top: 2%;
`
export const HomeHeading = styled.h1`
  font-size: 28px;
  color: #1e293b;
`

export const CoursesList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
export const ReactLink = styled(Link)`
  text-decoration: none;
  width: 180px;
  margin-right: 1%;
  margin-bottom: 1%;
`

export const CourseItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  width: 100%;
`

export const CourseItemImg = styled.img`
  width: 38px;
  margin-right: 8px;
`

export const CourseName = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #1e293b;
`

export const Failure = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureImg = styled.img`
  width: 55%;
`

export const FailureHeading = styled.h1`
  font-size: 38px;
  color: #1e293b;
`

export const FailurePara = styled.p`
  font-size: 18px;
  color: #64748b;
`
export const RetryButton = styled.button`
  outline: none;
  border: none;
  background-color: #4656a1;
  color: #ffffff;
  border-radius: 7px;
  padding: 8px;
  width: 80px;
  text-align: center;
`
