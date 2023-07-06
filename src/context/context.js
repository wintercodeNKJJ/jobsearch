import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Context = createContext();

export const StateContext = ({ children }) => {
  // const [displaycontent, setDisplaycontent] = useState(0);
  // const [displayData, setDisplayData] = useState([]);
  const [ditailsdata, setDitailsdata] = useState(null);
  const [jobsdata, setJobsData] = useState(null);
  const [showditail, setShowditail] = useState(false);
  const [showNav, setshowNav] = useState(false);

  const [logedin, setLogedin] = useState(false);
  const [logedout, setLogedout] = useState(true);

  const [theme, setTheme] = useState("mylight");
  function toggleTheme(opt) {
    setTheme(opt === "mydark" ? "mydark" : "mylight");
    console.log(theme);
  }

  const [edit, setEdit] = useState([true, true, true, true, true, true]);
  function editProf(label) {
    switch (label) {
      case "name":
        setEdit([false, true, true, true, true, true]);
        console.log(edit);
        break;
      case "surname":
        setEdit([true, false, true, true, true, true]);
        break;
      case "birth":
        setEdit([true, true, false, true, true, true]);
        break;
      case "phone":
        setEdit([true, true, true, false, true, true]);
        break;
      case "address":
        setEdit([true, true, true, true, false, true]);
        break;
      case "category":
        setEdit([true, true, true, true, true, false]);
        break;

      default:
        setEdit([true, true, true, true, true, true]);
        break;
    }
  }

  function login() {
    setLogedin(true);
    setLogedout(false);
    console.log("login");
  }
  function logout() {
    setLogedout(true);
    setLogedin(false);
    console.log("logout");
  }

  function jobOfferDitails(data) {
    console.log("data tranfer",data)
    const ben = data.benefits ? data.benefits.split(";") : null
    const pre = data.prerequest ? data.prerequest.split(";") : null
    const tas = data.task ? data.task.split(";") : null 
    data = {...data,prerequest:pre,benefits:ben,task:tas}
    setJobsData(data);
  }

  const [applicants, setApplicants] = useState()
  const jobOfferApplicants = (data)=>{
    setApplicants(data)
  }

  function resetditails() {
    setDitailsdata(null);
  }

  useEffect(() => {

    if(localStorage.getItem('token')){
      setLogedin(true);
      setLogedout(false);
    }
  }, []);

  // Notification
  const [type, setType] = useState()
  const [message, setMessage] = useState()
  const [time, setTime] = useState()
  const [render, setRender] = useState(0)

  const notify = (type1,message1,time1)=>{
    setType(type1)
    setMessage(message1)
    setTime(time1)
    setRender(render+1)
    console.log("render",render)
  }

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Context.Provider
      value={{
        changeLanguage,
        t,
        logedin,
        logedout,
        setLogedin,
        setLogedout,
        login,
        logout,
        // displayData,
        jobsdata,
        // displaycontent,
        jobOfferDitails,
        ditailsdata,
        resetditails,
        showditail,
        setShowditail,
        toggleTheme,
        theme,
        editProf,
        edit,
        showNav,
        setshowNav,
        notify,
        time,
        message,
        type,
        render,
        applicants,
        jobOfferApplicants
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
