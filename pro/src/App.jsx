import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Forms from './components/Forms'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Forms" element={<Forms />}></Route>
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App