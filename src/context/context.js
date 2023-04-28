import React, { createContext, useContext, useEffect, useState } from "react";
import { vacances } from "../backendAPIS/data/vacances";
import { company } from "../backendAPIS/data/companies";
import { categories } from "../backendAPIS/data/categories";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [displaycontent, setDisplaycontent] = useState(0);
  const [displayData, setDisplayData] = useState([]);
  const [ditailsdata, setDitailsdata] = useState(null);
  const [ditailsindex, setDitailsindex] = useState(-1);
  const [showditail, setShowditail] = useState(false)


  const [logedin, setLogedin] = useState(false)
  const [logedout, setLogedout] = useState(true)

  function login() {
    setLogedin(true)
    setLogedout(false)
    console.log('login')
  }
  function logout(){
    setLogedout(true)
    setLogedin(false)
    console.log('logout')
  }

  function display(opt) {
    switch (opt) {
        case 'vac':
            setDisplaycontent(1);
            break;
        case 'cat':
            setDisplaycontent(2);
            break;
        case 'comp':
            setDisplaycontent(3);
            break;
        default:
            setDisplaycontent(1);
            break;
    }
  }

  function ditails(data){
    setDitailsdata(data);
    setDitailsindex(data.index);
  }

  useEffect(() => {
    switch (displaycontent) {
        case 1:
          setDisplayData(vacances);
          break;
        case 3:
          setDisplayData(company);
          break;
        case 2:
          setDisplayData(categories);
          break;
    
        default:
            setDisplayData(vacances);
          break;
      }
  }, [displaycontent])
  

  return (
  <Context.Provider value={{
    logedin,
    logedout,
    login,
    logout,
    displayData,
    display,
    displaycontent,
    ditails,
    ditailsdata,
    ditailsindex,
    showditail,
    setShowditail
  }}>
    {children}
  </Context.Provider>);
};

export const useStateContext = () => useContext(Context);
