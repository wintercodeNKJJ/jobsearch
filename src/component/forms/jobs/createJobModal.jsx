import React, { useState } from "react";
import { createJob } from "../../../queries/queries";
import { useStateContext } from "../../../context/context";

const CreateJobModal = () => {

  const {notify} = useStateContext()
  // const [queryError, setQueryError] = useState({})
  const [benef, setBenef] = useState([' '])
  const [requir, setRequir] = useState([' '])
  const [task, setTask] = useState([' '])

  const [ben, setBen] = useState('')
  const [tas, setTas] = useState('')
  const [req, setReq] = useState('')

  const add = (list)=>{
    switch (list) {
      case 1:
        setBenef([...benef,''])
        break;
      case 2:
        setRequir([...requir,''])
        break;
      case 3:
        setTask([...task,''])
        break;
      default:
        break;
    }
  }
  
  const remove = (list,index)=>{
    switch (list) {
      case 1:
        setBenef([...benef.slice(0,index),...benef.slice(index+1,benef.length)])
        break;
      case 2:
        setRequir([...requir.slice(0,index),...requir.slice(index+1,requir.length)])
        break;
      case 3:
        setTask([...task.slice(0,index),...task.slice(index+1,task.length)])
        break;
      default:
        break;
    }
  }


  // Job offer values
  const [job, setJob] = useState({
    title:'',
    description:'',
    employerId: JSON.parse(localStorage.getItem('user')).id,
    cathegory: 0,
    dateline:'',
    benefits: benef.join(";"),
    prerequest: requir.join(";"),
    task: task.join(";")
  })

  console.log(task,benef,requir)
  console.log(job)

  //creating a job
  
  const CreateJob = (event)=>{
    event.preventDefault();

    setJob({...job,benefits:ben,task:tas,prerequest:req})
    console.log("new job",job)
    createJob(job).then((res)=>{
      notify('success',`${job.title} has been created`,7000)
    })
    closeMod()
  }

  const closeMod = () => {
    console.log("mode closed")
    window.my_modal_3.close()
  }

  return (
    <div>
      <dialog id="my_modal_3" className="bg-white bg-opacity-90 rounded-xl md:w-[800px] w-full">
        <form onSubmit={CreateJob} >
          <h3 className="font-bold text-2xl m-2 flex justify-start">Create Job Offer</h3>
          <div className="grid grid-cols-2">
            <div>

              <div className="flex justify-between mx-2 items-center">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" className="input border-gray-400 w-2/3" onChange={(e)=>{setJob({
                    ...job, 
                    [e.target.name]:e.target.value
                })}}/>
              </div>
              
              <div className="flex justify-between mt-2 mx-2 items-center">
                <label htmlFor="password">Description</label>
                <textarea type="text" name="description" className="input border-gray-400 w-2/3 h-20" onChange={(e)=>{setJob({
                    ...job,
                    [e.target.name]:e.target.value
                })}}/>
              </div>

              <div className="flex justify-between mt-2 mx-2 items-center">
                <label htmlFor="cathegory">Cathegory</label>
                <select type="text" name="cathegory" className="input border-gray-400 w-2/3" onChange={(e)=>{setJob({
                    ...job,
                    [e.target.name]:parseInt(e.target.value)
                })}}>
                  <option value="1">Office</option>
                  <option value="2">Civil Eginier</option>
                  <option value="3">Manager</option>
                </select>
              </div>

              <div className="flex justify-between mt-2 mx-2 items-center">
                <label htmlFor="password">Dateline</label>
                <input type="date" name="dateline" className="input border-gray-400 w-2/3" onChange={(e)=>{setJob({
                    ...job,
                    [e.target.name]:e.target.value
                })}}/>
              </div>
            </div>
            <div>
              <div className=" flex justify-between mx-1 items-center py-1 border-b">
                <label htmlFor="password">Benefits</label>
                <button type="button" onClick={()=>add(1)} className="btn">add</button>
              </div>
              <div>
                {benef.map((item,key)=>(
                  <div key={key} className="mt-1 mx-1 items-center input-group">
                    <textarea defaultValue={item} name="dateline" className="input border-gray-400 w-4/5" onChange={(e)=>{setBenef([...benef.slice(0,key),e.target.value,...benef.slice(key+1,benef.length)]); setBen(benef.join(";")); setJob({...job,benefits:ben})}}/>
                    <button type="button" onClick={()=>remove(1,key)} className="btn w-1/5">remove</button>
                  </div>
                ))}
              </div>

              <div className=" flex justify-between mx-1 items-center py-1 border-b">
                <label htmlFor="password">Requirments</label>
                <button type="button" onClick={()=>add(2)} className="btn">add</button>
              </div>
              <div>
                {requir.map((item,key)=>(
                  <div key={key} className="mt-1 mx-1 items-center input-group">
                    <textarea defaultValue={item} name="dateline" className="input border-gray-400 w-4/5" onChange={(e)=>{setRequir([...requir.slice(0,key),e.target.value,...requir.slice(key+1,requir.length)]); setReq(requir.join(";")); setJob({...job,prerequest:req})}}/>
                    <button type="button" onClick={()=>remove(2,key)} className="btn w-1/5">remove</button>
                  </div>
                ))}
              </div>

              <div className=" flex justify-between mx-1 items-center py-1 border-b">
                <label htmlFor="password">Tasks</label>
                <button type="button" onClick={()=>add(3)} className="btn">add</button>
              </div>
              <div>
                {task.map((item,key)=>(
                  <div key={key} className="mt-1 mx-1 items-center input-group">
                    <textarea defaultValue={item} name="dateline" className="input border-gray-400 w-4/5" onChange={(e)=>{setTask([...task.slice(0,key),e.target.value,...task.slice(key+1,task.length)]); setTas(task.join(";")); setJob({...job,task:tas})}}/>
                    <button type="button" onClick={()=>remove(3,key)} className="btn w-1/5">remove</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-end justify-between mx-2 py-2">
            {/* if there is a button in form, it will close the modal */}
            <div className="flex items-center">
              <button type="reset" className="btn btn-accent">Reset</button>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn btn-success" type="submit" >Create</button>
              <button type="button" onClick={closeMod} className="btn" formMethod="dialog">Close</button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default CreateJobModal;
