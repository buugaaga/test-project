import React from 'react';
import styled from '@emotion/styled'

import Table from './components/table'

const SContainer = styled.div`
  display: flex;
  min-height: 300px;
  justify-content: center;
  align-content: center;
  margin-top: 100px;
`

const App = () => {
  return (
    <SContainer>
      <Table />
    </SContainer>
  );
}

export default App;
