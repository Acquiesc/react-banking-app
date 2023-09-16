import React, { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ProfileTopNav from './components/ProfileNavTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Index from './pages/Index';
import Login from './components/auth/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(() => {
      const savedData = localStorage.getItem('isLoggedIn');
      const initialValue = JSON.parse(savedData)
      return initialValue ? initialValue : false
  })

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
  }, [isLoggedIn])

  return (
    <Router>
        { isLoggedIn ? <ProfileTopNav /> : <Navbar isLoggedIn={isLoggedIn} /> }

        <div className="content">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login setIsLoggedIn = { setIsLoggedIn }/>} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Index />} />
            </Routes>
        </div>

        <Footer />
    </Router>
  )
}

export default App