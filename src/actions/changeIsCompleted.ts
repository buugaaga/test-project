import { IActionTypeIsCompleted  } from '../types'
import { IS_COMPLETED } from '../types'

export const changeIsCompleted = (completed: boolean): IActionTypeIsCompleted => {
  return {
    type: IS_COMPLETED,
    isCompleted: completed,
  }
}