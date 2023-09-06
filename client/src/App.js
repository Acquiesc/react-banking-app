import React, { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [balance, setBalance] = useState(1000)
  const [transactions, setTransactions] = useState([])

  return (
    <Router>
        <Navbar />

        <div className="content">
            <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
        </div>

        <Footer />
    </Router>
  )
}

export default App