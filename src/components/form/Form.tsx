import React from 'react'
import styled from '@emotion/styled'
import { Link, useParams } from 'react-router-dom'
import { 
  useFormik, setNestedObjectValues
} from 'formik'
import { TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

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
interface ParamsType {
  userId: any
}

const TextSchema = Yup.object().shape({
  task: Yup.string().min(2, 'Слишком короткий текст')
})

export const FormPage: React.FC<any> = ({tasks, users}) => {

  const { userId }: any = useParams<ParamsType>()
  const userName: string = users[userId-1] && users[userId-1].name
  const userTasks: Array<tasksType> = tasks.filter( (task: any) => task.userId == userId )

  const dispatch = useDispatch()

  const formik = useFormik<{task: string}>({
    initialValues: {
      task: ''
    },
    validationSchema: Yup.object({
      task: Yup.string().min(2, 'нужно больше символов').max(100, 'хватит уже')
    }),
    onSubmit: values => {
      console.log(values)
      dispatch(addTaskAction(values.task, userId, (tasks.length - 1)))
      formik.setValues({task: ''})
    }
  })
  console.log(formik)
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
        { formik.touched.task && formik.errors.task ? (<div>{formik.errors.task}</div>) : null } 
        <br/>
        <Button
          type="submit"
          variant="contained"
        >
          Добавить задачу
        </Button>

        <ol reversed>
          {userTasks.map( (task: tasksType) => (
            <li key={task.id}>
              {task.title}
            </li>
          )).reverse()}
        </ol>
      </form>
    </div>
  )
}