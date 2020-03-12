import React from 'react'
import { TableHead, TableRow, TableCell, TableSortLabel } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { orderByCompletedAction } from '../../actions/orderByCompletedAction'
import { changeIsCompleted } from '../../actions/changeIsCompleted'
import { RootState } from '../../reducers/rootReducer'

export const EnhancedTableHead: React.FC<{}> = () => {

  const isCompleted = useSelector( (state: RootState): boolean => state.isCompleted)

  const dispatch = useDispatch()
  const handleOrderByCompleted = () => {
    dispatch(changeIsCompleted(!isCompleted))
    dispatch(orderByCompletedAction(isCompleted))
  }

  return (
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
  )
}