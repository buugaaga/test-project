import React from 'react'
import styled from '@emotion/styled'
import { Paper, Table, TableContainer, } from '@material-ui/core'


import { tasksType, usersType } from '../../types'
import { EnhancedTableHead } from './EnhancedTableHead'
import { EnhancedTableBody } from './EnhancedTableBody'

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

    console.log(e.target)
  }

  const onToggleCompleted = (e: React.MouseEvent<HTMLInputElement>): void => {
    console.log(e.target)
  }

  return (
    <SPaper elevation={3} >
      <TableContainer>
        <STable>
          <EnhancedTableHead />
          <EnhancedTableBody 
            tasks={tasks} 
            users={users} 
            handleChange={handleChange} 
            onToggleCompleted={onToggleCompleted}
          />
        </STable>
      </TableContainer>
    </SPaper>
  ) 
}
