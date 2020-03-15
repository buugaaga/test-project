import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Paper, Table, TableContainer, } from '@material-ui/core'


import { tasksType, usersType } from '../../types'
import { EnhancedTableHead } from './EnhancedTableHead'
import { EnhancedTableBody } from './EnhancedTableBody'
import { SearchBar } from './SearchBar'

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

  const [ search, setSearch ] = useState('')

  return (
    <SPaper elevation={3} >
      <SearchBar
        search={search}
        setSearch={setSearch}
      />
      <TableContainer>
        <STable>
          <EnhancedTableHead />
          <EnhancedTableBody 
            tasks={tasks} 
            users={users} 
            search={search}
          />
        </STable>
      </TableContainer>
    </SPaper>
  ) 
}
