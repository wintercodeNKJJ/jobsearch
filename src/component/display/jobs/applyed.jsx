import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { NavLink} from "react-router-dom"
import { useStateContext } from "../../../context/context";
import { deleteApp } from "../../../queries/queries";
import { BsFillTrash3Fill } from "react-icons/bs";

const Applyed = ({info}) => {
  const { jobOfferDitails, setShowditail,notify } = useStateContext();
  console.log("JobOffer")
  
  // const [infodata, setInfoData] = useState()
  const [data, setData] = useState(info)
  console.log('info job',info)
  

  const filterterJob = (filter) =>{
    const fjob = info.filter((e)=>(
      e.title.toLowerCase().includes(filter.toLowerCase())
    ))
    console.log(fjob,filter)
    setData(fjob)
  }

  useEffect(() => {
    setData(info)
    console.log("jobs update",data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info])
  

  const deleteApplication = (id,name)=>{
    let user = JSON.parse(localStorage.getItem('user'))
    const infod = {user_id:user.id,job_id:id}
    deleteApp(infod).then(()=>{
      notify('succ',`${user.name} you have deleted your application to ${name}`)
    })
  }

  return (
    <>
      { data != null && info && 
        <div>
          <div className=" overflow-y-scroll h-screen relative">
            <div className="flex py-4 border-b backdrop-blur border-gray-200 sticky top-0">
              <div className="flex justify-between gap-2 px-3 w-full">
                <h1 className="text-2xl text-center w-52 text-blue-400">Your Jobs</h1>
                <input
                  type="text"
                  className="rounded-xl border px-2 w-full"
                  onChange={(e)=>(filterterJob(e.target.value))}
                  placeholder="Enter job title or location..."
                />
                <span className=" hover:bg-blue-400 rounded-lg p-1">
                  <AiOutlineSearch size={30} />
                </span>
              </div>
              
            </div>

            <div>
              {data.map((item, i) => (
              <NavLink to={`/MyJobs/${item.id}`}
                className={({isActive})=>(isActive?"flex justify-between border-b bg-blue-400 text-white rounded-xl m-1 items-center gap-2 pl-4":"flex justify-between border rounded-xl m-1 items-center gap-2 pl-4 shadow-md")}
                onClick={() => {
                  jobOfferDitails(item);
                  setShowditail(true);
                }}
                key={i}
              >
                <div className="flex items-center p-2 gap-2">
                  <div className="h-10 w-10 rounded-full bg-blue-500"></div>
                  <div className="text-left">
                    <h2 className="text-xl Roboto-medium">{item.title}</h2>
                    {item.dateline && (
                      <p className="text-xs ">Post/Profession</p>
                    )}
                  </div>
                </div>
                {item.dateline && (
                  <div className="flex items-center gap-2 p-2 text-sm text-gray-500">
                    <AiOutlineEye size={20} />
                    {item.views}
                    <span className="w-[1px] bg-gray-200 mx-1 h-[35px]"></span>
                    {item.dateline && (
                      <div className="flex items-center">
                        <span>{item.dateline}</span>
                        <span className="w-[1px] bg-gray-200 mx-1 h-[35px]"></span>
                      </div>
                    )}
                    <div
                      className={
                        item.favorite ? "text-red-500" : "text-gray-500"
                      }
                    >
                      <AiFillHeart size={20} />
                    </div>
                    <span className="w-[1px] bg-gray-200 mx-1 h-[35px]"></span>
                    <div className=" text-red-500 pr-2" onClick={()=>{deleteApplication(item.id,item.title)}}>
                      <BsFillTrash3Fill size={20}/>
                    </div>
                  </div>
                )}
                {item.location && (
                  <div className=" flex flex-col text-right text-xs Roboto-light p-3">
                    <h1>{item.location}</h1>
                    <a
                      href={"https://" + item.website}
                      className="text-blue-500"
                    >
                      {item.website}
                    </a>
                  </div>
                )}
              </NavLink>
              ))}
              <div className=" rounded-xl bg-red-500 m-2 text-3xl p-3 text-left text-white">
                <h1 className="Roboto-light">Publicity</h1>
              </div>
            </div>
          </div>
        </div> 
      }
    </>
  );
};

export default Applyed;

// {item.location && (
//   <div className="text-xs text-black flex gap-1 items-center">
//     <p className="rounded-full bg-green-300 p-1 px-2">
//       {
//         vacances.filter((obj) => obj.company === item.index)
//           .length
//       }
//     </p>{" "}
//     <p className="text-blue-500">jobs posted</p>
//   </div>
// )}