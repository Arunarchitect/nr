import { useState } from 'react'
// import SideNav from './components/SideNav'
// import Main from './components/Main'
// import Donate from './components/Donate'
// import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import 'vite/modulepreload-polyfill'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      {/* <SideNav /> */}
      {/* <Main /> */}
      {/* <Donate /> */}
      {/* <About /> */}
    </div>
  )
}

export default App
