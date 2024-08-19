import React from 'react'
import Navbar from './component/navbar/Navbar'
import Header from './component/navbar/Header'
import WidgteBoxcontainer from './component/widget/WidgteBoxcontainer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      < Header />
      <div className='bg-cyan-100 h-full'>
        <Navbar />
        <WidgteBoxcontainer />
      </div>
      <Outlet/>
    </div>
  )
}

export default App
