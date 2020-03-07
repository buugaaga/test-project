import React from 'react'
import styled from '@emotion/styled'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
// import { useDispatch } from 'react-redux'

import { tasksType, usersType } from '../../types'
import Form from '../form'
// import { changeCopleteAction } from '../../actions/changeCompleteAction'


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

  // const dispatch = useDispatch()
  // const handlerCheckbox = (e: any) => {
  //   dispatch(changeCopleteAction(1, e.target.checked))
  // }
  return (
    <SPaper elevation={3} >
      <TableContainer>
        <STable>
          <TableHead>
            <TableRow >
              <TableCell padding="checkbox">готово</TableCell>
              <TableCell  align="center">имя</TableCell>
              <TableCell align="center">задача</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              tasks.map( (task: tasksType, key: number) => {
              {/*фильтруем массив по id и возвращаем поле name из единственного значения массива*/}
                let userName: string = users.filter( (user: any ) => {
                  return user.id === task.userId
                })[0].name
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
        </STable>
      </TableContainer>
    </SPaper>
  ) 
}
