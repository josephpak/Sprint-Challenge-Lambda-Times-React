import React from 'react';
import authenticate from './components/authenticate/authenticate'
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login'

const ControlledDisplay = authenticate(HomePage)(Login)

const App = () => {
  return (
    <div className="App">
      <ControlledDisplay />
    </div>
  );
}

export default App;
