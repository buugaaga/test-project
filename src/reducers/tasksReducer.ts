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
        if(!action.isCompleted) {
          if(!a.completed && b.completed) return 1
          if(a.completed && b.completed) return 0
          if(a.completed && !b.completed) return -1
        } 
        if(action.isCompleted) {
          if(a.completed && !b.completed) return 1
          if(a.completed && b.completed) return 0
          if(!a.completed && b.completed) return -1
        }
      })
      return [
        ...cloneState
      ]

    case UPDATE_TASK:    
    // нахожу по id задачу и обноваляю ее title и completed
      const cloneStateToUpdate = state.map( (task: tasksType): tasksType => {
        if(task.id === +action.id) {
          return {
            ...task,
            title: action.title,
            completed: action.completed
          }
        } 
        return task
      }) 
      return cloneStateToUpdate
    case EDIT_MODE:
      const newArr = state.map( (item: tasksType): tasksType => {
        if(item.id === action.id) {
          // включаем режим редактирования у одной задачи 
          return {
            ...item,
            editMode: action.editMode
          }
        } 
        // отключаем моды у всех остальных задач
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






