export interface tasksType {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface usersType {
  id: number
  name: string
}

export interface initialStateType {
  tasks: Array<tasksType> | []
  users: Array<usersType> | []
}

