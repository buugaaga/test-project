import React from 'react'
import { TableHead, TableRow, TableCell, TableSortLabel } from '@material-ui/core'

interface PropsType {
  isChecked?: boolean
}

export const EnhancedTableHead: React.FC<PropsType> = (props) => {

  return (
    <TableHead>
      <TableRow >
        <TableCell padding="checkbox">
          готово
          <TableSortLabel 
            active
          />
        </TableCell>
        <TableCell  align="center">имя</TableCell>
        <TableCell align="center">задача</TableCell>
      </TableRow>
    </TableHead>
  )
}