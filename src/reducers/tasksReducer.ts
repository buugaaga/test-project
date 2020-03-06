
import { tasksType, usersType, initialStateType } from '../types' 
import { EXTRACT_TASKS, EXTRACT_USERS } from '../actions'



const initialState:  initialStateType = {
  tasks: [],
  users: []
}
 
export function tasksReducer(state: initialStateType = initialState,  action: any) {
  switch (action.type) {
    case (typeof EXTRACT_TASKS):
      return {
        ...state,
        tasks: [
          ...state.tasks,
          ...action.tasks
        ]
      }
      
    case (typeof EXTRACT_USERS):
      return {
        ...state,
        users: [
          ...state.users,
          ...action.users
        ]
      }
      
    default:
      return state
  }
} 



