import React from 'react';
import './App.css';
import { Button, MantineProvider } from '@mantine/core';
import Checkbox from './checkbox';

function App() {
  return (
    <MantineProvider>
    <div>
     <Checkbox></Checkbox>
    </div>
    </MantineProvider>
  );
}

export default App;
