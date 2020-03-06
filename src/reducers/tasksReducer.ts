
import { tasksType, usersType, initialStateType } from '../types' 
import { EXTRACT_DATAS } from '../actions'

const initialState:  initialStateType = {
  tasks: [],
  users: []
}
 
// single action for two requestn in server 
export function tasksReducer(state: initialStateType = initialState,  action: any) {
  switch (action.type) {
    case (typeof EXTRACT_DATAS):
      return {
        ...state,
        tasks: [
          ...state.tasks,
          ...action.tasks,
        ],
        users: [
          ...state.users,
          ...action.users
        ]
      }
    default:
      return state
  }
} 



