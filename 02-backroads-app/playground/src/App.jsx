/*
  Alternative Approach (optional)
  - fix the style for PageLinks


******************************

  1. PageLinks


*/

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Tours from './components/Tours'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  )
}

export default App
