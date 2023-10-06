import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import Donate from './components/Donate'

import 'vite/modulepreload-polyfill'

function App() {

  return (
    <div>
      <SideNav />
      <Main />
      <Donate />
    </div>
  )
}

export default App
