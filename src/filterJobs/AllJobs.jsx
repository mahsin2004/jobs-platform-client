import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "../component/Cart";


const AllJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(()=> {
        axios.get("https://jobs-platform-server.vercel.app/jobs")
        .then(res => setJobs(res.data))
    },[])
    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                jobs.map(job => <Cart key={job._id} job={job}></Cart>)
            }
        </div>
    );
};

export default AllJobs;