import { useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import useAuth from "../hook/useAuth";
import MyCart from "../component/MyCart";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user, } = useAuth();
  const axiosSecure = useAxiosSecure();

 

  useEffect(() => {
    axiosSecure.get("/jobs").then((res) => {
      setJobs(res.data);
      console.log(res);
    });
  }, [axiosSecure, user]);

  const myJobs = jobs.filter((job) => job.email === user.email);
  console.log(myJobs);

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14">
      <div className="mb-14">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center">
          My Jobs
        </h1>
      </div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-6 gap-5 border-2 py-4 px-4 text-center font-semibold">
          <p className="border-r-2 ">Posted By</p>
          <p className="border-r-2 ">Job Tittle</p>
          <p className="border-r-2 ">Salary Range</p>
          <p className="border-r-2 ">Job Posting Date</p>
          <p className="border-r-2 ">Delete</p>
          <div className="text-center">
            <button type="button">Update</button>
          </div>
        </div>
      </div>
      <div>
        {myJobs.length > 0 ? (
          myJobs.map((job) => <MyCart key={job._id} job={job}></MyCart>)
        ) : (
          <div className="text-center py-10">
            <p className="text-3xl text-red-400">
            No jobs were added.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyJobs;
