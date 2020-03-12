import { ActionTypeIsCompleted  } from '../types'
import { IS_COMPLETED } from '../types'

export const changeIsCompleted = (completed: boolean): ActionTypeIsCompleted => {
  return {
    type: IS_COMPLETED,
    isCompleted: completed,
  }
}