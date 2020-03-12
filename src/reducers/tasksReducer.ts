import { tasksType, ExtractTasksActionTypes, AddTaskTypes, ActionTypeIsCompleted, ActionTypeUpdateTask } from '../types' 

export const EXTRACT_TASKS = 'EXTRACT_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const ORDER_BY_COMPLETED = 'ORDER_BY_COMPLETED'
export const UPDATE_TASK = 'UPDATE_TASK'

type ActionType = ExtractTasksActionTypes & AddTaskTypes & ActionTypeIsCompleted & ActionTypeUpdateTask


export const tasksReducer = (state: any = [], action: ActionType): Array<tasksType> | [] => {
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
          if(a.completed) return 1
          return 0
        } else {
          if(b.completed) return 1
          return 0
        }
        // if(action.isCompleted) {
        //   if(a.completed && !b.completed) return 1
        //   if(a.completed && b.completed || !a.completed && !b.completed) return 0
        //   if(!a.completed && b.completed) return -1
        // } else {
        //   if(a.completed && !b.completed) return -1
        //   if(a.completed && b.completed || !a.completed && !b.completed) return 0
        //   if(!a.completed && b.completed) return 1
        // }
      })
      return [
        ...cloneState
      ]

    case UPDATE_TASK:    
      const cloneStateToUpdate = state.map( (task: tasksType): tasksType => {
        if(task.id === action.id) {
          return {
            ...task,
            title: task.title
          }
        } 
        return task
      }) 
      return cloneStateToUpdate

    default:
      return state
  }
}






