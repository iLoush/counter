import React from 'react';
import './App.css';
import CounterClass from './CounterClass'
import CounterFunc from './CounterFunc'

function App() {
  return (
    <>
      Counter 1 (using class)
      <CounterClass initialCount={0} />

      Counter 2 (using function)
      <CounterFunc initialCount={0} />
    </>
  );
}

export default App;
