import { tasksReducer } from './tasksReducer'
import * as types from '../types'

describe('test taskReducer', () => {

  it('should handle ADD_TASK', () => {
    expect(tasksReducer([], {
      type: types.ADD_TASK,
      payload: {
        userId: 1,
        id: 1,
        title: 'babay',
        completed: true,
        editMode: false
      }
    })).toEqual([
      {
        userId: 1,
        id: 1,
        title: 'babay',
        completed: true,
        editMode: false
      }
    ])
  })

  it('should handle UPDATE_TASK', () => {
    expect(tasksReducer([
      {
        userId: 2,
        id: 1,
        title: 'bum',
        completed: true,
        editMode: false 
      }
    ], {
      type: types.UPDATE_TASK,
      title: 'changed data',
      id: 1,
      completed: false
    })).toEqual([
      {
        userId: 2,
        title: 'changed data',
        id: 1,
        completed: false,
        editMode: false
      }
    ])
  })

  
})