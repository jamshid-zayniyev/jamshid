import React from 'react'


// components
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Contact from '../components/Contact'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default Main