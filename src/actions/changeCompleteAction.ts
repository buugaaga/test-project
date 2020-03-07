// import { tasksType, usersType } from '../types'


export const CHANGE_COMPLETE = "CHANGE_COMPLETE"

export const changeCopleteAction = (id: number, completed: boolean) => {
  return {
    type: typeof CHANGE_COMPLETE,
    completed: completed,
    id: id
  }
}