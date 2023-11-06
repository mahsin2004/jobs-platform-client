import axios from "axios";
import { useEffect, useState } from "react";


const Onsite = () => {
    const [jobs, setJobs] = useState([])
    useEffect(()=> {
        axios.get("https://jobs-platform-server.vercel.app/jobs")
        .then(res => setJobs(res.data))
    },[])
    console.log(jobs)
    return (
        <div>
            <h1>Length: {jobs.length}</h1>
        </div>
    );
};

export default Onsite;