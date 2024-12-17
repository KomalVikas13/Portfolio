import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

function App() {

  return (
      <>
        <Navbar></Navbar>  
        <Home></Home>
        <AboutMe></AboutMe>
        <Skills></Skills>
      </>
  )
}

export default App
