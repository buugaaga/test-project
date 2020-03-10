import React from 'react'
import styled from '@emotion/styled'
import { Link, useParams } from 'react-router-dom'
import { 
  useFormik
} from 'formik'

import { InnerForm } from './InnerForm'
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

interface MyFormValues {
  tasks: Array<tasksType>;
}

export const FormPage: React.FC<any> = ({tasks, users}) => {

  const formik = useFormik<{task: string}>({
    initialValues: {
      task: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  const { userId }: any = useParams<ParamsType>()
  const userName: string = users[userId-1] && users[userId-1].name
  const userTasks: Array<tasksType> = tasks.filter( (task: any) => task.userId == userId )

  return (
    <div>
      <SLink to='/'>Домой</SLink>
      <form>
      <h1>{userName}</h1>
      
      <input type="text" name="task" value={formik.values.task} onChange={formik.handleChange} />

      <ul>
        {userTasks.map( (task: tasksType) => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </form>
    </div>
  )
}