import { useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import JobCart from "./JobCart";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/jobs").then((res) => {
      setJobs(res.data);
      console.log(res);
    });
  }, [axiosSecure]);

  const takeValue = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    from.reset();
    const filterJobs = jobs.filter((job) =>
      job.job_title.toLowerCase().includes(name.toLowerCase())
    );

    if (filterJobs.length === 0) {
      setNoDataFound(true);
    } else {
      setNoDataFound(false);
    }

    setFilteredJobs(filterJobs);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14">
      <div className="mb-14">
        <h1 className="text-2xl lg:text-4xl font-medium text-center">
        Search By Job Title
        </h1>
        <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-full sm:w-auto mx-auto">
            <form onSubmit={takeValue} className="lg:flex lg:gap-2 ">
              <label className="sr-only">Search</label>
              <input
                type="text"
                id="hero-input"
                name="name"
                required
                className="px-2 py-2 lg:py-4 lg:px-4 border block w-full lg:min-w-[18rem] border-gray-200 shadow-sm rounded-md dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="enter job title"
              />
              <button
                className="w-full mt-2 lg:mt-0 sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md px-2 py-2 lg:py-4 lg:px-4 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-6 gap-5 border-2 py-4 px-4 text-center font-semibold">
          <p className="border-r-2 ">Posted By</p>
          <p className="border-r-2 ">Job Tittle</p>
          <p className="border-r-2 ">Salary Range</p>
          <p className="border-r-2 ">Job Posting Date</p>
          <p className="border-r-2 ">Application Deadline</p>
          <div className="text-center">
            <button type="button">Action</button>
          </div>
        </div>
      </div>
      <div>
        {filteredJobs.length > 0
          ? filteredJobs.map((job) => (
              <JobCart key={job._id} job={job}></JobCart>
            )) : noDataFound ? <div className="text-center py-10"><p className="text-4xl text-red-400">No Jobs Found</p></div>
          : jobs.map((job) => <JobCart key={job._id} job={job}></JobCart>)}
      </div>
    </div>
  );
};

export default Jobs;
