import React from 'react'
import Navbar from './navbar'
import Content from './content'
import Ditail from './ditails/ditail'

const Layout = () => {
  return (
    <div className='flex'>
      <div className=' h-screen min-w-[250px]'>
        <Navbar/>
      </div>
      <div className='w-full grid grid-cols-2'>
        <div><Content/></div>
        <div><Ditail/></div>
      </div>
    </div>
  )
}

export default Layout
