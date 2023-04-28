import React from "react";
import { AiFillHeart, AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { HiFilter } from "react-icons/hi";
import { useStateContext } from "../context/context";

const Content = () => {
  const {displayData, ditailsindex, ditails,setShowditail} = useStateContext()

  return (
    <div className=" overflow-y-scroll h-screen relative">
      <div className="flex py-4 border-b backdrop-blur border-gray-200 sticky top-0">
        <div className="flex justify-between w-3/4 gap-2 px-3">
          <h1 className="text-xl text-blue-400">Site search</h1>
          <input type="text" className="w-1/2 bg-transparent rounded-xl px-2" />
          <span className="">
            <AiOutlineSearch size={30} />
          </span>
        </div>
        <span className="w-[1px] bg-gray-200 mx-1"></span>
        <div className="flex w-1/4 justify-center items-center gap-3 text-blue-400">
          <span>
            <HiFilter size={20} />
          </span>
          <select className="text-sm border-none bg-transparent p-2" multiple size={2} defaultValue="0">
            <option value="0">filter list</option>
            <option value="1">Igeniering</option>
            <option value="1">office</option>
            <option value="1">Hous</option>
            <option value="1">latest</option>
          </select>
        </div>
      </div>

      <div>
        {displayData.map((item,i) => (
          <div className={((i+1)===ditailsindex)?"flex justify-between border-b bg-blue-400":"flex justify-between border-b"} onClick={()=>{ditails(item); setShowditail(true)}}>
            <div className="flex items-center p-2 gap-2">
              <div className="h-10 w-10 rounded-full bg-blue-500"></div>
              <div className="text-left">
                <h2 className="text-xl Roboto-medium">{item.name}</h2>
                <p className="text-xs text-gray-400">Post/Profession</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 text-sm text-gray-500">
              <AiOutlineEye size={20} />{item.views}
              <span className="w-[1px] bg-gray-200 mx-1 h-[35px]"></span>
              {item.dateline &&
                <div className="flex items-center">
                  <span>{item.dateline}</span>
              <span className="w-[1px] bg-gray-200 mx-1 h-[35px]"></span>
                </div>
              }
              <div className={item.favorite?'text-red-500':'text-gray-500'}>
              <AiFillHeart size={20} />
              </div>
            </div>
          </div>
        ))}

        <div className=" rounded-xl bg-red-500 m-2 text-3xl p-3 text-left text-white">
          <h1 className="Roboto-light">Publicity</h1>
        </div>

      </div>
    </div>
  );
};

export default Content;
