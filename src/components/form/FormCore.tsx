import React from 'react'
// import { useFormik } from 'formik'

import { tasksType } from '../../types'

export const FormCore: React.FC<any> = ({ userName, userTasks }) => {
  
  return (
    <form>
      <h1>{userName}</h1>
      <ul>
        {userTasks.map( (task: tasksType) => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
     
      <input type="text" name="task" value={'hi'} />
    </form>
  )
}