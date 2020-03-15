import React, { useRef, useState } from 'react'
import { TableBody, TableRow, TableCell, Checkbox, IconButton, Input } from '@material-ui/core'
import { Edit, Done, CheckBoxOutlineBlank, DoneAll, Cancel } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { tasksType, usersType } from '../../types'
import { editModeAction } from '../../actions/editModeAction'
import { updateTaskAction } from '../../actions/updateTaskAction'


interface PropsType {
  tasks: Array<tasksType>
  users: Array<usersType>
  search: string
}

export const EnhancedTableBody: React.FC<PropsType> = ({ tasks, users, search }) => {

  const [ completed, setCompleted ] = useState<boolean>(false)

  const dispatch = useDispatch()

  const ref = useRef<HTMLInputElement>(null)

  const onToggleCompleted = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCompleted(!completed)
  }
  
  const onToggleEditMode = (id: number | string, mode: boolean, completed?: boolean):void => {
    //при включении режима настройки проверяю третий параметр  функции на наличие и задаю состояние задачи 
    if(completed !== undefined) setCompleted(completed)
    dispatch(editModeAction(id, mode))
  }

  const handleDispatchButton = () => {
    dispatch(updateTaskAction(ref.current!.value, ref.current!.id, completed))
    onToggleEditMode(ref.current!.id, false)
  }

  const handleCancelButton = () => {
    onToggleEditMode(ref.current!.id, false)
  }
  
  const rowsOfTasks = tasks.map( (task: tasksType) => {
    // нахожу юзера по id
      const findedUserObject =  users.find( (itemUser: usersType ) => {
        return (itemUser.id === task.userId)
      })
      const userName: string | undefined = findedUserObject && findedUserObject!.name 

      if(task.title.includes(search)) return (
        <TableRow key={task.id}>
          <TableCell>
            { task.editMode ?
                <Checkbox 
                  checked={completed}  
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
                <IconButton
                  onClick={handleCancelButton}
                >
                  <Cancel />
                </IconButton>
              </>
                
              : 
                <IconButton 
                  id={`${task.id}`}
                  onClick={() => onToggleEditMode(task.id, true, task.completed)}
                >
                  <Edit />
                </IconButton>
            }
          </TableCell>
        </TableRow>
      )
    })
  
  return (
    <TableBody>
    {
      rowsOfTasks 
    }
   </TableBody>
    
    
  )
}