import React from 'react'
import { FormikProps, Form, Field } from 'formik';

import { tasksType } from '../../types'

export const InnerForm: React.FC<{userTasks: Array<tasksType>, userName: string} & FormikProps<{task: string}>> = (props) => {
  console.log(props)
  return (
    <Form>
      <h1>{"hi"}</h1>
      
     
      <Field type="text" name="task" value={props.values.task} onChange={props.handleChange} />

      <ul>
        {props.userTasks.map( (task: tasksType) => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </Form>
  )
}