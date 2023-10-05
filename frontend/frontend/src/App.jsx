import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'

import 'vite/modulepreload-polyfill'

function App() {

  return (
    <div>
      <SideNav />
      <Main />
    </div>
  )
}

export default App
