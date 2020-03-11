import React from 'react'
import { TableBody } from '@material-ui/core'

import { tasksType, usersType } from '../../types'
import { EnhacedTableRow } from './EnhancedTableRow'

interface PropsType {
  tasks: Array<tasksType>
  users: Array<usersType>
}

type stringType = { 
  task: string
}

function generateInitialValue(task: string): stringType {
  return {
    task
  }
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

          generateInitialValue(task.title)

          return (
            <EnhacedTableRow 
              key={key}
              task={task} 
              userName={userName}
            />
          )
        })
      }
    </TableBody>
  )
}