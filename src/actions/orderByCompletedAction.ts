import { ORDER_BY_COMPLETED } from "../reducers/tasksReducer"


export const orderByCompletedAction = (isCompleted: boolean) => {
  return ({
    type: ORDER_BY_COMPLETED,
    isCompleted
  })
}


