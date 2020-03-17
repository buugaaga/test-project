
import { ADD_TASK } from '../types'

import { IAddTaskTypes } from '../types'

export function addTaskAction (task: string, userId: number, id: number): IAddTaskTypes  {
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


