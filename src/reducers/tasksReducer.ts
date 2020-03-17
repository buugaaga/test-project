import { tasksType,  IExtractTasksActionTypes, IAddTaskTypes, IActionTypeIsCompleted, IActionTypeUpdateTask, IEditModeAction, IActionTypeOrderByUser, IOrderByCompletedAction} from '../types' 
import { EXTRACT_TASKS, ADD_TASK, ORDER_BY_COMPLETED, UPDATE_TASK, EDIT_MODE, ORDER_TASK_BY_USER  } from '../types'
// import { extractTasks } from '../actions/extractDatasAction'

type ActionType =  IExtractTasksActionTypes | IAddTaskTypes | IActionTypeIsCompleted | IActionTypeUpdateTask | IEditModeAction | IActionTypeOrderByUser | IOrderByCompletedAction


export const tasksReducer = (state: tasksType[] | [] = [], action: ActionType): tasksType[] | [] => {
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
      cloneState.sort( (a, b): number => {
        if(!action.isCompleted) {
          if(!a.completed && b.completed) return 1
          if(a.completed && !b.completed) return -1
          return 0          
        } else {
          if(a.completed && !b.completed) return 1
          if(!a.completed && b.completed) return -1
          return 0          
        }
      })
      return [
        ...cloneState
      ]

    case UPDATE_TASK:    
    // нахожу по id задачу и обноваляю ее title и completed
      const cloneStateToUpdate = (state as tasksType[]).map( (task: tasksType): tasksType => {
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
      const newArr = (state as tasksType[]).map( (item: tasksType): tasksType => {
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
    
    case ORDER_TASK_BY_USER:
      const updatedTasks = []
      for( let user of action.users) {
        for( let task of state) {
          if(user.id === task.userId) {
            updatedTasks.push(task)
          }
        }
      }
      return updatedTasks
    default:
      return state
  }
}






