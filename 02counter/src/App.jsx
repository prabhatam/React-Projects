// this project will teach us the importance of useState and its uses


import { useState } from "react"

import './App.css'

function App() {

  // here counter and setCounter is just name, it can be other also
  // here counter is the variable
  // setCounter is the function to update the value of counter variable
  // what we give the value to setCounter, it makes the value of the counter variable
  // 0 inside useState is the initialized value
  // wherever the counter variable is called updated value will be linked
  const [counter, setCounter] = useState(0)

  // created arrow function to add/increase the counter value
  const addValue = ()=>{
    /*
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    */

    // interview related question
    // here we expected that when we click on add it should increase by 4 but react does not work like that
   // this is due the concept of batching
   // Batching in React refers to the process of grouping multiple state updates or DOM updates together into a single render cycle, 
   // rather than updating the DOM for each individual state change. This optimization improves the performance of React applications by reducing the number of renders and reflows.
   // how to solve this issue??
   // setCounter has a callback function

    setCounter((counter)=>{return counter+1});
    setCounter((counter)=>{return counter+1});
    setCounter((counter)=>{return counter+1});

  }

  // created arrow function to sub/decrease the counter value
  const subValue = ()=>{
    setCounter(counter-1)
  }
  return (
    <>
      {/* here we have taken counter at 3 places to check that when we update at a place then whether it is updating at all places or not */}
      <h1>React course with Prabhat {counter}</h1>
      <h2>Counter Value {counter}</h2>

      <button
        onClick={addValue}
      >Add</button>

      <button
        onClick={subValue}
      >Subtract</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
