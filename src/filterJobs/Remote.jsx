import { useEffect, useState } from "react";
import Cart from "../component/Cart";
import useAxiosSecure from "../hook/useAxiosSecure";

const Remote = () => {
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/jobs").then((res) => {
      setJobs(res.data);
      console.log(res);
    });
  }, [axiosSecure]);

  const remote = jobs.filter((job) => job.job_category === "Remote");

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {remote.map((job) => (
        <Cart key={job._id} job={job}></Cart>
      ))}
    </div>
  );
};

export default Remote;
