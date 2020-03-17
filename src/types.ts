

const IS_COMPLETED = 'IS_COMPLETED'
const EXTRACT_TASKS = 'EXTRACT_TASKS'
const ADD_TASK = 'ADD_TASK'
const ORDER_BY_COMPLETED = 'ORDER_BY_COMPLETED'
const UPDATE_TASK = 'UPDATE_TASK'
const EXTRACT_USERS = 'EXTRACT_USERS'
const EDIT_MODE = 'EDIT_MODE'
const ORDER_BY_USER_NAME = 'ORDER_BY_USER_NAME'
const ORDER_TASK_BY_USER = 'ORDER_TASK_BY_USER'


export interface tasksType {
  userId: number
  id: number
  title: string
  completed: boolean
  editMode: boolean
}

export interface usersType {
  id: number
  name: string
  username: string
  email: string
  addres: any
}

export interface IInitialStateType {
  tasks: tasksType[] | []
  users: usersType[]
  isCompleted?: boolean
}

export type IExtractUsersActionTypes = {
  type: typeof EXTRACT_USERS
  users: usersType[]
}

export type IExtractTasksActionTypes = {
  type: typeof EXTRACT_TASKS
  tasks: tasksType[]
}

export interface IAddTaskTypes {
  type: typeof ADD_TASK
  payload: tasksType
}

export interface IActionTypeIsCompleted {
  type: typeof IS_COMPLETED
  isCompleted: boolean
}

export interface IActionTypeUpdateTask {
  type: typeof UPDATE_TASK
  title: string
  id: number | string
  completed: boolean
}

export interface IActionTypeOrderByUser {
  type: typeof ORDER_TASK_BY_USER
  users: usersType[]
}

export interface IEditModeAction {
  type: typeof EDIT_MODE
  id: number
  editMode: boolean
}

export interface IOrderByUserName {
  type: typeof ORDER_BY_USER_NAME
  byUserSortDirection: boolean
}

export interface IOrderByCompletedAction {
  type: typeof ORDER_BY_COMPLETED
  isCompleted: boolean
}

export { 
  IS_COMPLETED,  
  EXTRACT_TASKS,
  ADD_TASK,
  ORDER_BY_COMPLETED,
  UPDATE_TASK,
  EXTRACT_USERS,
  EDIT_MODE,
  ORDER_BY_USER_NAME,
  ORDER_TASK_BY_USER
}