
export const IS_COMPLETED = 'IS_COMPLETED'
export const EXTRACT_TASKS = 'EXTRACT_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const ORDER_BY_COMPLETED = 'ORDER_BY_COMPLETED'
export const UPDATE_TASK = 'UPDATE_TASK'
export const EXTRACT_USERS = 'EXTRACT_USERS'

export interface tasksType {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface usersType {
  id: number
  name: string
  username: string
  email: string
  addres: any
}

export interface initialStateType {
  tasks: Array<tasksType> | []
  users: any
  isCompleted?: boolean
}

export interface ExtractUsersActionTypes {
  type: string
  users: Array<usersType>
}

export interface ExtractTasksActionTypes {
  type: string
  tasks: Array<tasksType>
}

export interface AddTaskTypes {
  type: string
  payload: tasksType
}

export interface ActionTypeIsCompleted {
  type: string
  isCompleted: boolean
}

export interface ActionTypeUpdateTask {
  type: string
  title: string
  id: number | string
}