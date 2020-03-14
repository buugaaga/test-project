import React, { useRef} from 'react'
import { TableBody, TableRow, TableCell, Checkbox, IconButton, Input, Icon } from '@material-ui/core'
import { Edit, Done, CheckBoxOutlineBlank, DoneAll, Cancel } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { tasksType, usersType } from '../../types'
import { editModeAction } from '../../actions/editModeAction'
import { updateTaskAction } from '../../actions/updateTaskAction'

// import { EnhacedTableRow } from './EnhancedTableRow'
// import { updateTaskAction } from '../../actions/updateTaskAction'


interface PropsType {
  tasks: Array<tasksType>
  users: Array<usersType>
}


export const EnhancedTableBody: React.FC<PropsType> = ({ tasks, users }) => {

  const dispatch = useDispatch()

  const ref = useRef<HTMLInputElement>(null)

  const onToggleCompleted = (e: React.MouseEvent<HTMLButtonElement>): void => {

    console.log(e.target)
  }
  
  const onToggleEditMode = (id: number | string, mode: boolean):void => {
    dispatch(editModeAction(id, mode))
  }

  const handleDispatchButton = () => {
    dispatch(updateTaskAction(ref.current!.value, ref.current!.id))
    onToggleEditMode(ref.current!.id, false)
    console.log(ref.current!.value)
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

        if(id < 10)  return (

          <TableRow key={task.id}>

            <TableCell>
              { task.editMode ?
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
              { task.editMode ? 
                  <Input
                    multiline
                    defaultValue={task.title}
                    id={`${task.id}`}
                    inputRef={ref}
                    name="task"
                  />
                : task.title
              }
            </TableCell>
            <TableCell>
              {
                task.editMode ? 
                <>
                  <IconButton
                    onClick={handleDispatchButton}
                  >
                    <DoneAll />
                  </IconButton>
                  <IconButton>
                    <Cancel />
                  </IconButton>
                </>
                  
                : 
                  <IconButton 
                    id={`${task.id}`}
                    onClick={() => onToggleEditMode(task.id, true)}
                  >
                    <Edit />
                  </IconButton>
              }
              
            </TableCell>
          </TableRow>
        )
      })
    }
</TableBody>
    
    
  )
}