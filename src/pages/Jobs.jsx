import { useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";


const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/jobs").then((res) => {
      setJobs(res.data);
      console.log(res);
    });
  }, [axiosSecure]);



  return (
    <div>
      <h1>{jobs.length}</h1>

    </div>
  );
};

export default Jobs;
