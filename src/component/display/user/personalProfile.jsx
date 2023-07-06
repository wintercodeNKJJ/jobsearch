import React from 'react'
import { MdEdit } from 'react-icons/md';
// import { categories } from "../../backendAPIS/data/categories";
import pic from '../../../assets/IMG_20200919_154934_071.jpg'
import { useStateContext } from '../../../context/context';


const PersonalProfile = () => {
  const {editProf,edit} = useStateContext();
  const data = JSON.parse(localStorage.getItem('user'));
  console.log(data)
  
  return (
    <div>
      {data &&
      <div className="overflow-y-scroll h-screen">
          <form action="#">
          <div className="p-3 relative">
            <div className="flex justify-center pb-3 relative">
              <img
                src={pic}
                alt="profil"
                className="bg-blue-500 w-52 h-52 rounded-full"
              />
              {data.role === 0 && <div className="px-2 rounded-full border-2 border-gray-500 text-gray-500 backdrop-blur absolute bottom-2 left-1/2">Job seeker</div>}
              {data.role === 1 && <div className="px-2 rounded-full border-2 border-gray-600 text-gray-600 backdrop-blur absolute bottom-2 left-1/2">Employer</div>}
            </div>
            <h1 className="text-left text-gray-400 text-xs">Personal Info</h1>
            <div>
              <div className="text-left Roboto-medium text-neutral flex flex-col items-baseline gap-2">
                
                <div className="flex justify-between items-center py-1 px-2 border-b border-gray-200 w-full">
                <div className="flex gap-1">
                    <p>name:</p>
                    <input type="text" className="Roboto-light" id="profName" disabled={edit[0]} defaultValue={data.name}/>
                  </div>
                  <div className={edit[0]?"rounded-xl p-2 bg-base-200 items-center":"rounded-xl p-2 bg-warning text-black items-center"} onClick={()=>{editProf("name"); document.getElementById("profName").focus();}}>
                    <MdEdit />
                  </div>
                </div>

                <div className=" flex justify-between items-center py-1 px-2 border-b border-gray-200 w-full">
                  <div className="flex gap-1">
                    <p>surname:</p>
                    <input type="text" className="Roboto-light" id="surName" disabled={edit[1]} defaultValue={data.name}/>
                  </div>
                  <div className={edit[1]?"rounded-xl p-2 bg-base-200 items-center":"rounded-xl p-2 bg-warning text-black items-center"} onClick={()=>{editProf("surname"); document.getElementById("surName").focus();}}>
                    <MdEdit />
                  </div>
                </div>

                <div className=" flex justify-between items-center py-1 px-2 border-b border-gray-200 w-full">
                  <div className="flex gap-1">
                    <p>birth date:</p>
                    <input type="text" className="Roboto-light" id="birthD" disabled={edit[2]} defaultValue={data.birthdate}/>
                  </div>
                  <div className={edit[2]?"rounded-xl p-2 bg-base-200 items-center":"rounded-xl p-2 bg-warning text-black items-center"} onClick={()=>{editProf("birth"); document.getElementById("birthD").focus();}}>
                    <MdEdit />
                  </div>
                </div>

                <div className=" flex justify-between items-center py-1 px-2 border-b border-gray-200 w-full">
                  <div className="flex gap-1">
                    <p>phone:</p>
                    <input type="text" className="Roboto-light" id="phone" disabled={edit[3]} defaultValue={data.phone}/>
                  </div>
                  <div className={edit[3]?"rounded-xl p-2 bg-base-200 items-center":"rounded-xl p-2 bg-warning text-black items-center"} onClick={()=>{editProf("phone"); document.getElementById("phone").focus();}}>
                    <MdEdit />
                  </div>
                </div>

                <div className=" flex justify-between items-center py-1 px-2 border-b border-gray-200 w-full">
                  <div className="flex gap-1">
                    <p>address:</p>
                    <input type="text" className="Roboto-light" id="addresse" disabled={edit[4]} defaultValue={data.addresse}/>
                  </div>
                  <div className={edit[4]?"rounded-xl p-2 bg-base-200 items-center":"rounded-xl p-2 bg-warning text-black items-center"} onClick={()=>(editProf("address"))}>
                    <MdEdit />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-left text-gray-400 text-xs pt-4">Job search info</h1>
            {/* <div>
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
                      <div className={edit[5]?"rounded-xl p-2 bg-base-200 items-center":"rounded-xl p-2 bg-warning text-black items-center"}>
                        <MdEdit />
                      </div>
                    </div>
                  ))}
              </div>
            </div> */}
            <div className="sticky bottom-3 right-3 hover:backdrop-blur hover:bg-transparent bg-blue-400 duration-500 border border-blue-400 rounded-xl p-2 items-cente">
              <button type="submit">save info</button>
            </div>
          </div>
          </form>
      </div>}
    </div>
  )
}

export default PersonalProfile
