import React from 'react'
import styled from '@emotion/styled'
import { Link, useParams } from 'react-router-dom'
import { 
  withFormik,
  FormikErrors
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

const MyForm = withFormik<any, any>({
  mapPropsToValues: (props: any) => {
    return {
      task: 'sdf'
    }
  },
  validate: (values: { tasks: any}) => {
    let errors: FormikErrors<any> = {}
    if (!values.tasks) {
      errors.task = 'Required'
    } 
    return errors;
  },
  handleSubmit: values => {
    // do submitting things
  },
})(InnerForm);

  // const { userId }: any = useParams<ParamsType>() // получаем индекс пользователя с url 
  // const userName: string = users[userId-1] && users[userId-1].name //если есть индекс пользователя то получаем имя
  // const userTasks: Array<tasksType> = tasks.filter( (task: any) => task.userId == userId ) //получаем задачи пользователя
  // const initialValues: any = { formikTasks: userTasks }


export const FormPage: React.FC<any> = ({tasks, users}) => {

  const { userId }: any = useParams<ParamsType>()
  const userName: string = users[userId-1] && users[userId-1].name
  const userTasks: Array<tasksType> = tasks.filter( (task: any) => task.userId == userId )

  return (
    <div>
      <h1>My App</h1>
      <p>This can be anywhere in your application</p>
      <MyForm userName={userName} userTasks={userTasks} />
    </div>
  )
}