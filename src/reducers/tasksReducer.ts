import { tasksType, ExtractTasksActionTypes, AddTaskTypes, ActionTypeIsCompleted, ActionTypeUpdateTask, EditModeAction } from '../types' 
import { EXTRACT_TASKS, ADD_TASK, ORDER_BY_COMPLETED, UPDATE_TASK, EDIT_MODE } from '../types'


type ActionType = ExtractTasksActionTypes & AddTaskTypes & ActionTypeIsCompleted & ActionTypeUpdateTask & EditModeAction


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
      })
      return [
        ...cloneState
      ]

    case UPDATE_TASK:    
      const cloneStateToUpdate = state.map( (task: tasksType): tasksType => {
        if(task.id == action.id) {
          return {
            ...task,
            title: action.title
          }
        } 
        return task
      }) 
      return cloneStateToUpdate
    case EDIT_MODE:
      const newArr = state.map( (item: tasksType): tasksType => {
        if(item.id === action.id) {
          return {
            ...item,
            editMode: action.editMode
          }
        } 
        return {
          ...item,
          editMode: false
        }
      })
      return newArr

    default:
      return state
  }
}






