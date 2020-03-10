import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { EXTRACT_TASKS } from '../reducers/tasksReducer'
import { EXTRACT_USERS } from '../reducers/usersReducer'


import { tasksType, usersType } from '../types'

const extractTasks = (tasks: Array<tasksType>) => ({
  type:  EXTRACT_TASKS,
  tasks
})

const extractUsers = (users: Array<usersType>) => ({
  type: EXTRACT_USERS,
  users
})


export const thunkExtractTasks = (): ThunkAction<void, any, unknown, Action<any>> => async (dispatch) => {
  
  const response = await axios('http://jsonplaceholder.typicode.com/todos')
  dispatch(extractTasks(response.data))
}
  
export const thunkExtractUsers = (): ThunkAction<void, any, unknown, Action<any>> => async dispatch => {
  const response = await axios('http://jsonplaceholder.typicode.com/users')
  dispatch(extractUsers(response.data))
}

