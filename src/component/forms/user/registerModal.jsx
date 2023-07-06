import React, { useState } from "react";
// import { useMutation } from "@apollo/client/react/hooks";
// import { REGISTERUSER } from "../../../queries/registerUser";
// import { REGISTEREMPLOYER } from "../../../queries/registerEmployer";


const RregisterModal = ({register}) => {
  const [type, setType] = useState("2");
  console.log(type)
  const closeRegister = ()=>{
    window.my_modal_2.close()
  }

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    addresse: '',
    bio: '',
    birthdate: '',
    cathegory: 1,
    role:0
  });

  // const [registeruSER] = useMutation(REGISTERUSER,{
  //   onCompleted(res){
  //     console.log(res)
  //   },
  //   onError(err){
  //     console.log(err)
  //   },
  //   variables:user
  // });
  // const [registereMPLOYER] = useMutation(REGISTEREMPLOYER,{
  //   onCompleted(res){
  //     console.log(res)
  //   },
  //   onError(err){
  //     console.log(err)
  //   },
  //   variables:user
  // });

  const Register = Event =>{
    Event.preventDefault();
    switch (type) {
      case "1":
        setUser({...user,role:1})
        console.log(user)
        break;
      case "2":
        setUser({...user,role:2})
        console.log(user)
        break;
      default:
        break;
      }
      register(user)
      window.my_modal_2.close()
      window.my_modal_1.showModal()
  }

  return (
    <div>
      {/* Open the modal using ID.showModal() method */}
      {/* <button className="btn" onClick={() => window.my_modal_1.showModal()}>
        open modal
      </button> */}
      <dialog id="my_modal_2" className="modal-box">
        <form onSubmit={Register} >
          <h3 className="font-bold text-2xl m-2 flex justify-start">Register</h3>
          <div className="flex justify-between mx-2 items-center">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="input border-gray-400 w-2/3" onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}} />
          </div>
          <div className="flex justify-between mt-2 mx-2 items-center">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="input border-gray-400 w-2/3" onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}/>
          </div>
          <div className="flex justify-between mt-2 mx-2 items-center">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" className="input border-gray-400 w-2/3" onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}/>
          </div>
          <div className="flex justify-between mt-2 mx-2 items-center">
            <label htmlFor="addresse">addresse</label>
            <input type="text" name="addresse" className="input border-gray-400 w-2/3" onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}/>
          </div>
          <div className="flex justify-between mt-2 mx-2 items-center">
            <label htmlFor="bio">biography</label>
            <textarea type="text" name="bio" className="textarea h-16 border-gray-400 w-2/3" onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}/>
          </div>
          <div className="flex justify-between mt-2 mx-2 items-center">
            <label htmlFor="birthdate">birthDate</label>
            <input type="date" name="birthdate" className="input border-gray-400 w-2/3" onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}/>
          </div>
          <div className="flex justify-between mt-2 mx-2 items-center">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="input border-gray-400 w-2/3" onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}/>
          </div>
            <div className="flex justify-between mt-2 mx-2 items-center">
              <label htmlFor="cathegory">Cathegory</label>
              <select className=" input border-gray-400" name="cathegory" id="cath" onChange={(e)=>{setUser({...user,[e.target.name]:parseInt(e.target.value)})}}>
                <option value="1">Office Work</option>
                <option value="2">Civil Enginiering</option>
                <option value="3">Manager</option>
              </select>
            </div>
          <div className="flex justify-between mt-2 mx-2 items-center">
            <label htmlFor="usertype">Account type</label>
            <div className=" flex gap-2 items-center">
              <div className=" flex input items-center border-gray-400">
                <input type="radio" name="usertype" value="1" id="employer" onClick={(e)=>{setType(e.target.value)}}/>
                <label htmlFor="usertype">Employer</label>
              </div>
              <div className="flex input items-center border-gray-400">
                <input type="radio" name="usertype" value="2" id="jobseeker" onClick={(e)=>{setType(e.target.value)}}/>
                <label htmlFor="usertype">Job seeker</label>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-end justify-between mx-2 py-2">
            {/* if there is a button in form, it will close the modal */}
            <div className="flex items-center">
              <button type="button" className="btn btn-accent" formMethod="dialog" onClick={() => {window.my_modal_1.showModal();closeRegister()}}>Back to login</button>
            </div>
            <div className="flex items-center gap-2">
              <button type="submit" className="btn btn-success">Register</button>
              <button type="button" className="btn" onClick={closeRegister} formMethod="dialog">Close</button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default RregisterModal;
