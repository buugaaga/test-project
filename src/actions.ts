
import { tasksType, usersType } from './types'

export const EXTRACT_DATAS = 'EXTRACT_DATAS'
// export const EXTRACT_TASKS = 'EXTRACT_TASKS'
// export const EXTRACT_USERS = 'EXTRACT_USERS'

export const extractDatas = ( arrayTasks: Array<tasksType>, arrayUsers: any ) => {
  return {
    type: typeof EXTRACT_DATAS,
    tasks: arrayTasks,
    users: arrayUsers
  }
}

// export const extractUsers = ( arrayUsers: Array<usersType> ) => {
//   return {
//     type: typeof EXTRACT_USERS,
//     users: arrayUsers
//   }
// }