import { REMOVE_TASK } from '../types'

export const removeTaskAction = (id: number) => ({
  type: REMOVE_TASK,
  id 
})