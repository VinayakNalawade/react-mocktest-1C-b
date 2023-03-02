import styled from 'styled-components'

export const CourseItemPage = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5%;
`

export const CourseItemContainer = styled.div`
  display: flex;
`

export const CourseItemImg = styled.img`
  width: 40%;
`

export const DetailsContainer = styled.div`
  padding: 3%;
`

export const ItemName = styled.h1`
  font-size: 24px;
  color: #1e293b;
  margin-top: 0;
`

export const ItemDescription = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #64748b;
  line-height: 2;
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
