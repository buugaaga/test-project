import  { usersType, IExtractUsersActionTypes, IOrderByUserName } from '../types'
import { EXTRACT_USERS, ORDER_BY_USER_NAME } from '../types'

type ActionType = IExtractUsersActionTypes | IOrderByUserName

export const usersReducer = (state: [] | Array<usersType> = [], action: ActionType): (Array<usersType> | []) => {
  switch (action.type) {
    case EXTRACT_USERS: 
      return [
        ...state,
        ...action.users
      ]
    case ORDER_BY_USER_NAME:
      const cloneStateTasksForOrder = state.slice()
      cloneStateTasksForOrder.sort( (a: usersType, b: usersType): number => {
        if(action.byUserSortDirection) {
          if(a.name > b.name) return 1
          if(a.name < b.name) return -1
          return 0
        } else {
          if(a.name > b.name) return -1
          if(a.name < b.name) return 1
          return 0
        }
      })
      return cloneStateTasksForOrder
    default:
      return state
  }
}


