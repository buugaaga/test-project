
export const IS_COMPLETED = 'IS_COMPLETED'

interface ActionType {
  type: string
  isCompleted: boolean
}


export function orderByCompleted(state: boolean = false, action: ActionType ): boolean {
  switch (action.type) {
    case IS_COMPLETED:
      return action.isCompleted
    default:
      return state
  }
} 