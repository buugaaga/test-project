import { ORDER_BY_COMPLETED, IOrderByCompletedAction } from "../types"


export const orderByCompletedAction = (isCompleted: boolean): IOrderByCompletedAction => {
  return ({
    type: ORDER_BY_COMPLETED,
    isCompleted
  })
}


