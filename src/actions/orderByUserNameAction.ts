import { ORDER_BY_USER_NAME, ORDER_TASK_BY_USER, usersType } from '../types'

export const orderByUserNameAction = (byUserSortDirection: boolean) => ({
  type: ORDER_BY_USER_NAME,
  byUserSortDirection
})

export const orderTaskByUserNameAction = (users: usersType[]) => ({
  type: ORDER_TASK_BY_USER,
  users: users
})

