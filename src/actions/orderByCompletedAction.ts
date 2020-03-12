import { ORDER_BY_COMPLETED } from "../types"


export const orderByCompletedAction = (isCompleted: boolean) => {
  return ({
    type: ORDER_BY_COMPLETED,
    isCompleted
  })
}


