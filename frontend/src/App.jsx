import { useState } from 'react'
//import './App.css'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'

function App() {
  //const [count, setCount] = useState(0)

  return (
      <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       </Routes>
       </BrowserRouter> 
    
      
      </div>
  )
}

export default App
