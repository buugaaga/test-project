import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'

import Table from './components/table'
import Form from './components/form'
import { extractDatas } from './actions/extractDatasAction'
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
  const users: Array<usersType> = useSelector( (state: initialStateType) => state.users)

  const dispatch = useDispatch()

  useEffect( () => {

    //extract datas right in component
    async function extractDatasFunc() {
      try {
        const responseTasks: any = await axios('http://jsonplaceholder.typicode.com/todos')
        const responseUsers: any = await axios('http://jsonplaceholder.typicode.com/users')

        const dataTasksFromServer: Array<tasksType> = responseTasks.data
        const dataUsersFromServer: Array<any> = responseUsers.data

        dispatch(extractDatas(dataTasksFromServer, dataUsersFromServer))
      } catch(e) {
        console.log("extract datas from server " + e)
      }
    }
    extractDatasFunc()
  }, [])
  
  return (
    <SContainer>
      <Switch>
        <Route 
          exact
          path='/' 
          render={() =>(
            <Table tasks={tasks} users={users} />
          )}
        />
        <Route 
          path='/form/:userId' 
          render={() => (
            <Form users={users} tasks={tasks} />
          )}  
        />        
      </Switch>
    </SContainer>
  );
}

export default App;
