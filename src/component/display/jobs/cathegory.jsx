import React, { useState } from 'react'
import { AiFillHeart, AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { HiFilter } from "react-icons/hi";
import { useStateContext } from "../../../context/context";
import { NavLink, useNavigate } from 'react-router-dom';


const Cathegory = ({info}) => {
    const { jobOfferDitails, setShowditail } =
    useStateContext();
    const history = useNavigate()
    console.log(info)
    const [cath1, setCath1] = useState(info.joboffers.filter((x)=>(x.cathegory === 1)))
    const [cath2, setCath2] = useState(info.joboffers.filter((x)=>(x.cathegory === 2)))
    const [cath3, setCath3] = useState(info.joboffers.filter((x)=>(x.cathegory === 3)))
     
    console.log(cath1);
    console.log(cath2);
    console.log(cath3);
  return (
    <div>
      {
        info &&
        <div>
        <div className=" overflow-y-scroll h-screen relative">
          <div className="flex py-4 border-b backdrop-blur border-gray-200 sticky top-0">
            <div className="flex justify-between w-3/4 gap-2 px-3">
              <h1 className="text-xl text-blue-400">Site search</h1>
              <input
                type="text"
                className="w-1/2 bg-transparent rounded-xl px-2"
              />
              <span className="">
                <AiOutlineSearch size={30} />
              </span>
            </div>
            <span className="w-[1px] bg-gray-200 mx-1"></span>
            <div className="flex w-1/4 justify-center items-center gap-3 text-blue-400">
              <span>
                <HiFilter size={20} />
              </span>
              <select
                className="text-sm border-none bg-transparent p-2"
                multiple
                size="1"
              >
                <option value="0">filter list</option>
                <option value="1">Igeniering</option>
                <option value="1">office</option>
                <option value="1">Hous</option>
                <option value="1">latest</option>
              </select>
            </div>
          </div>

          <div>
            <div className=" h-8 rounded-xl bg-blue-500 m-2 text-xl px-3 text-left text-white flex items-center">
              <h1 className="Roboto-light">Cathegory 1</h1>
            </div>
            {cath1 && cath1.map((item, i) => (
              <NavLink to={`/Cathegory/${item.id}`}
              className={({isActive})=>(isActive?"flex justify-between border-b bg-blue-400 text-white rounded-xl m-1 items-center gap-2 pl-4":"flex justify-between border rounded-xl m-1 items-center gap-2 pl-4 shadow-md")}
              onClick={() => {
                jobOfferDitails(item);
                setShowditail(true);
                history(`/Cathegory/ditails/${item.id}`)
              }}
              key={i}
            >
                <div className="flex items-center p-2 gap-2">
                  <div className="h-10 w-10 rounded-full bg-blue-500"></div>
                  <div className="text-left">
                    <h2 className="text-xl Roboto-medium">{item.title}</h2>
                    {item.dateline && (
                      <p className="text-xs text-gray-400">Post/Profession</p>
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
              <div className=" h-8 rounded-xl bg-blue-500 m-2 text-xl px-3 text-left text-white flex items-center">
                <h1 className="Roboto-light">Cathegory 2</h1>
              </div>
            {cath2 && cath2.map((item, i) => (
              <NavLink to={`/Cathegory/${item.id}`}
              className={({isActive})=>(isActive?"flex justify-between border-b bg-blue-400 text-white rounded-xl m-1 items-center gap-2 pl-4":"flex justify-between border rounded-xl m-1 items-center gap-2 pl-4 shadow-md")}
              onClick={() => {
                jobOfferDitails(item);
                setShowditail(true);
                history(`/Cathegory/ditails/${item.id}`)
              }}
              key={i}
            >
                <div className="flex items-center p-2 gap-2">
                  <div className="h-10 w-10 rounded-full bg-blue-500"></div>
                  <div className="text-left">
                    <h2 className="text-xl Roboto-medium">{item.title}</h2>
                    {item.dateline && (
                      <p className="text-xs text-gray-400">Post/Profession</p>
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
              <div className=" h-8 rounded-xl bg-blue-500 m-2 text-xl px-3 text-left text-white flex items-center">
                <h1 className="Roboto-light">Cathegory 3</h1>
              </div>
            {cath3 && cath3.map((item, i) => (
              <NavLink to={`/Cathegory/${item.id}`}
              className={({isActive})=>(isActive?"flex justify-between border-b bg-blue-400 text-white rounded-xl m-1 items-center gap-2 pl-4":"flex justify-between border rounded-xl m-1 items-center gap-2 pl-4 shadow-md")}
              onClick={() => {
                jobOfferDitails(item);
                setShowditail(true);
                history(`/Cathegory/ditails/${item.id}`)
              }}
              key={i}
            >
                <div className="flex items-center p-2 gap-2">
                  <div className="h-10 w-10 rounded-full bg-blue-500"></div>
                  <div className="text-left">
                    <h2 className="text-xl Roboto-medium">{item.title}</h2>
                    {item.dateline && (
                      <p className="text-xs text-gray-400">Post/Profession</p>
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
    </div>
  )
}

export default Cathegory

// {item.location && (
//   <div className="text-xs text-black flex gap-1 items-center">
//     <p className="rounded-full bg-green-300 p-1 px-2">
//       {
//         vacances.filter(
//           (obj) => obj.company === item.index
//         ).length
//       }
//     </p>{" "}
//     <p className="text-blue-500">jobs posted</p>
//   </div>
// )}