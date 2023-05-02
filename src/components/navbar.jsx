import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsBuildingsFill, BsMoonFill, BsPersonFill, BsPersonFillDown, BsPersonFillUp, BsSunFill } from 'react-icons/bs'
import { FaIndustry } from 'react-icons/fa'
import { MdCategory, MdFolderShared, MdWork } from 'react-icons/md'
import { HiMail } from 'react-icons/hi'
import { useStateContext } from "../context/context";

const Navbar = () => {
  const{logedin,logedout,login,logout,display,displaycontent,resetditails,changeLanguage,t,toggleTheme,setshowNav} = useStateContext()
  const [disthem, setDisthem] = useState(true)

  return (
    <div className=" h-screen bg-base-200 duration-1000 flex flex-col align-middle p-4">
      <div className="flex align-middle gap-4 h-fit min-w-[250px]">
        <h1 className=" text-3xl Roboto" onClick={()=>{display(); resetditails();}}>Job search</h1>
        <select
          className="Roboto-light border bg-transparent border-black rounded-lg "
          defaultValue="en"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="fr">fr</option>
          <option value="en">en</option>
        </select>
      </div>
      <div className="min-h-[56px]"></div>
      <div className="flex flex-col gap-2">
        <div className={displaycontent===1?"rounded-xl p-2 w-full bg-blue-400 flex items-center gap-2 pl-4 text-white":"rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4"} onClick={()=>{display('vac'); setshowNav(false);}}><MdWork size={20}/>{t("jobs")}</div>
        <div className={displaycontent===2?"rounded-xl p-2 w-full bg-blue-400 flex items-center gap-2 pl-4 text-white":"rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4"} onClick={()=>{display('cat'); setshowNav(false);}}><MdCategory size={20}/>{t("category")}</div>
        <div className={displaycontent===3?"rounded-xl p-2 w-full bg-blue-400 flex items-center gap-2 pl-4 text-white":"rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4"} onClick={()=>{display('comp'); setshowNav(false);}}><BsBuildingsFill size={20}/>{t("company")}</div>
        <div className="rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4"><FaIndustry size={20}/>{t("industry")}</div>
      </div>
      <div className=" min-h-[40px]"></div>
      <span className=" text-xs Roboto-medium text-gray-400 text-left mb-4">
      {t("naveTitle")}
      </span>
      <div className="flex flex-col gap-2 mb-4">
        <div className={displaycontent===5?"rounded-xl p-2 w-full bg-blue-400 flex items-center gap-2 pl-4 text-white":"rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4"} onClick={()=>(display('fav'))}><AiFillHeart/> {t("favorite")}</div>
        <div className="rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4">
          <HiMail size={20}/>
          {t("subscrib")}
        </div>
        <div className="flex justify-start gap-2">
          <div className="flex gap-1 bg-black rounded-xl w-fit p-1">
            <div className={disthem?"bg-white text-black rounded-lg p-1 duration-500":"bg-black text-white rounded-lg p-1 duration-500"} onClick={()=>{toggleTheme('mylight'); setDisthem(true)}}><BsSunFill size={20}/></div>
            <div className={!disthem?"bg-white text-black rounded-lg p-1 duration-500":"bg-black text-white rounded-lg p-1 duration-500"} onClick={()=>{toggleTheme('mydark'); setDisthem(false)}}><BsMoonFill size={20}/></div>
          </div>
          <div className="p-2 rounded-xl bg-base-100 w-full cursor-pointer">
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
        <div className={displaycontent===6?"rounded-xl p-2 w-full bg-blue-400 flex items-center gap-2 pl-4 text-white":"rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4"} onClick={()=>(display('prof'))}><BsPersonFill size={20}/>{t("profile")}</div>
        <div className="rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4"><MdFolderShared size={20}/>{t("myJobs")}</div>
      </div>
      <div className="h-full Roboto-light text-sm text-gray-400 flex flex-col gap-2 justify-end">
        <div className="flex gap-1 justify-between">
          <span>{t("aboutus")}</span>
          <span>{t("services")}</span>
          <span>{t("contact")}</span>
        </div>
        <div>
          <span>@jobsearch 2023-2024</span>
        </div>
        <div className=" h-[1px] bg-gray-400"></div>
        <div>
          <span>{t("siteby")} wintercodeNKJJ</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
