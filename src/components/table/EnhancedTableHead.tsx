import React, { useState } from 'react'
import { TableHead, TableRow, TableCell, TableSortLabel } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { orderByCompletedAction } from '../../actions/orderByCompletedAction'
import { thunkOrderByUserNameAction } from '../../actions/orderByUserNameAction'
import { changeIsCompleted } from '../../actions/changeIsCompleted'
import { RootState } from '../../reducers/rootReducer'
import { usersType } from '../../types'

interface IEnhancedTableHead {
  users: usersType[]
}

export const EnhancedTableHead: React.FC<IEnhancedTableHead> = ({ users }) => {

  const isCompleted = useSelector( (state: RootState): boolean => state.isCompleted)

  const [ isAscDirection, setAsctDirection ] = useState(false)

  const dispatch = useDispatch()

  const handleOrderByCompleted = (): void => {
    dispatch(changeIsCompleted(!isCompleted))
    dispatch(orderByCompletedAction(isCompleted))
  }
  
  const handleOrderByName = () => {
    setAsctDirection(!isAscDirection)
    dispatch(thunkOrderByUserNameAction(isAscDirection))
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
        <TableCell  align="center">
          <b>имя</b>
          <TableSortLabel 
              active
              direction={ isAscDirection ? 'asc' : 'desc'}
              onClick={handleOrderByName}
            />
        </TableCell>
        <TableCell align="center"><b>задача</b></TableCell>
        <TableCell align="center"><b>редактировать</b></TableCell>
      </TableRow>
    </TableHead>
  )
}