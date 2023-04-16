import React from 'react'
import "./app.css"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/Login/Login'
import Records from './components/records/Records'
import Emergency from './components/Emergency/Emergency'
import Ambulance from './components/Ambulance/Ambulance'
import Appointment from './components/appointment/Appointment'
import Reminder from './components/reminder/Reminder'
import Signup from './components/Login/Signup'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/records' element={<Records/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/ambulance' element={<Ambulance/>} />
        <Route path='/emergency' element={<Emergency/>} />
        <Route path='/reminder' element={<Reminder/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App