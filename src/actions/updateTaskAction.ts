
import { ActionTypeUpdateTask } from "../types"
import { UPDATE_TASK } from "../types"

export const updateTaskAction = (title: string, id: number | string): ActionTypeUpdateTask => {
  return {
    type:  UPDATE_TASK,
    title,
    id
  }
}

