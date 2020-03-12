import  { usersType, ExtractUsersActionTypes } from '../types'
import { EXTRACT_USERS } from '../types'


export const usersReducer = (state: [] | Array<usersType> = [], action: ExtractUsersActionTypes): (Array<usersType> | []) => {
  switch (action.type) {
    case EXTRACT_USERS: 
      return [
        ...state,
        ...action.users
      ]
    default:
      return state
  }
}


