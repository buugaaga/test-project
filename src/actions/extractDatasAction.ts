import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import { EXTRACT_TASKS } from '../types'
import { EXTRACT_USERS } from '../types'


import { tasksType, usersType } from '../types'

const extractTasks = (tasks: Array<tasksType>) => ({
  type:  EXTRACT_TASKS,
  tasks
})

const extractUsers = (users: Array<usersType>) => ({
  type: EXTRACT_USERS,
  users
})

const addKeyEditMode = (arr: Array<tasksType>): Array<tasksType> => {
  for ( let task of arr ) {
    task.editMode = false
  }
  return arr
}

export const thunkExtractTasks = (): ThunkAction<void, any, unknown, Action<any>> => async (dispatch) => {
  
  const response = await axios('http://jsonplaceholder.typicode.com/todos')
  const result = addKeyEditMode(response.data)
  dispatch(extractTasks(result))
}
  
export const thunkExtractUsers = (): ThunkAction<void, any, unknown, Action<any>> => async dispatch => {
  const response = await axios('http://jsonplaceholder.typicode.com/users')
  dispatch(extractUsers(response.data))
}

