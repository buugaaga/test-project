import React from 'react'
import styled from '@emotion/styled'
import { Link, useParams } from 'react-router-dom'

import { FormCore } from './FormCore'
import { tasksType, usersType } from '../../types'

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

interface FormPageProps {
  tasks: Array<tasksType> | []
  users: Array<usersType> | []
}

interface ParamsType {
  userId: any
}

export const FormPage: React.FC<FormPageProps> = ({tasks, users}) => {
  const { userId }: any = useParams<ParamsType>() // получаем индекс пользователя с url 
  const userName: string = users[userId-1] && users[userId-1].name //если есть индекс пользователя то получаем имя
  const userTasks: Array<tasksType> = tasks.filter( (task: any) => task.userId == userId ) //получаем задачи пользователя
  return (
    <>
      <SLink to='/'>На главную</SLink>
      <FormCore userName={userName} userTasks={userTasks} />
    </>
  )
}