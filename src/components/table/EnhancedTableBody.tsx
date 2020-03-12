import React from 'react'
import { TableBody, TableRow, TableCell, Checkbox, IconButton, Input } from '@material-ui/core'
import { Edit, Done, CheckBoxOutlineBlank } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { tasksType, usersType } from '../../types'
// import { EnhacedTableRow } from './EnhancedTableRow'
// import { updateTaskAction } from '../../actions/updateTaskAction'


interface PropsType {
  tasks: Array<tasksType>
  users: Array<usersType>
  handleChange: React.ChangeEventHandler
  onToggleCompleted: React.MouseEventHandler
}


export const EnhancedTableBody: React.FC<PropsType> = ({ tasks, users, handleChange, onToggleCompleted }) => {

  const dispatch = useDispatch()
  const isEditMode = false

  const onToggleEditMode = (id: number):void => {
    console.log(id)
  }

  return (
    <TableBody>
    {
      tasks.map( (task: tasksType, id: number) => {
      // фильтруем массив по id и возвращаем поле name из единственного значения массива
        const filteredUsersArr =  users.filter( (itemUser: usersType ) => {
          return (itemUser.id === task.userId)
        })
        const userName: any = filteredUsersArr[0] && filteredUsersArr[0].name 
        return (
          <TableRow key={task.id}>

            <TableCell>
              { isEditMode ?
                  <Checkbox 
                    checked={task.completed}  
                    onClick={onToggleCompleted}
                  />
                : task.completed ? 
                    <Done color='primary' /> 
                  : <CheckBoxOutlineBlank />
              }

            </TableCell>

            <TableCell align="center">
              <Link to={`/form/${task.userId}`}>
                {userName}
              </Link>
            </TableCell>

            <TableCell align="center">
              { isEditMode ? 
                  <Input
                    id={`${task.id}`}
                    value={task.title}
                    name="task"
                    onChange={handleChange}
                  />
                : task.title
              }
              
            </TableCell>
            <TableCell>
              <IconButton 
                id={`${task.id}`}
                onClick={() => onToggleEditMode(task.id)}
              >
                <Edit />
              </IconButton>
            </TableCell>
          </TableRow>
        )
      })
    }
</TableBody>
    
    
  )
}