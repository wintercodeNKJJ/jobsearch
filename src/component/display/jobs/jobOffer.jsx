import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom"
import { useStateContext } from "../../../context/context";

const JobOffer = ({info}) => {
  const { jobOfferDitails, setShowditail } = useStateContext();
  const history = useNavigate()

  useEffect(() => {
    
  }, [info])
  
  
  // const [infodata, setInfoData] = useState()
  const [data, setData] = useState(info)

  // sorting
  console.log('info job',info)

  const filterterJob = (filter) =>{
    const fjob = info.joboffers.filter((e)=>(
      e.title.toLowerCase().includes(filter.toLowerCase())
    ))
    console.log('filtered ordered jobs',fjob.sort((a,b)=>{
      let fa = a.title.toLowerCase()
      let fb = b.title.toLowerCase()
  
      if(fa<fb){return -1}
      if(fa>fb){return 1}
      return 0
    }))
    setData({...data,joboffers:fjob})
  }

  return (
    <>
      { data != null && 
        <div>
          <div className=" overflow-y-scroll h-screen relative">
            <div className="flex py-4 border-b backdrop-blur border-gray-200 sticky top-0">
              <div className="flex justify-between gap-2 px-3 w-full">
                <h1 className="text-2xl text-center w-52 text-blue-400">Site search</h1>
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
              {data.joboffers.map((item, i) => (
              <NavLink to={`/Jobs/${item.id}`}
                className={({isActive})=>(isActive?"flex justify-between border-b bg-blue-400 text-white rounded-xl m-1 items-center gap-2 pl-4":"flex justify-between border rounded-xl m-1 items-center gap-2 pl-4 shadow-md")}
                onClick={() => {
                  jobOfferDitails(item);
                  setShowditail(true);
                  history(`/Jobs/${item.id}`)
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

export default JobOffer;

// const el = [
//   {title:"aa"},
//   {title:"ca"},
//   {title:"ba"},
//   {title:"ea"},
// ]

// console.log("element sorting",el.sort((a,b)=>{
//   let fa = a.title.toLowerCase()
//   let fb = b.title.toLowerCase()

//   if(fa<fb){return -1}
//   if(fa>fb){return 1}
//   return 0
// }))