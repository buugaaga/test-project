
import { IActionTypeUpdateTask } from "../types"
import { UPDATE_TASK } from "../types"

export const updateTaskAction = (title: string, id: string, completed: boolean): IActionTypeUpdateTask => {
  return {
    type:  UPDATE_TASK,
    title,
    id,
    completed
  }
}

