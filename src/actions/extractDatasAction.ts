
import axios from 'axios'

import { EXTRACT_TASKS, AppThunk } from '../types'
import { EXTRACT_USERS } from '../types'


import { tasksType, usersType } from '../types'

export const extractTasks = (tasks: tasksType[]) => ({
  type:  EXTRACT_TASKS,
  tasks
})

const extractUsers = (users: usersType[]) => ({
  type: EXTRACT_USERS,
  users
})

const addKeyEditMode = (arr: tasksType[]): tasksType[] => {
  for ( let task of arr ) {
    task.editMode = false
  }
  return arr
}

export const thunkExtractTasks = (): AppThunk => async (dispatch) => {
  
  const response = await axios('http://jsonplaceholder.typicode.com/todos')
  const result = addKeyEditMode(response.data)
  dispatch(extractTasks(result))
}
  
export const thunkExtractUsers = (): AppThunk => async dispatch => {
  const response = await axios('http://jsonplaceholder.typicode.com/users')
  dispatch(extractUsers(response.data))
}

