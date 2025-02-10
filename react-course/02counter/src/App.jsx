import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(15) 
  // counter is a variable
  // setCounter is a method

  const addValue = () => {
    setCounter(counter + 1)   
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React Course {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <button
      onClick={removeValue}>Remove value</button>
      <p>fotter: {counter}</p>
    </>
  )
}

export default App


