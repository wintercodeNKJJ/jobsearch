import React from 'react'

const DitailsHolder = () => {
  return (
    <div className=' overflow-y-scroll h-screen bg-base-300 bg-[url("/src/assets/bgwelcom.jpg")]'>
      <div className='h-full w-full p-3 mt-5 flex flex-col gap-3 items-center justify-center backdrop-blur'>
        <div className='flex flex-col items-baseline p-3 text-left gap-4 bg-base-200 duration-1000 bg-opacity-70 rounded-lg shadow w-full'>
          <h1 className='text-3xl font-bold text-blue-500'>Instructions</h1>
        </div>

        <div className='flex flex-col items-baseline p-3 text-left gap-4 bg-base-200 duration-1000 bg-opacity-70 rounded-lg shadow w-full'>
          <h1 className='text-3xl font-bold text-blue-500'>1. Creat an account</h1>
          <p className=' text-xl font-bold'>To view the jobes ditails of this website you will have to create an account</p>
          <p className=' rounded-lg bg-blue-200 p-2'><u className=' text-blue-500'>Click on the Login button in the menu</u> then on Register</p>
        </div>

        <div className='flex flex-col items-baseline p-3 text-left gap-4 bg-base-200 duration-1000 bg-opacity-70 rounded-lg shadow w-full'>
          <h1 className='text-3xl font-bold text-blue-500'>2. Select and Apply</h1>
          <p className=' text-xl font-bold'>If you have already created your account then select a job offer and view its ditails</p>
          <p className=' rounded-lg bg-blue-200 p-2'><u className=' text-blue-500'>Click on the Jobs button</u> in the Menu then Select a job</p>
        </div>

        <div className='flex flex-col items-baseline p-3 text-left gap-4 bg-base-200 duration-1000 bg-opacity-70 rounded-lg shadow w-full'>
          <h1 className='text-3xl font-bold text-blue-500'>3. Apply and follow-up</h1>
          <p className=' text-xl font-bold'>once you have selected the job, as a jobseeker you have the opportunity to apply to the job you have selected</p>
          <p className=' rounded-lg bg-blue-200 p-2'><u className=' text-blue-500'>Click on the Apply button bellow the job ditals</u>to Apply</p>
        </div>
      </div>
    </div>
  )
}

export default DitailsHolder