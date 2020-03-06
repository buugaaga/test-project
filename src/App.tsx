import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import Table from './components/table'
import { extractTasks, extractUsers } from './actions'
import { tasksType, usersType, initialStateType } from './types'

const SContainer = styled.div`
  display: flex;
  min-height: 300px;
  justify-content: center;
  align-content: center;
 
`

const App = () => {

  // используем хуки react redux. store лежит в provider index.ts
  const tasks: Array<any> = useSelector( (state: initialStateType) => state.tasks)  
  const users: Array<any> = useSelector( (state: initialStateType) => state.users)

  const dispatch = useDispatch()

  useEffect( () => {
    async function extractTask() {
      try {
        const responseTasks: any = await axios('http://jsonplaceholder.typicode.com/todos')
        const dataTasksFromServer: Array<tasksType> = responseTasks.data
        dispatch(extractTasks(dataTasksFromServer))
      } catch(e) {
        console.log("tasks " + e)
      }
    }
    async function extractUser() {
      try {
        const responseUsers: any = await axios('http://jsonplaceholder.typicode.com/users')
        const dataUsersFromServer: Array<usersType> = responseUsers.data
        dispatch(extractUsers(dataUsersFromServer))
      } catch(e) {
        console.log("users extract mistake " + e)
      }
    }
    
    extractTask()
    extractUser()
  }, [])
  
  console.log(users)
  return (
    <SContainer>
      <Table tasks={tasks} />
    </SContainer>
  );
}

export default App;
