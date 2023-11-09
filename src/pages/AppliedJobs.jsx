import { useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import AppliedCard from "../component/AppliedCard";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const AppliedJobs = () => {
  const { logOutUser } = useAuth();
  const [applied, setApplied] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const axiosSecure = useAxiosSecure();

  // JWT Verification Response Handle
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.error(error));
        }
      }
    );
  }, [logOutUser, navigate, axiosSecure]);

  useEffect(() => {
    axiosSecure.get("/applied").then((res) => {
      setApplied(res.data);
      console.log(res);
    });
  }, [axiosSecure]);
  console.log(applied);


  const takeValue = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    from.reset();
    const filterJobs = applied.filter((job) =>
      job.job_category.toLowerCase().includes(name.toLowerCase())
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
          Filter By Job category
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
                placeholder="enter job category"
              />
              <button
                type="submit"
                className="w-auto mt-2 lg:mt-0 sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md px-2 py-2 lg:py-4 lg:px-4 dark:focus:ring-offset-gray-800"
              >
                Filter
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-5 gap-5 border-2 py-4 px-4 text-center font-semibold">
          <p className="border-r-2 ">Job Category</p>
          <p className="border-r-2 ">Job Tittle</p>
          <p className="border-r-2 ">Salary Range</p>
          <p className="border-r-2 ">Job Posting Date</p>
          <p className="">Application Deadline</p>
        </div>
      </div>
      <div>
      {filteredJobs.length > 0
          ? filteredJobs.map((job) => (
              <AppliedCard key={job._id} job={job}></AppliedCard>
            )) : noDataFound ? <div className="text-center py-10"><p className="text-4xl text-red-400">This category item was not found.</p></div>
          : applied.map((job) => <AppliedCard key={job._id} job={job}></AppliedCard>)
      }
      </div>
    </div>
  );
};

export default AppliedJobs;
