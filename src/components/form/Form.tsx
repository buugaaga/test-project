import React from 'react'
import styledEm from '@emotion/styled'
import { styled } from '@material-ui/core/styles'
import { Link, useParams } from 'react-router-dom'
import { 
  useFormik
} from 'formik'
import { TextField, Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Delete, Done } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { tasksType } from '../../types'
import { addTaskAction } from '../../actions/addTaskAction'
import { removeTaskAction } from '../../actions/removeTaskAction'

const SLink = styledEm(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 20px;
  color: green;
  border: 1px solid green;
  border-radius: 5px;
  text-decoration: none;
`
const SButton = styled(Button)({
  marginTop: '20px',

})

interface ParamsType {
  userId: string | undefined
}

export const FormPage: React.FC<any> = ({tasks, users}) => {

  const { userId }: { userId: string | undefined } = useParams<ParamsType>()
  const userName: string = users[+userId-1] && users[+userId-1].name
  const userTasks: Array<tasksType> = tasks.filter( (task: any) => task.userId === +userId )

  const dispatch = useDispatch()

  const formik = useFormik<{task: string}>({
    initialValues: {
      task: ''
    },
    validationSchema: Yup.object({
      task: Yup.string().min(2, 'нужно больше символов').max(100, 'хватит уже')
    }),
    onSubmit: values => {
      dispatch(addTaskAction(values.task, +userId, (tasks[tasks.length - 1].id + 1)))
      formik.setValues({task: ''})
    }
  })
  // console.log(formik)
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
          error={ (formik.touched.task && formik.errors.task) ? true : false }
          required
        />
        {/* { formik.touched.task && formik.errors.task ? (<div>{formik.errors.task}</div>) : null }  */}
        <br/>
        <SButton
          type="submit"
          variant="contained"
        >
          Добавить задачу
        </SButton>

        <ol reversed>
          {userTasks.map( (task: tasksType) => (
            <li key={task.id}>
              {task.title} 
              <IconButton
                onClick={ () => dispatch(removeTaskAction(task.id))}
              >
                <Delete />
              </IconButton>
              { task.completed ? <Done color="action" /> : null }
            </li>
          )).reverse()}
        </ol>
      </form>
    </div>
  )
}