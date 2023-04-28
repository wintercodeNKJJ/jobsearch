import React, { useState } from "react";
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { useStateContext } from "../../context/context";
import DitailAboutcompany from "./ditail-Aboutcompany";
import { company } from "../../backendAPIS/data/companies";
import DitailJobdescription from "./ditail-Jobdescription";

const Ditail = () => {
  const { ditailsdata } = useStateContext();
  let companyinfo = null;
  let jobdata = null;

  let jobinfo = false;
  let enterprise = false;
  let othervac = false;
  const [active, setActive] = useState(1)
  function actived(opt){
    switch (opt) {
      case 'job':
        setActive(1);
        break;
      case 'comp':
        setActive(2);
        break;
      case 'other':
        setActive(3);
        break
      default:
        setActive(1);
        break;
    }
  }
  
  if(ditailsdata){
    if(ditailsdata.company){
      companyinfo = company.filter((item)=>(item.index === ditailsdata.company))
      companyinfo = companyinfo[0]
      enterprise=true
    }
    if(ditailsdata.location){
      companyinfo = ditailsdata
      console.log(ditailsdata)
      enterprise=true
    }
    if(ditailsdata.company){
      jobinfo=true
      jobdata=ditailsdata
    }
  }

  return (
    <div className=" bg-gray-100 h-full">
      {!ditailsdata && (
        <div className="flex justify-center items-center h-screen">
          Select an item
        </div>
      )}
      {ditailsdata && (
        <div>
          <div className="flex justify-between border-b">
            <div className="flex items-center p-2 gap-2">
              <div className="h-10 w-10 rounded-full bg-blue-500"></div>
              <div>
                <p className="text-xs text-gray-400">Post/Profession</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 text-sm text-gray-500">
              <AiOutlineEye size={20} /> {ditailsdata.views}
              <span className="w-[1px] bg-gray-200 mx-1 h-[35px]"></span>
              <div className="text-red-400">
                <div
                  className={
                    ditailsdata.favorite ? "text-red-500" : "text-gray-500"
                  }
                >
                  <AiFillHeart size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="text-left p-3">
            <h2 className="text-2xl Roboto-medium">{ditailsdata.name}</h2>
          </div>
          <div className="px-3">
            <div className=" w-60 h-10 items-center flex justify-around border-2 rounded-xl border-orange-400 text-orange-400">
              <BsClock size={20} />
              <div className="flex">
                <p>Date Line .</p> <p>{ditailsdata.dateline}</p>
              </div>
            </div>
            <div className="my-6 flex gap-4 px-6 border-b border-gray-200 text-sm">
              {jobinfo &&<div className={active===1?" border-b-2 border-blue-400":''} onClick={()=>(actived('job'))}>Job description</div>}
              {enterprise &&<div className={active===2?" border-b-2 border-blue-400":''} onClick={()=>(actived('comp'))}>About Company</div>}
              {othervac &&<div className={active===3?" border-b-2 border-blue-400":''} onClick={()=>(actived('other'))}>Other Vacancies</div>}
            </div>
            {jobinfo && <div className={active===1?" ":" hidden"}><DitailJobdescription info={jobdata}/></div>}
            {enterprise && <div className={active===2?" ":" hidden"}><DitailAboutcompany info={companyinfo}/></div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Ditail;