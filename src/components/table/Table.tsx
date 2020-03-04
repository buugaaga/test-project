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

const SPaper = styled(Paper)`
  width: 720px;
  padding: 10px;
`

const STable = styled(Table)`
  min-width: 720px;
`

const tasks: string[] = ["one", "two", "three"]

export const BossTable = () => {
  return (
    <SPaper elevation={3} >
      <TableContainer>
        <STable>
          <TableHead>
            <TableRow >
              <TableCell padding="checkbox">onehead</TableCell>
              <TableCell  align="center">twohead</TableCell>
              <TableCell align="center">threehead</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              tasks.map( (item, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell align="center">{item}</TableCell>
                    <TableCell align="center">{item}</TableCell>
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
