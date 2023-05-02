import React, { createContext, useContext, useEffect, useState } from "react";
import { vacances } from "../backendAPIS/data/vacances";
import { company } from "../backendAPIS/data/companies";
import { categories } from "../backendAPIS/data/categories";
import { profile } from "../backendAPIS/data/profileInfo";
import { useTranslation } from "react-i18next";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [displaycontent, setDisplaycontent] = useState(0);
  const [displayData, setDisplayData] = useState([]);
  const [ditailsdata, setDitailsdata] = useState(null);
  const [ditailsindex, setDitailsindex] = useState(-1);
  const [showditail, setShowditail] = useState(false);
  const [showNav, setshowNav] = useState(false);
  const [favo, setFavo] = useState(
    vacances.filter((item) => item.favorite === true)
  );
  const [profileInfo, setProfileInfo] = useState(profile);

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

  function display(opt) {
    switch (opt) {
      case "vac":
        setDisplaycontent(1);
        break;
      case "cat":
        setDisplaycontent(2);
        break;
      case "comp":
        setDisplaycontent(3);
        break;
      case "fav":
        setDisplaycontent(5);
        break;
      case "prof":
        setDisplaycontent(6);
        break;
      default:
        setDisplaycontent(0);
        break;
    }
  }

  function ditails(data) {
    setDitailsdata(data);
    setDitailsindex(data.index);
  }

  function resetditails() {
    setDitailsdata(null);
    setDitailsindex(-1);
  }

  useEffect(() => {
    if (displaycontent !== 6) {
      setProfileInfo(null);
    }
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
      case 5:
        let favdata = [];
        favdata = vacances.filter((item) => item.favorite === true);
        favdata = favdata.length >= 1 ? favdata : null;
        setDisplayData(favdata);
        break;
      case 6:
        setDisplayData(null);
        setProfileInfo(profile);
        break;
      default:
        setDisplayData(null);
        break;
    }
  }, [displaycontent]);

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
        login,
        logout,
        displayData,
        display,
        displaycontent,
        ditails,
        ditailsdata,
        ditailsindex,
        resetditails,
        showditail,
        setShowditail,
        favo,
        setFavo,
        profileInfo,
        toggleTheme,
        theme,
        editProf,
        edit,
        showNav,
        setshowNav,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
