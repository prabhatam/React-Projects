// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let user = {
    name: 'deviprasad',
    age: 24,
    address: {
      city: 'ballia',
      state: 'up',
      country: 'india'
    }
  }

  let newArr = [1,2,3,4,5];

  return (
    <>
    {/* we learned how to include css */}
      <h1 className='text-3xl bg-green-500 p-3 rounded-md font-bold m-2'> Vite with Tailwind</h1>

    {/* here we are passing the parameter in the components which is props */}
    {/* we can pass object, array, url, string, etc... */}
      <Card username= "prabhat" />
      <Card username='John cena' post='staff engineer' />
      {/* here we saw how to pass an object */}
      <Card user={user} />
      {/* lets see how to pass an array */}
      <Card myArr = {newArr} />
    </>
  )
}
export default App
