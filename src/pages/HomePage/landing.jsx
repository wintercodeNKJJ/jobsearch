import React from 'react'
import { useStateContext } from '../../context/context';

const Landing = () => {
  const {setShowditail} = useStateContext()
  return (
    <div className=' h-screen bg-base-300 bg-[url("/src/assets/bgwelcom.jpg")]'>
      <div className='h-full w-full p-3 flex flex-col items-center justify-center backdrop-blur'>
        <div className='flex flex-col items-baseline p-3 text-left gap-4 bg-base-200 duration-1000 bg-opacity-70 rounded-lg shadow w-full'>
          <h1 className='text-5xl font-bold text-blue-500'>Welcom to JobSearch</h1>
          <p className=' text-xl font-bold'>A website that propose to you the latest joboffers in every domain of activity, be it causual or professional, with the possibelity of direct application, take a tour and find yourself a job</p>

          <p className=' rounded-lg bg-blue-200 p-2'>If you are on your mobile phone,<u className=' text-blue-500'>hit the arrow at the top</u> to display the menu</p>
        </div>
      <button type="button" className='bg-base-200 duration-1000 bg-opacity-70 rounded-lg shadow p-3 m-4 text-lg font-bold text-blue-500' onClick={()=>{setShowditail(true);}}>View Instructions</button>
      </div>
    </div>
  )
}

export default Landing