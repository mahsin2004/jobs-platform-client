import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../hook/useAxiosSecure";

const Details = () => {
  const [jobs, setJobs] = useState([]);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/jobs").then((res) => {
      setJobs(res.data);
      console.log(res);
    });
  }, [axiosSecure]);

  const job = jobs.filter((job) => job._id === id);
  console.log(job);

  return (
    <div className="max-w-[500px] mx-auto px-10 py-14">
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="relative">
          <img
            className="w-full h-auto rounded-t-xl"
            src={job[0]?.job_banner}
            alt="Image Description"
          />
          <div className=" absolute -mt-11 ml-10">
            <img className="w-24 rounded-2xl" src={job[0]?.logo} alt="" />
          </div>
        </div>

        <div className="px-6 pb-8 pt-14">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            {job[0]?.job_title}
          </h3>
          <p className="text-xl font-bold text-gray-800 dark:text-white">
            {job[0]?.salary_range}
          </p>
          <p className="mt-1 text-lg text-gray-800 dark:text-gray-400">
            {job[0]?.job_description}
          </p>
          <p className="mt-5 text-lg text-gray-800 dark:text-gray-500">
            Applicants: {job[0]?.job_applicants_number}
          </p>
          <div className="text-center mt-3">
            <Link className="text-base font-medium">
              <button className="rounded-md bg-blue-500 text-white px-6 py-3">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
