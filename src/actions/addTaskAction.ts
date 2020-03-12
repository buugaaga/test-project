
import { ADD_TASK } from '../types'

import { AddTaskTypes } from '../types'

export function addTaskAction (task: string, userId: number, id: number):AddTaskTypes  {
  return {
    type: ADD_TASK,
    payload: {
      userId,
      id,
      title: task,
      completed: false,
      editMode: false
    }
  }
}


