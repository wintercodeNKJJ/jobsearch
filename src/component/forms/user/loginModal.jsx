import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useStateContext } from "../../../context/context";
// import { useMutation } from "@apollo/client/react/hooks";
// import { LOGIN } from "../../../queries/loginQueries";

const LoginModal = ({connect}) => {
  const {login,notify} = useStateContext();
  const history = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState({});
  // const [loginUser] = useMutation(LOGIN,{
  //   onCompleted(res){
  //     setErrors({});
  //     console.log(res.userlogin.token)
  //     localStorage.setItem('token',res.userlogin.token)
  //     localStorage.setItem('role',res.userlogin.role)
  //     localStorage.setItem('id',res.userlogin.id)
  //     window.my_modal_1.close()
  //     login(name);
  //     history("/Jobs")
  //   },
  //   onError(err){
  //     setErrors(err);
  //     console.log("Errors");
  //     console.log(errors.message)
  //   },
  //   variables: {name,password}
  // });

  function LoginControlle(event){
    event.preventDefault();
    console.log("Event");
    connect({name:name,password:password})
    // loginUser()
    login()
    notify('success',name+' loged in',5000)
    history('/Jobs')
    closeMod()
  }

  const closeMod = () => {
    console.log("mode closed")
    window.my_modal_1.close()
  }

  return (
    <div>
      <dialog id="my_modal_1" className="modal-box">
        <form onSubmit={LoginControlle} >
          <h3 className="font-bold text-2xl m-2 flex justify-start">Login</h3>
          <div className="flex justify-between mx-2 items-center">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="input border-gray-400 w-2/3" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
          </div>
          <div className="flex justify-between mt-2 mx-2 items-center">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="input border-gray-400 w-2/3" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
          </div>
          <div className="flex gap-2 items-end justify-between mx-2 py-2">
            {/* if there is a button in form, it will close the modal */}
            <div className="flex items-center">
              <button type="button" className="btn btn-accent" formMethod="dialog" onClick={() => {
                window.my_modal_2.showModal(); 
                closeMod()
              }}>Register a new account</button>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn btn-success" type="submit" >Login</button>
              <button type="button" onClick={closeMod} className="btn" formMethod="dialog">Close</button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default LoginModal;
