import React from 'react';
import './App.css';
import Increament from './components/Increament'
import Counter from './components/Counter'
import GlobalProvider from './context/GlobalState'
import Decreament from './components/Decreament';
import Reset from './components/Reset';

function App() {
  return (
    <GlobalProvider>
      <Counter />
      <Increament />
      <Decreament />
      <Reset />
    </GlobalProvider>
  );
}

export default App;
