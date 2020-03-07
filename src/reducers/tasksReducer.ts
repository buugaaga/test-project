
import { initialStateType } from '../types' 
import { EXTRACT_DATAS } from '../actions/extractDatasAction'
import { CHANGE_COMPLETE } from '../actions/changeCompleteAction'

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
      
    case (typeof CHANGE_COMPLETE):
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.id),
          { 
            ...state.tasks[action.id],
            completed: action.completed
          },
          ...state.tasks.slice(action.id + 1)
        ]
      }
      
    default:
      return state
  }
} 



