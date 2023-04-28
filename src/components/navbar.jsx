import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsBuildingsFill, BsMoonFill, BsPersonFill, BsPersonFillDown, BsPersonFillUp, BsSunFill } from 'react-icons/bs'
import { FaIndustry } from 'react-icons/fa'
import { MdCategory, MdFolderShared, MdWork } from 'react-icons/md'
import { HiMail } from 'react-icons/hi'
import { useStateContext } from "../context/context";

const Navbar = () => {
  const{logedin,logedout,login,logout,display,displaycontent} = useStateContext()
  return (
    <div className=" h-screen bg-gray-100 flex flex-col align-middle p-4">
      <div className="flex align-middle gap-4 h-fit min-w-[250px]">
        <h1 className=" text-3xl Roboto">Job search</h1>
        <select
          className="Roboto-light border bg-transparent border-black rounded-lg "
          defaultValue="en"
        >
          <option value="en">en</option>
          <option value="en">fr</option>
        </select>
      </div>
      <div className="min-h-[56px]"></div>
      <div className="flex flex-col gap-2">
        <div className={displaycontent===1?"rounded-xl p-2 w-full bg-blue-400 flex items-center gap-2 pl-4 text-white":"rounded-xl p-2 w-full bg-white flex items-center gap-2 pl-4"} onClick={()=>(display('vac'))}><MdWork size={20}/> Vacances</div>
        <div className={displaycontent===2?"rounded-xl p-2 w-full bg-blue-400 flex items-center gap-2 pl-4 text-white":"rounded-xl p-2 w-full bg-white flex items-center gap-2 pl-4"} onClick={()=>(display('cat'))}><MdCategory size={20}/> Categories</div>
        <div className={displaycontent===3?"rounded-xl p-2 w-full bg-blue-400 flex items-center gap-2 pl-4 text-white":"rounded-xl p-2 w-full bg-white flex items-center gap-2 pl-4"} onClick={()=>(display('comp'))}><BsBuildingsFill size={20}/> Companies</div>
        <div className="rounded-xl p-2 w-full bg-white flex items-center gap-2 pl-4"><FaIndustry size={20}/> Industries</div>
      </div>
      <div className=" min-h-[40px]"></div>
      <span className=" text-xs Roboto-medium text-gray-400 text-left mb-4">
        Your job search
      </span>
      <div className="flex flex-col gap-2 mb-4">
        <div className="rounded-xl p-2 w-full bg-white flex items-center gap-2 pl-4"><AiFillHeart/> Your favorites</div>
        <div className="rounded-xl p-2 w-full bg-white flex items-center gap-2 pl-4">
          <HiMail size={20}/>
          Subscribed categories
        </div>
        <div className="flex justify-start gap-2">
          <div className="flex gap-1 bg-black rounded-xl w-fit p-1">
            <div className="bg-white rounded-lg p-1"><BsSunFill size={20}/></div>
            <div className="bg-black text-white rounded-lg p-1"><BsMoonFill size={20}/></div>
          </div>
          <div className="p-2 rounded-xl bg-white w-full cursor-pointer">
            {logedout && 
              <div className="flex items-center gap-2 pl-4" onClick={login}>
              <BsPersonFillUp/>
              <p>Login</p>
              </div>
            }
            {logedin &&
              <div className="flex items-center gap-2 pl-4" onClick={logout}>
              <BsPersonFillDown/>
              <p>Logout</p>
              </div>
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="rounded-xl p-2 w-full bg-white flex items-center gap-2 pl-4"><BsPersonFill size={20}/> Personal Profile</div>
        <div className="rounded-xl p-2 w-full bg-white flex items-center gap-2 pl-4"><MdFolderShared size={20}/> My Job Offers</div>
      </div>
      <div className="h-full Roboto-light text-sm text-gray-400 flex flex-col gap-2 justify-end">
        <div className="flex gap-1 justify-between">
          <span>About</span>
          <span>Services</span>
          <span>Contact us</span>
        </div>
        <div>
          <span>@jobsearch 2023-2024</span>
        </div>
        <div className=" h-[1px] bg-gray-400"></div>
        <div>
          <span>Site by wintercodeNKJJ</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
