const ip = '192.168.43.74'

//user
const getUser = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }
    return fetch(`http://${ip}:5000/user`,requestOptions).then((respons)=>{
        // respons.json()
        respons.json().then(res=>{
            console.log("store",JSON.stringify(res))
            localStorage.setItem('user',JSON.stringify(res))
        })
    })
}

const registerUser = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }
    return fetch(`http://${ip}:5000/register`,requestOptions).then((respons)=>{
        respons.json()
    })
}

//Jobs Query
const getJobs = async()=>{
    return fetch(`http://${ip}:5000/Jobs`,{method:'get'}).then((respons)=> respons.json())
}

const createJob = async(job)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(job)
    }
    return fetch(`http://${ip}:5000/createJob`,requestOptions).then((respons)=> respons.json())
}

const editJob = async(job)=>{
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(job)
    }
    return fetch(`http://${ip}:5000/editJob`,requestOptions).then((respons)=> respons.json())
}

const deleteJob = async(data)=>{
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }
    return fetch(`http://${ip}:5000/deleteJob`,requestOptions).then((respons)=> respons.json())
}

const getJob = async(id)=>{
    return fetch(`http://${ip}:5000/Job/${id}`,{method:'POST'}).then((respons)=> respons.json())
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

    return fetch(`http://${ip}:5000/application/${data.id}`,requestOptions).then((respons)=> respons.json())
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

    return fetch(`http://${ip}:5000/application/all`,requestOptions).then((respons)=> respons.json())
}

const apply = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify(data)
    }

    return fetch(`http://${ip}:5000/apply`,requestOptions).then((respons)=> respons.json())
}

// Delete Application

const deleteApp = async(data)=>{
    const requestOptions = {
        method: 'DELETE',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify(data)
    }

    return fetch(`http://${ip}:5000/deletApplication`,requestOptions).then((respons)=> respons.json())
}

// Jobs - Application
const jobsApplied = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify(data)
    }

    return fetch(`http://${ip}:5000/jobApplied`,requestOptions).then((respons)=> respons.json())
}

const jobsCreated = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify(data)
    }

    return fetch(`http://${ip}:5000/createdJobs`,requestOptions).then((respons)=> respons.json())
}

// get applicants of a job
const getApplicantstoJob = async(data)=>{
    const requestOptions = {
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify(data)
    }

    return fetch(`http://${ip}:5000/getApplicants`,requestOptions).then((respons)=> respons.json())
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