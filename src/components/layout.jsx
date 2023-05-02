import React, { useEffect } from 'react'
import Navbar from './navbar'
import Content from './content'
import Ditail from './ditails/ditail'
import { BsArrowLeft,BsArrowRight } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { useStateContext } from '../context/context'

const Layout = () => {
  const{showditail,setShowditail,theme,showNav,setshowNav} = useStateContext()

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme',theme)
  }, [theme])

  return (
    <div className='flex relative'>
      <div className={showNav?'rounded-xl z-20 absolute md:hidden top-2 left-2 backdrop-blur p-2 translate-x-56 transition-all duration-500 border border-gray-300':'rounded-xl z-20 absolute md:hidden top-2 left-2 backdrop-blur p-2 transition-all duration-500 border border-gray-300'} onClick={()=>(setshowNav(!showNav))}>{showNav?<BsArrowLeft size={20}/>:<BsArrowRight size={20}/>}</div>
      <div className={showNav?'h-screen min-w-[250px] absolute z-10 bg-gray-300 md:static transition-all duration-500':' h-screen min-w-[250px] absolute z-10 bg-gray-300 md:static md:translate-x-0 -translate-x-full transition-all duration-500'}>
        <Navbar/>
      </div>
      <div className='w-screen md:w-full grid grid-cols-1 md:grid-cols-2 h-screen relative bg-white'>
        <div className=' col-span-1 md:col-span-1'><Content/></div>
        <div className={showditail?'rounded-xl z-20 absolute top-2 right-1/2 backdrop-blur border border-gray-200 p-2 transition-all duration-500 md:hidden':'rounded-xl z-20 absolute top-2 right-1/2 backdrop-blur border border-gray-200 p-2 transition-all duration-500 hidden'} onClick={()=>(setShowditail(false))}><MdClose size={20}/></div>
        <div className={showditail?' absolute md:static w-screen md:w-full duration-500':' absolute md:static md:translate-x-0 w-screen md:w-full translate-x-full transition-all duration-500'}><Ditail/></div>
      </div>
    </div>
  )
}

export default Layout
