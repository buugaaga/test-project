import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const SLink = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 20px;
  color: green;
  border: 1px solid green;
  border-radius: 5px;
  text-decoration: none;
`

export const FormPage: React.FC<any> = () => {
  return (
    <>
      <SLink to='/'>На главную</SLink>
    </>
  )
}