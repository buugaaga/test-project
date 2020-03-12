import React from 'react'
import { TableBody, DialogTitle } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'

import { tasksType, usersType } from '../../types'
import { EnhacedTableRow } from './EnhancedTableRow'
import { updateTaskAction } from '../../actions/updateTaskAction'


interface PropsType {
  tasks: Array<tasksType>
  users: Array<usersType>
}

// interface getInitialValuesObjectType  { 
//   task: string
// }

function getInitialValuesObject(taskArr: Array<tasksType>): any {
  
  const initialValuesObject: any = {}
  for( let task of taskArr) {
    initialValuesObject[`task${task.id}`] = task.title
  }
  return initialValuesObject
}

export const EnhancedTableBody: React.FC<PropsType> = ({ tasks, users }) => {

  const dispatch = useDispatch()


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
              <EnhacedTableRow 
                key={key}
                task={task} 
                userName={userName}
                value={task.title}
              />
            )
          })
        }
      
    </TableBody>
    
    
  )
}