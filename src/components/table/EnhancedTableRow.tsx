import React from 'react'
import { TableRow, TableCell, Checkbox, Input } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { tasksType } from '../../types'

interface EnhacedTableRowType {
  task: tasksType
  userName: string
  value: string
  
}

export const EnhacedTableRow: React.FC<EnhacedTableRowType> = ({ task, userName,  value }) => {
  
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
          value={value}
        />
      </TableCell>
    </TableRow>
  )
}