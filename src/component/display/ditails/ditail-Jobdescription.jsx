import React, { useEffect, useState } from 'react'
import mag from '../../../assets/job.jpg'
import { AiFillHeart, AiOutlineEye } from 'react-icons/ai'
import { useStateContext } from '../../../context/context'
import { apply } from '../../../queries/queries'
import { useNavigate } from 'react-router-dom'

const DitailJobdescription = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [role, setrole] = useState(null)
  const history = useNavigate()
  
  const { jobsdata,notify } = useStateContext();
  const [info, setInfo] = useState(jobsdata)
  useEffect(() => {
    if(!user){
      history('/Jobs')
    }else{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setrole(()=>(user.role !== 1 ? true : false));
      console.log('role',role)
    }
    setInfo(jobsdata)
  }, [jobsdata])
  
  console.log("info",info)

  const sendAplication = () =>{
    apply({
      user_id:JSON.parse(localStorage.getItem('user')).id,
      job_id:info.id,
      status:0
    }).then(()=>{
      notify('succ',JSON.parse(localStorage.getItem('user')).name+' applied to '+info.title,5000)
    })
  }
  return (
    <>
      {
        info && user && role !== null &&
        <div className="bg-base-200 px-3 h-screen text-left text-sm Roboto-light relative">
          <div className="flex justify-between border-b sticky top-0 backdrop-blur">
            <div className="flex items-center p-2 gap-2">
              <div className="h-10 w-10 rounded-full bg-blue-500"></div>
              <div>
                <p className="text-xs text-gray-400">{info.title} : {info.employerId}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 text-sm text-gray-500">
              <AiOutlineEye size={20} /> 20
              <span className="w-[1px] bg-gray-200 mx-1 h-[35px]"></span>
              <div className="text-red-400">
                <div
                  className={
                    false ? "text-red-500" : "text-gray-500"
                  }
                >
                  <AiFillHeart size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="text-left p-3">
            <h2 className="text-2xl Roboto-medium">{info.title}</h2>
          </div>
          <div className='my-2 grid grid-cols-1 md:grid-cols-2'>
            <div>
              <h1 className='Roboto-medium'>Job Description:</h1>
              <p>{info.description}</p>
            </div>
            <div>
                <img src={mag} alt="job" className=' rounded-xl bg-blue-400 h-52 w-full object-cover'/>
            </div>
          </div>
          <div className='my-2'>
            <h1 className='Roboto-medium'>Requirments</h1>
          {info.prerequest !== null ? info.prerequest.map(
                (item,j)=>(<p key={j}>{j+1}. {item}</p>)
            ):<p>No special requirments</p>}
          </div>
          <div className='my-2'>
            <h1 className='Roboto-medium'>Benefits</h1>
          {info.benefits !== null ? info.benefits.map(
                (item,j)=>(<p key={j}>{j+1}. {item}</p>)
            ):<p>No Benefits found</p>}
          </div>
          <div className='my-2'>
            <h1 className='Roboto-medium'>task</h1>
          {info.task !== null ? info.task.map(
                (item,j)=>(<p key={j}>{j+1}. {item}</p>)
            ):<p>No Tasks found</p>}
          </div>
          <div className='flex justify-between sticky bottom-0 p-4 backdrop-blur border-t border-gray-300'>
            <div className='flex gap-2 items-center'>
            {/* <h1 className='Roboto-medium text-lg hidden md:block'>This job requires a cv</h1> */}
            <input type="file" title='upload cv' className='border border-black p-1 items-center rounded-md w-3/4'/>
            </div>
            {role && 
              <button className='shadow-lg rounded-xl bg-green-400 px-4 py-2 font-bold' onClick={sendAplication}>Apply</button>
            }
          </div>
        </div>
      }
    </>
  )
}

export default DitailJobdescription
