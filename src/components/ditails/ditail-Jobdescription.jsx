import React from 'react'

const DitailJobdescription = ({info}) => {
    console.log(info)
  return (
    <div className=" text-left text-sm Roboto-light">
      <div className='my-2'>
        <h1 className='Roboto-medium'>About company:</h1>
        <p>{info.description}</p>
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
    </div>
  )
}

export default DitailJobdescription
