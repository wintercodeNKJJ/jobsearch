import React from 'react'
import mag from '../../assets/job.jpg'

const DitailJobdescription = ({info}) => {
  return (
    <div className=" text-left text-sm Roboto-light relative">
      <div className='my-2 grid grid-cols-1 md:grid-cols-2'>
        <div>
        <h1 className='Roboto-medium'>About company:</h1>
        <p>{info.description}</p>
        </div>
        <div>
            <img src={mag} alt="job" className=' rounded-xl bg-blue-400 h-52 w-full object-cover'/>
        </div>
      </div>
      <div className='my-2'>
        <h1 className='Roboto-medium'>Requirments</h1>
      {info.requirement.map(
            (item,j)=>(<p key={j}>{j+1}. {item}</p>)
        )}
      </div>
      <div className='my-2'>
        <h1 className='Roboto-medium'>Benefits</h1>
      {info.benefits.map(
            (item,j)=>(<p key={j}>{j+1}. {item}</p>)
        )}
      </div>
      <div className='my-2'>
        <h1 className='Roboto-medium'>task</h1>
      {info.tasks.map(
            (item,j)=>(<p key={j}>{j+1}. {item}</p>)
        )}
      </div>
      <div className='flex justify-between sticky bottom-0 p-4 backdrop-blur border-t border-gray-300'>
        <div className='flex gap-2 items-center'>
        <h1 className='Roboto-medium text-lg hidden md:block'>This job requires a cv</h1>
        <input type="file" title='upload cv' className='border border-black p-1 items-center rounded-md w-3/4'/>
        </div>
        <button className='shadow-lg rounded-xl bg-green-400 px-4 py-2 font-bold'>Apply</button>
      </div>
    </div>
  )
}

export default DitailJobdescription
