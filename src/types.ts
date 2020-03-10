


export interface tasksType {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface usersType {
  id: number
  name: string
  username: string
  email: string
  addres: any
}

export interface initialStateType {
  tasks: Array<tasksType> | []
  users: any
}

export interface ExtractUsersActionTypes {
  type: string
  users: Array<usersType>
}

export interface ExtractTasksActionTypes {
  type: string
  tasks: Array<tasksType>
}