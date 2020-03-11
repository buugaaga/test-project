import React from 'react'
import { TableRow, TableCell, Checkbox, Input } from '@material-ui/core'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

import { tasksType } from '../../types'

interface EnhacedTableRowType {
  task: tasksType
  userName: string
}

export const EnhacedTableRow: React.FC<EnhacedTableRowType> = ({ task, userName }) => {
  
  const formik = useFormik({
    initialValues: {
      task: task.title
    },
    onSubmit:  (values) => {
      console.log(values)
    }
  })


  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={task.completed}  />
      </TableCell>
      <TableCell align="center">
        
        <Link to={`/form/${task.userId}`}>
          {userName}
        </Link>
      </TableCell>
      <TableCell align="center">
        <Input 
          defaultValue={formik.values.task}
        />
      </TableCell>
    </TableRow>
  )
}