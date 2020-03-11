import { ActionTypeIsCompleted  } from '../types'
import { IS_COMPLETED } from '../reducers/isCompletedReducer'

export const changeIsCompleted = (completed: boolean): ActionTypeIsCompleted => {
  return {
    type: IS_COMPLETED,
    isCompleted: completed,
  }
}