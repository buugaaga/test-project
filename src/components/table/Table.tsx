import React from 'react'
import styled from '@emotion/styled'
import { Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TableSortLabel, Checkbox, IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import { tasksType, usersType } from '../../types'
// import { EnhancedTableHead } from './EnhancedTableHead'
// import { EnhancedTableBody } from './EnhancedTableBody'

const SPaper = styled(Paper)`
  width: 720px;
  min-height: 100vh;
  padding: 10px;
`

const STable = styled(Table)`
  min-width: 720px;
`
interface propsType {
  tasks: Array<tasksType>
  users: Array<usersType>
}

export const BossTable: React.FC<propsType> = ({tasks, users}) => {

  
  return (
    <SPaper elevation={3} >
          <form>
            <TableContainer>
              <STable>
                <TableHead>
                  <TableRow >
                    <TableCell padding="checkbox">
                      готово
                      <TableSortLabel 
                        active
                        direction='asc'
                      />
                    </TableCell>
                    <TableCell  align="center">имя</TableCell>
                    <TableCell align="center">задача</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                    {
                      tasks.map( (task: tasksType, id: number) => {
    
                      // фильтруем массив по id и возвращаем поле name из единственного значения массива
                        let filteredUsersArr =  users.filter( (itemUser: usersType ) => {
                          return (itemUser.id === task.userId)
                        })
                        let userName: any = filteredUsersArr[0] ? filteredUsersArr[0].name : null
    
                        return (
                          <TableRow key={task.id}>
                            <TableCell>
                              <Checkbox checked={task.completed}  />
                            </TableCell>
                            <TableCell align="center">
                              <Link to={`/form/${task.userId}`}>
                                {userName}
                              </Link>
                            </TableCell>
                            <TableCell align="center">
                              {task.title}
                            </TableCell>
                            <TableCell>
                              <IconButton>
                                <Edit />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        )
                      })
                    }
                </TableBody>
              </STable>
            </TableContainer>
          </form>
        
    </SPaper>
  ) 
}
