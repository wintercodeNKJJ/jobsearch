import React from "react";
import image1 from "../../assets/company.jpg";
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";

const DitailAboutcompany = ({info}) => {
  return (
    <div className="bg-base-200 px-3 h-screen text-left text-sm Roboto-light relative">
      <div className="flex justify-between border-b sticky top-0 backdrop-blur">
        <div className="flex items-center p-2 gap-2">
          <div className="h-10 w-10 rounded-full bg-blue-500"></div>
          <div>
            <p className="text-xs text-gray-400">{info.title} : {info.employerId}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 text-sm text-gray-500">
          <AiOutlineEye size={20} /> 20
          <span className="w-[1px] bg-gray-200 mx-1 h-[35px]"></span>
          <div className="text-red-400">
            <div
              className={
                false ? "text-red-500" : "text-gray-500"
              }
            >
              <AiFillHeart size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-left p-3">
        <h2 className="text-2xl Roboto-medium">{info.title}</h2>
      </div>
      <div className=" text-left text-sm">
        <h1>About company:</h1>
        <p>{info.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-8">
        <div>
          <img
            src={image1}
            alt=""
            className="border h-ful w-full object-cover rounded-xl"
          />
        </div>
        <div className="text-sm flex flex-col gap-3 text-left">
          <h1>Address</h1>
          <p>{info.location}</p>
          <h1>Phone number</h1>
          {info.contact && <p>{info.contact.tel1}, {info.contact.tel2}</p>}
          <h1>Website</h1>
          <p>{info.website}</p>
        </div>
      </div>
    </div>
  );
};

export default DitailAboutcompany;
