import { combineReducers } from 'redux'

import { tasksReducer } from './tasksReducer'
import {  usersReducer } from './usersReducer'
import { orderByCompleted } from './isCompletedReducer'

// import { editModeReducer } from './editModeReducer'


export const rootReducer: any = combineReducers({
  tasks: tasksReducer, 
  isCompleted: orderByCompleted,
  users: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>