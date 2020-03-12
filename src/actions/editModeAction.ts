import { EDIT_MODE } from '../types'


export const editModeAction = (id: number, editMode: boolean) => ({
  type: EDIT_MODE,
  id,
  editMode
})
