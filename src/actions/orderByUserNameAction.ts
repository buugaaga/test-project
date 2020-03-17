import { ORDER_BY_USER_NAME, ORDER_TASK_BY_USER, usersType, AppThunk } from '../types'

export const orderByUserNameAction = (byUserSortDirection: boolean) => ({
  type: ORDER_BY_USER_NAME,
  byUserSortDirection
})

export const orderTaskByUserNameAction = (users: usersType[]) => ({
  type: ORDER_TASK_BY_USER,
  users: users
})

export const thunkOrderByUserNameAction = (isAscDirection: boolean): AppThunk => (dispatch, getState) => {
  dispatch(orderByUserNameAction(isAscDirection))
  const { users } = getState()
  dispatch(orderTaskByUserNameAction(users))
}
