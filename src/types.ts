
const IS_COMPLETED = 'IS_COMPLETED'
const EXTRACT_TASKS = 'EXTRACT_TASKS'
const ADD_TASK = 'ADD_TASK'
const ORDER_BY_COMPLETED = 'ORDER_BY_COMPLETED'
const UPDATE_TASK = 'UPDATE_TASK'
const EXTRACT_USERS = 'EXTRACT_USERS'
const EDIT_MODE = 'EDIT_MODE'


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

export interface EditModeAction {
  type: string
  id: number
  editMode: boolean
}

export { 
  IS_COMPLETED,  
  EXTRACT_TASKS,
  ADD_TASK,
  ORDER_BY_COMPLETED,
  UPDATE_TASK,
  EXTRACT_USERS,
  EDIT_MODE
}