import React from 'react';
import './App.css';
import { Button, Box } from '../../components';

function App() {
  return (
    <div className="App">
      <Box label={'A box'}></Box>
      <Button handleClick={() => {}} label={'This is a button'}></Button>
    </div>
  );
}

export default App;
