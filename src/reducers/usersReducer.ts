import  { usersType, ExtractUsersActionTypes } from '../types'


export const EXTRACT_USERS = 'EXTRACT_USERS'


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


