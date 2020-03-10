import { Action } from 'redux'
import { ADD_TASK } from '../reducers/tasksReducer'

import { AddTaskTypes } from '../types'

export function addTaskAction (task: string, userId: number, id: number):AddTaskTypes  {
  return {
    type: ADD_TASK,
    payload: {
      userId,
      id,
      title: task,
      completed: false
    }
  }
}


