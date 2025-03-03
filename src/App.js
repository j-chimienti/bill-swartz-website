import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About'
import Testimonials from './Testimonials'
import Home from './Home'
import NavBar from './NavBar'
import UploadSwing from './UploadSwing'

function App() {
  return (
    <div
      className="bg-dark text-white"
      style={{
        minHeight: '100vh',
        height: '100vh',
      }}
    >
      <Router>
        <NavBar />
        <Routes style={{ height: '100%' }}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/upload' element={<UploadSwing />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
