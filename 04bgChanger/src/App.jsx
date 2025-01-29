import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  function changeColor(color){
    setColor(color)
  }

  return (
    <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' >
          
          {/* Reset button */}
          <button 
          // onClick={()=>{return changeColor('red')}}  we can use any of these two ways
          onClick={()=>{return setColor('olive')}}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black ' style={{background: 'olive'}}>
            Reset
          </button>

          {/* Red button */}
          <button 
          // onClick={()=>{return changeColor('red')}}  we can use any of these two ways
          onClick={()=>{return setColor('red')}}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black 'style={{background: 'red'}}>
            Red
          </button>
          
          {/* Green button */}
          <button 
          onClick={()=>{return changeColor('green')}}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{background: 'green'}}>
            Green
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
