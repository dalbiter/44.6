import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SimpleCounter from './SimpleCounter';
import NumbersList from './NumbersList';

function App() {

  return (
    <>
      <NumbersList />
      <SimpleCounter />    
    </>
  )
}

export default App