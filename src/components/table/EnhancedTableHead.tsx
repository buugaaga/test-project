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
          <>
            <b>готово</b>
            <TableSortLabel 
              active
              direction={ isCompleted ? 'asc' : 'desc'}
              onClick={handleOrderByCompleted}
            />
          </>
         
        </TableCell>
        <TableCell  align="center"><b>имя</b></TableCell>
        <TableCell align="center"><b>задача</b></TableCell>
        <TableCell align="center"><b>редактировать</b></TableCell>
      </TableRow>
    </TableHead>
  )
}