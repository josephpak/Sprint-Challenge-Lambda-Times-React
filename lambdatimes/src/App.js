import React from 'react';
import authenticate from './components/authenticate/authenticate'
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login'
import styled from 'styled-components';

const ControlledDisplay = authenticate(HomePage)(Login)

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`

const App = () => {
  return (
    <AppWrapper>
      <ControlledDisplay />
    </AppWrapper>
  );
}

export default App;
