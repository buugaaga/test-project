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

import { tasksType, usersType } from '../../types'

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
  users: any
}


// const tasksArr: string[] = ["one", "two", "three"]

export const BossTable: React.FC<propsType> = ({tasks, users}) => {
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
                return (
                  <TableRow key={key}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell align="center">{users[task.userId - 1].name}</TableCell>
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
