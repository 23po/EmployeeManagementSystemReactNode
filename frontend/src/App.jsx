import { useState } from 'react'
//import './App.css'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Employee from './Employee'
import Profile from './Profile'
import Home from './Home'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'
import Start from './Start'
import EmployeeDetail from './EmployeeDetail'
import EmployeeLogin from './EmployeeLogin'

function App() {
  //const [count, setCount] = useState(0)

  return (
      <div>
       <BrowserRouter>
       <Routes>
      <Route path='/' element={<Dashboard/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='/employee' element={<Employee/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/create' element={<AddEmployee/>}></Route>
        <Route path='/employeeEdit/:id' element={<EditEmployee/>}></Route>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/start' element={<Start/>}></Route>
      <Route path='/employeeDetail' element={<EmployeeDetail/>}></Route>
      <Route path='/employeeLogin' element={<EmployeeLogin/>}></Route>
       
       </Routes>

       </BrowserRouter> 
    
      
      </div>
  )
}

export default App
