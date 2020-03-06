
import { tasksType, usersType } from './types'

export const EXTRACT_TASKS = 'EXTRACT_TASKS'
export const EXTRACT_USERS = 'EXTRACT_USERS'

export const extractTasks = ( arrayTasks: Array<tasksType> ) => {
  return {
    type: typeof EXTRACT_TASKS,
    tasks: arrayTasks
  }
}

export const extractUsers = ( arrayUsers: Array<usersType> ) => {
  return {
    type: typeof EXTRACT_USERS,
    users: arrayUsers
  }
}