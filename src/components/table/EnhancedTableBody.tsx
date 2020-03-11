import React from 'react'
import { TableBody, TableRow, TableCell, Checkbox } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { tasksType, usersType } from '../../types'

interface PropsType {
  tasks: Array<tasksType>
  users: Array<usersType>
}

export const EnhancedTableBody: React.FC<PropsType> = ({ tasks, users }) => {

  return (
    <TableBody>
      {
        tasks.map( (task: tasksType, key: number) => {

        // фильтруем массив по id и возвращаем поле name из единственного значения массива
          let filteredUsersArr =  users.filter( (itemUser: usersType ) => {
            return (itemUser.id === task.userId)
          })
          let userName: any = filteredUsersArr[0] ? filteredUsersArr[0].name : null
          return (
            <TableRow key={key}>
              <TableCell>
                <Checkbox checked={task.completed}  />
              </TableCell>
              <TableCell align="center">
                
                <Link to={`/form/${task.userId}`}>
                  {userName}
                </Link>
              </TableCell>
              <TableCell align="center">{task.title}</TableCell>
            </TableRow>
          )
        })
      }
      
    </TableBody>
  )
}