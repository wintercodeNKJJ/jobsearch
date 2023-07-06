import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { AiFillHeart } from "react-icons/ai";
import { BsBuildingsFill, BsMoonFill, BsPersonFill, BsPersonFillDown, BsPersonFillUp, BsSunFill } from 'react-icons/bs'
import { FaIndustry } from 'react-icons/fa'
import { MdAdd, MdCategory, MdList, MdWork } from 'react-icons/md'
import { HiMail } from 'react-icons/hi'
import { useStateContext } from "../../context/context";
import {LoginModal,RregisterModal,CreateJob} from "../../component/index"
import Footer from "../footer/footer";

const Navbar = ({connect,register}) => {
  const{logedin,setLogedin,setLogedout,logedout,logout,displaycontent,resetditails,changeLanguage,t,toggleTheme,setshowNav,notify} = useStateContext()
  const [disthem, setDisthem] = useState(true)
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    if (user){
      setLogedin(true)
      setLogedout(false)
    }
    console.log(user)
  }, [user])
  
  console.log('user',user)
  let role = null
  if(user){
    role = user.role === 1 ? true : false;
  }
  const history = useNavigate();

  return (
    <div className=" h-screen bg-base-200 duration-1000 flex flex-col align-middle p-4">
      <div className="flex align-middle gap-4 h-fit min-w-[250px]">
        <NavLink to="/"><h1 className=" text-3xl Roboto" onClick={()=>{ resetditails();}}>Job search</h1></NavLink>
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
        
        <NavLink to="/Jobs" className={({isActive})=>(isActive? "bg-blue-400 text-white rounded-xl p-2 w-full flex items-center gap-2 pl-4":" rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4")} onClick={()=>{setshowNav(false);}}>
            <MdWork size={20}/>{t("jobs")}
        </NavLink>

        <NavLink to="/Cathegory" className={({isActive})=>(isActive? "bg-blue-400 text-white rounded-xl p-2 w-full flex items-center gap-2 pl-4":"rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4")} onClick={()=>{setshowNav(false);}}>
            <MdCategory size={20}/>{t("category")}
        </NavLink>

        <NavLink to="/Company" className={({isActive})=>(isActive? "bg-blue-400 text-white rounded-xl p-2 w-full flex items-center gap-2 pl-4":"rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4")} onClick={()=>{setshowNav(false);}}>
            <BsBuildingsFill size={20}/>{t("company")}
        </NavLink>

        <NavLink to="/Industry" className={({isActive})=>(isActive? "bg-blue-400 text-white rounded-xl p-2 w-full flex items-center gap-2 pl-4":"rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4")} onClick={()=>{setshowNav(false);}}>
            <FaIndustry size={20}/>{t("industry")}
        </NavLink>
      </div>
      <div className=" min-h-[40px]"></div>
      <span className=" text-xs Roboto-medium text-gray-400 text-left mb-4">
      {t("naveTitle")}
      </span>

      <div className="flex flex-col gap-2 mb-4">
        
        <NavLink to="/Favorite" className={({isActive})=>(isActive? "bg-blue-400 text-white rounded-xl p-2 w-full flex items-center gap-2 pl-4":"rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4")} onClick={()=>{setshowNav(false);}}>
            <AiFillHeart/> {t("favorite")}
        </NavLink>

        <NavLink to="/Subscribe" className={({isActive})=>(isActive? "bg-blue-400 text-white rounded-xl p-2 w-full flex items-center gap-2 pl-4":"rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4")} onClick={()=>{setshowNav(false);}}>
            <HiMail size={20}/> {t("subscrib")}
        </NavLink>

        <div className="flex justify-start gap-2">
          <div className="flex gap-1 bg-black rounded-xl w-fit p-1">
            
            <div className={disthem?"bg-white text-black rounded-lg p-1 duration-500":"bg-black text-white rounded-lg p-1 duration-500"} onClick={()=>{toggleTheme('mylight'); setDisthem(true)}}><BsSunFill size={20}/></div>
            
            <div className={!disthem?"bg-white text-black rounded-lg p-1 duration-500":"bg-black text-white rounded-lg p-1 duration-500"} onClick={()=>{toggleTheme('mydark'); setDisthem(false)}}><BsMoonFill size={20}/></div>
          
          </div>
          
          <NavLink to="/Authenticat" className={({isActive})=>(isActive? "bg-blue-400 text-white rounded-xl p-2 w-full":"rounded-xl p-2 w-full bg-base-100")}>
            {logedout && 
              <div className="flex items-center gap-2 pl-4" onClick={()=>{window.document.getElementById("my_modal_1").showModal()}}>
                <BsPersonFillUp/>
                <p>Login</p>
              </div>
            }
            
            {logedin &&
              <div className="flex items-center gap-2 pl-4" onClick={()=>{
                localStorage.clear()
                logout();
                notify('success','logedout successfully',7000)
                history('/')
              }}>
                <BsPersonFillDown/>
                <p>Logout</p>
              </div>
            }
            
          
          </NavLink>
            <LoginModal connect={connect}/>
            <RregisterModal register={register}/>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <NavLink to="/Profile"><div className={displaycontent===6?"rounded-xl p-2 w-full bg-blue-400 flex items-center gap-2 pl-4 text-white":"rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4"} onClick={()=>{setshowNav(false);}}><BsPersonFill size={20}/>{t("profile")}</div></NavLink>
        {user &&
          <div className=" w-full">
            {
              !role && <NavLink to="/MyJobs" className="rounded-xl p-2 w-full bg-base-100 flex items-center gap-2 pl-4" onClick={()=>{setshowNav(false);}}><MdList size={20}/>{t("myJobs")}</NavLink>
            }
            {
              role && <div className=" flex gap-2">
                <NavLink to="/CreatedJobs" className="rounded-xl p-2 w-1/2 bg-base-100 flex items-center gap-2 pl-4" onClick={()=>{setshowNav(false);}}><MdList size={20}/>{t("myJobs")}</NavLink>
                <div className="rounded-xl p-2 w-1/2 bg-base-100 flex items-center gap-2 pl-4" onClick={()=>{window.document.getElementById("my_modal_3").showModal()}}><MdAdd size={20}/>{t("addJob")}</div>
                <CreateJob/>
              </div>
            }
          </div>
        }
      </div>
      <Footer/>
    </div>
  );
};

export default Navbar;
