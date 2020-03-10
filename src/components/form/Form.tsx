import React from 'react'
import styled from '@emotion/styled'
import { Link, useParams } from 'react-router-dom'
import { 
  useFormik
} from 'formik'
import { TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { tasksType, usersType } from '../../types'
import { addTaskAction } from '../../actions/addTaskAction'

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

  const { userId }: any = useParams<ParamsType>()
  const userName: string = users[userId-1] && users[userId-1].name
  const userTasks: Array<tasksType> = tasks.filter( (task: any) => task.userId == userId )

  const dispatch = useDispatch()

  const formik = useFormik<{task: string}>({
    initialValues: {
      task: ''
    },
    onSubmit: values => {
      console.log(values)
      dispatch(addTaskAction(values.task, userId, (tasks.length - 1)))
      values.task = ''
    }
  })

  return (
    <div>
      <SLink to='/'>Домой</SLink>
      <form onSubmit={formik.handleSubmit}>
        <h1>{userName}</h1>
        
        <TextField 
          type="text" 
          name="task" 
          value={formik.values.task}
          onChange={formik.handleChange} 
          multiline
          rows={3}
          variant="outlined"
          placeholder="напишите задачу"
        />
        <br/>
        <Button
          type="submit"
          variant="contained"
        >
          Добавить задачу
        </Button>

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