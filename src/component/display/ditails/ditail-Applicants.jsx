import React from 'react'
import { useStateContext } from '../../../context/context'

const JobApplicants = () => {
    const {applicants} = useStateContext()
  return (
    <>
        {
            applicants &&
            <div>
                <div className="bg-base-200 px-3 h-screen text-left text-sm Roboto-light relative">
                    <div className="flex justify-between border-b sticky top-0 backdrop-blur">
                        <div className="flex items-center p-2 gap-2">
                        <div>
                            <p className="text-3xl font-bold text-blue-400">Candidats who applied to {applicants.job.title}</p>
                        </div>
                        </div>
                    </div>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 p-1'>
                    {
                        applicants.users.map((item,key)=>(
                                <div className='border rounded-lg shadow-lg bg-base-300 p-2'>
                                    <div className='flex w-full'>
                                        <div className="h-20 w-20 rounded-full bg-blue-500"></div>
        
                                        <div className='flex flex-col p-1 gap-1 w-3/5'>
                                            <div className='flex justify-between'><h2 className=' font-bold' >name:</h2> <p>{item.name}</p></div>
                                            <div className='flex justify-between'><h2 className=' font-bold' >age:</h2> <p>{item.birthdate}</p></div>
                                            <div className='flex justify-between'><h2 className=' font-bold' >phone:</h2> <p>{item.phone}</p></div>
                                        </div>
                                    </div>
                                    <div className='border-b py-2'></div>
                                    <div className='flex flex-col justify-between'>
                                        <div className='flex justify-between'><h2 className=' font-bold' >Cathegory:</h2> <p>{item.cathegory}</p></div>
                                        <div className='flex justify-between'><h2 className=' font-bold' >Address:</h2> <p>{item.addresse}</p></div>
                                        <div className='flex justify-between'><h2 className=' font-bold' >Statuse:</h2> <p>Pending</p></div>
                                        <div className='flex justify-between'><h2 className=' font-bold' >Applications:</h2> <p>5</p></div>
                                        <div className='flex justify-between p-1 rounded-lg bg-base-200'>
                                            <button className='btn btn-success btn-sm'>Accept</button>
                                            <button className='btn btn-error btn-sm'>Decline</button>
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                    </div>
                </div>
                </div>
        }
    </>
  )
}

export default JobApplicants
