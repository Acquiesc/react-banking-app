import React, { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getUsers } from './actions/users';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Index from './pages/Index';
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {
  const LOCAL_STORAGE_KEY = 'users.reactbankapp'
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (storedUser) {
        setUser(storedUser);
      }
    } catch (error) {
      console.error('Error retrieving and parsing data from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
    }
  }, [user]);

  return (
    <Router>
        <Navbar user={ user } setUser={setUser} />

        <div className="content">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login user={ user } setUser={ setUser } />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile user={user} />} />
              <Route path="/logout" element={<Index />} />
            </Routes>
        </div>

        <Footer />
    </Router>
  )
}

export default App