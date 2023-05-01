import React from "react";
import { AiFillHeart, AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { HiFilter } from "react-icons/hi";
import { useStateContext } from "../context/context";
import { vacances } from "../backendAPIS/data/vacances";
import { MdEdit } from "react-icons/md";
import { categories } from "../backendAPIS/data/categories";
import pic from '../assets/IMG_20200919_154934_071.jpg';

const Content = () => {
  const { displayData, ditailsindex, ditails, setShowditail, profileInfo,editProf,edit } =
    useStateContext();
    
  return (
    <div className=" bg-base-100">
      {!displayData && !profileInfo && (
        <div className="flex justify-center items-center h-screen">
          Select a category
        </div>
      )}
      {displayData && (
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
              {displayData.map((item, i) => (
                <div
                  className={
                    i + 1 === ditailsindex
                      ? "flex justify-between border-b bg-blue-400"
                      : "flex justify-between border-b"
                  }
                  onClick={() => {
                    ditails(item);
                    setShowditail(true);
                  }}
                  key={i}
                >
                  <div className="flex items-center p-2 gap-2">
                    <div className="h-10 w-10 rounded-full bg-blue-500"></div>
                    <div className="text-left">
                      <h2 className="text-xl Roboto-medium">{item.name}</h2>
                      {item.dateline && (
                        <p className="text-xs text-gray-400">Post/Profession</p>
                      )}
                      {item.location && (
                        <div className="text-xs text-black flex gap-1 items-center">
                          <p className="rounded-full bg-green-300 p-1 px-2">
                            {
                              vacances.filter(
                                (obj) => obj.company === item.index
                              ).length
                            }
                          </p>{" "}
                          <p className="text-blue-500">jobs posted</p>
                        </div>
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
                </div>
              ))}

              <div className=" rounded-xl bg-red-500 m-2 text-3xl p-3 text-left text-white">
                <h1 className="Roboto-light">Publicity</h1>
              </div>
            </div>
          </div>
        </div>
      )}

      {profileInfo && (
        <div className="overflow-y-scroll h-screen">
          <form action="#">
          <div className="p-3 relative">
            <div className="flex justify-center pb-3 relative">
              <img
                src={pic}
                alt="profil"
                className="bg-blue-500 w-52 h-52 rounded-full"
              />
              {profileInfo.jobseeker && <div className="px-2 rounded-full border-2 border-gray-500 text-gray-500 backdrop-blur absolute bottom-2 left-1/2">Job seeker</div>}
              {profileInfo.employer && <div className="px-2 rounded-full border-2 border-gray-600 text-gray-600 backdrop-blur absolute bottom-2 left-1/2">Employer</div>}
            </div>
            <h1 className="text-left text-gray-400 text-xs">Personal Info</h1>
            <div>
              <div className="text-left Roboto-medium text-base flex flex-col items-baseline gap-2">
                
                <div className="flex justify-between items-center py-1 px-2 border-b border-gray-200 w-full">
                <div className="flex gap-1">
                    <p>name:</p>
                    <input type="text" className="Roboto-light" id="profName" disabled={edit[0]} defaultValue={profileInfo.name}/>
                  </div>
                  <div className="rounded-xl p-2 bg-gray-200 flex items-center gap-2" onClick={()=>{editProf("name"); document.getElementById("profName").focus();}}>
                    <MdEdit />
                  </div>
                </div>

                <div className=" flex justify-between items-center py-1 px-2 border-b border-gray-200 w-full">
                  <div className="flex gap-1">
                    <p>surname:</p>
                    <input type="text" className="Roboto-light" id="surName" disabled={edit[1]} defaultValue={profileInfo.surname}/>
                  </div>
                  <div className="rounded-xl p-2 bg-gray-200 flex items-center gap-2" onClick={()=>{editProf("surname"); document.getElementById("surName").focus();}}>
                    <MdEdit />
                  </div>
                </div>

                <div className=" flex justify-between items-center py-1 px-2 border-b border-gray-200 w-full">
                  <div className="flex gap-1">
                    <p>birth date:</p>
                    <input type="text" className="Roboto-light" id="birthD" disabled={edit[2]} defaultValue={profileInfo.birthDate}/>
                  </div>
                  <div className="rounded-xl p-2 bg-gray-200 flex items-center gap-2" onClick={()=>{editProf("birth"); document.getElementById("birthD").focus();}}>
                    <MdEdit />
                  </div>
                </div>

                <div className=" flex justify-between items-center py-1 px-2 border-b border-gray-200 w-full">
                  <div className="flex gap-1">
                    <p>phone:</p>
                    <input type="text" className="Roboto-light" id="phone" disabled={edit[3]} defaultValue={profileInfo.phone}/>
                  </div>
                  <div className="rounded-xl p-2 bg-gray-200 flex items-center gap-2" onClick={()=>{editProf("phone"); document.getElementById("phone").focus();}}>
                    <MdEdit />
                  </div>
                </div>

                <div className=" flex justify-between items-center py-1 px-2 border-b border-gray-200 w-full">
                  <div className="flex gap-1">
                    <p>address:</p>
                    <input type="text" className="Roboto-light" id="profName" disabled={edit[4]} defaultValue={profileInfo.address}/>
                  </div>
                  <div className="rounded-xl p-2 bg-gray-200 flex items-center gap-2" onClick={()=>(editProf("address"))}>
                    <MdEdit />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-left text-gray-400 text-xs pt-4">Job search info</h1>
            <div>
              <div className="text-left Roboto-medium text-base flex flex-col items-baseline gap-2">
                {categories
                  .filter((item) => item.index === profileInfo.category)
                  .map((item,i) => (
                    <div key={i} className=" flex justify-between items-center py-1 px-2 border-b border-gray-200 w-full">
                      <div>
                        <div className="flex gap-1">
                          <p>Catgory:</p>
                          <h1 className="Roboto-light">{item.name}</h1>
                        </div>
                        <div className=" flex-wrap text-justify mr-2 gap-1">
                          <p>description:</p>
                          <h1 className="Roboto-light">{item.description}</h1>
                        </div>
                      </div>
                      <div className="rounded-xl p-2 bg-gray-200 flex items-center gap-2">
                        <MdEdit />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="sticky bottom-3 right-3 hover:backdrop-blur hover:bg-transparent bg-blue-400 duration-500 border border-blue-400 rounded-xl p-2 items-cente">
              <button type="submit">save info</button>
            </div>
          </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Content;
