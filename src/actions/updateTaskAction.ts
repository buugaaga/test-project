
import { ActionTypeUpdateTask } from "../types"
import { UPDATE_TASK } from "../types"

export const updateTaskAction = (title: string, id: string, completed: boolean): ActionTypeUpdateTask => {
  return {
    type:  UPDATE_TASK,
    title,
    id,
    completed
  }
}

