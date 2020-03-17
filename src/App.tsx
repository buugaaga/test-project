import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Table from './components/table'
import Form from './components/form'
import { thunkExtractTasks, thunkExtractUsers} from './actions/extractDatasAction'
import { usersType, IInitialStateType } from './types'

const SContainer = styled.div`
  display: flex;
  min-height: 300px;
  justify-content: center;
  align-content: center; 
`

const App = () => {

  // используем хуки react-redux. store лежит в provider index.ts
  const tasks: Array<any> = useSelector( (state: IInitialStateType) => state.tasks)  
  const users: Array<usersType> = useSelector( (state: IInitialStateType) => state.users)
 
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(thunkExtractTasks())
    dispatch(thunkExtractUsers())
  }, [dispatch])

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
