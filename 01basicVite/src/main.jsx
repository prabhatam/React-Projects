import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// similar to making a function in custom React and rendering it 
// we here tried to create a function right here and render it instead of creating a separate component for it
// but remember its not a good practice.
function MyApp(){
  return (
    <h1>Create React App</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />
  </StrictMode>,
)
