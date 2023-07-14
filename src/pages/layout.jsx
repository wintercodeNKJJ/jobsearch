import React, { useEffect, useState } from 'react'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { useStateContext } from "../context/context";
import Navbar from '../mainComponents/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import { Cathegory, DitailsJ, JobApplicants, JobOffer, ProfileInfo } from '../component';
import { getApplications, getJobs, getUser, jobsApplied, jobsCreated, registerUser } from '../queries/queries';
import Applyed from '../component/display/jobs/applyed';
import MyJobs from '../component/display/jobs/myJobs';
import Notify from '../mainComponents/notification/notify';
import Landing from './HomePage/landing';
import DitailsHolder from './DitailsPage/ditailsHolder';



const Layout = () => {
    const {setshowNav,showNav,setShowditail,showditail,theme,render}=useStateContext()
  
    const [info, setInfo] = useState()
    const [jobsApp, setJobsApp] = useState()
    const [jobCreated, setJobCreated] = useState()
    // const [user, setUser] = useState()
    // const [application, setApplication] = useState()
    useEffect(() => {
      getJobs().then(res=>{
        console.log(res)
        res.sort((a,b)=>{
          let fa = a.title.toLowerCase()
          let fb = b.title.toLowerCase()
      
          if(fa<fb){return -1}
          if(fa>fb){return 1}
          return 0
        })
        setInfo({joboffers:res})

        console.log('info',res)
      })

      
      getApplications({id:1}).then(res=>{
        console.log('respons',res)
        // setApplication(res)
      })

      console.log('user object',localStorage.getItem('user'))

      if(localStorage.getItem('user')){
        jobsApplied({id:JSON.parse(localStorage.getItem('user')).id}).then(res=>{
          res.sort((a,b)=>{
            let fa = a.title.toLowerCase()
            let fb = b.title.toLowerCase()
        
            if(fa<fb){return -1}
            if(fa>fb){return 1}
            return 0
          })
          console.log('applied jobs',res)
          setJobsApp(res)
        })
  
        jobsCreated({id:JSON.parse(localStorage.getItem('user')).id}).then(res=>{
          res.sort((a,b)=>{
            let fa = a.title.toLowerCase()
            let fb = b.title.toLowerCase()
        
            if(fa<fb){return -1}
            if(fa>fb){return 1}
            return 0
          })
          console.log('created jobs',res)
          setJobCreated(res)
        })
      }else{
        setJobsApp([])
        setJobCreated([])
        console.log('no user in the local storage')
      }
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [render])
    
    
    const login = async(data)=>{
      console.log(data)
      const user1 = await getUser(data).then(res=>{
        console.log('user',res)
        return res
        // setUser(res)       
      })
      return user1
    }

    const register = (data)=>{
      registerUser(data).then(res=>{
        console.log('registered user',res)
      })
    }

    useEffect(() => {
      document.querySelector('html').setAttribute('data-theme',theme)
    }, [theme])
  return (
<>
    {info && jobsApp && jobCreated &&
          <div className='flex relative'>
          <div className={showNav?'navbtn-show':'navbtn-hide'} onClick={()=>(setshowNav(!showNav))}>
            {showNav?<BsArrowLeft size={20}/>:<BsArrowRight size={20}/>}
          </div>
          <div className={showNav?'navbody-show':'navbody-hide'}>
            <Navbar connect={login} register={register}/>
          </div>
          <div className='w-screen md:w-full grid grid-cols-1 md:grid-cols-2 h-full overflow-hidden relative bg-base-200'>
            <div className=' col-span-1 md:col-span-1 bg-base-100'>
              <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path="/Jobs/*" element={<JobOffer info={info}/>} />
                <Route path="/Profile" element={<ProfileInfo/>}/>
                <Route path="/Cathegory/*" element={<Cathegory info={info}/>}/>
                <Route path="/MyJobs/*" element={<Applyed info={jobsApp}/>}/>
                <Route path="/CreatedJobs/*" element={<MyJobs info={jobCreated}/>}/>
              </Routes>
            </div>
            <div className={showditail?'navditailsbtn-show':'navditailsbtn-hide'} onClick={()=>(setShowditail(false))}>
                <MdClose size={20}/>
            </div>
            <div className={showditail?'navditailsbody-show':'navditailsbody-hide'}>
            <Routes>
                <Route path='/' element={<DitailsHolder/>}/>
                <Route exact path="/Jobs/:id" Component={DitailsJ}/>
                <Route exact path="/Cathegory/:id" Component={DitailsJ}/>
                <Route exact path="/CreatedJobs/:id" Component={JobApplicants}/>
            </Routes>
            </div>
          </div>
          <div className=' absolute bottom-2 right-2'>
            <Notify/>
          </div>
        </div>
    }
</>

  )
}

export default Layout
