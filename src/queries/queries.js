const ip = 'https://jobsearch-backend.vercel.app'
// const ip = 'http://localhost:4000'
// const port = '4000'

//user
const getUser = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }
    return fetch(`${ip}/user`,requestOptions).then((respons)=>{
        // respons.json()
        respons.json().then(res=>{
            console.log("Storage",res)
            if(res.name){
                localStorage.setItem('user',JSON.stringify(res))
                console.log('stored',JSON.stringify(res))
            }
        })
    })
}

const registerUser = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }
    return fetch(`${ip}/register`,requestOptions).then((respons)=>{
        respons.json()
    })
}

//Jobs Query
const getJobs = async()=>{
    return fetch(`${ip}/jobs`,{method:'get'}).then((respons)=> respons.json())
}

const createJob = async(job)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(job)
    }
    return fetch(`${ip}/createJob`,requestOptions).then((respons)=> respons.json())
}

const editJob = async(job)=>{
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(job)
    }
    return fetch(`${ip}/editJob`,requestOptions).then((respons)=> respons.json())
}

const deleteJob = async(data)=>{
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }
    return fetch(`${ip}/deleteJob`,requestOptions).then((respons)=> respons.json())
}

const getJob = async(id)=>{
    return fetch(`${ip}/Job/${id}`,{method:'POST'}).then((respons)=> respons.json())
}

// application requests
const getApplication = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }

    return fetch(`${ip}/application/${data.id}`,requestOptions).then((respons)=> respons.json())
}

const getApplications = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }

    return fetch(`${ip}/application/all`,requestOptions).then((respons)=> respons.json())
}

const apply = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify(data)
    }

    return fetch(`${ip}/apply`,requestOptions).then((respons)=> respons.json())
}

// Delete Application

const deleteApp = async(data)=>{
    const requestOptions = {
        method: 'DELETE',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify(data)
    }

    return fetch(`${ip}/deletApplication`,requestOptions).then((respons)=> respons.json())
}

// Jobs - Application
const jobsApplied = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify(data)
    }

    return fetch(`${ip}/jobApplied`,requestOptions).then((respons)=> respons.json())
}

const jobsCreated = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify(data)
    }

    return fetch(`${ip}/createdJobs`,requestOptions).then((respons)=> respons.json())
}

// get applicants of a job
const getApplicantstoJob = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify(data)
    }

    return fetch(`${ip}/getApplicants`,requestOptions).then((respons)=> respons.json())
}

export {
    getUser,
    registerUser,
    getJobs,
    getJob,
    createJob,
    editJob,
    deleteJob,
    apply,
    getApplication,
    getApplications,
    getApplicantstoJob,
    deleteApp,
    jobsApplied,
    jobsCreated
}