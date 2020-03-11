import { tasksType, ExtractTasksActionTypes, AddTaskTypes, ActionTypeIsCompleted } from '../types' 

export const EXTRACT_TASKS = 'EXTRACT_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const ORDER_BY_COMPLETED = 'ORDER_BY_COMPLETED'

type ActionType = ExtractTasksActionTypes & AddTaskTypes & ActionTypeIsCompleted

export const tasksReducer = (state: [] | Array<tasksType> = [], action: ActionType): Array<tasksType> | [] => {
  switch (action.type) {
    case EXTRACT_TASKS:
      return [
        ...state,
        ...action.tasks
      ]
    case ADD_TASK:
      return [
        ...state,
        action.payload
      ]
    case ORDER_BY_COMPLETED:
      let cloneState = state.slice()
      cloneState.sort( (a: tasksType, b: tasksType): any => {
        if(action.isCompleted) {
          if(a.completed && !b.completed) return 1
          if(a.completed && b.completed || !a.completed && !b.completed) return 0
          if(!a.completed && b.completed) return -1
        } else {
          if(a.completed && !b.completed) return -1
          if(a.completed && b.completed || !a.completed && !b.completed) return 0
          if(!a.completed && b.completed) return 1
        }
        
      })
      return [
        ...cloneState
      ]
    default:
      return state
  }
}



// const initialState:  initialStateType = {
//   tasks: [],
//   users: []
// }
 
// single action for two requestn in server 
// export function tasksReducer(state: initialStateType = initialState,  action: any) {
//   switch (action.type) {
//     case (typeof EXTRACT_DATAS):
//       return {
//         ...state,
//         tasks: [
//           ...state.tasks,
//           ...action.tasks,
//         ],
//         users: [
//           ...state.users,
//           ...action.users
//         ]
//       }
      
//     case (typeof CHANGE_COMPLETE):
//       return {
//         ...state,
//         tasks: [
//           ...state.tasks.slice(0, action.id),
//           { 
//             ...state.tasks[action.id],
//             completed: action.completed
//           },
//           ...state.tasks.slice(action.id + 1)
//         ]
//       }
      
//     default:
//       return state
//   }
// } 



