
import { tasksType, usersType } from '../types'

export const EXTRACT_DATAS = 'EXTRACT_DATAS'


export const extractDatas = ( arrayTasks: Array<tasksType>, arrayUsers: Array<usersType> ) => {
  return {
    type: typeof EXTRACT_DATAS,
    tasks: arrayTasks,
    users: arrayUsers
  }
}
