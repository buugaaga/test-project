import { EDIT_MODE } from '../types'


export const editModeAction = (id: number | string, editMode: boolean) => ({
  type: EDIT_MODE,
  id,
  editMode
})
