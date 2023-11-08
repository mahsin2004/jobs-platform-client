import PropTypes from "prop-types";
import useAxiosSecure from "../hook/useAxiosSecure";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const AppliedCard = ({ job }) => {
  console.log(job);
  const [jobs, setJobs] = useState([]);
  const { user, logOutUser } = useAuth();
  const axiosSecure = useAxiosSecure();

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
    axiosSecure.get(`/jobs/?email=${user.email}`).then((res) => {
      setJobs(res.data);
      console.log(res);
    });
  }, [axiosSecure, user]);

  const applied = jobs.filter((joe) => joe._id === job);
  console.log(applied);

  return (
    <div>
      <div className="flex flex-col bg-white border shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="p-4 lg:grid  lg:grid-cols-5 gap-5">
          {applied.map((job) => (
            <>
              <h3 className="text-base lg:border-r-2 text-center text-gray-900 dark:text-white">
                <span className="lg:hidden">Category:</span> {job.job_category}
              </h3>
              <h2 className="text-base lg:border-r-2 text-center font-medium dark:text-gray-400">
                {job.job_title}
              </h2>
              <p className=" lg:border-r-2 text-center text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                ${job.salary_range}
              </p>
              <h3 className="text-sm lg:border-r-2 text-center">
                <span className="lg:hidden">post date:</span>{" "}
                {job.job_posting_date}
              </h3>
              <p className="text-sm  text-center">
                <span className="lg:hidden">deadline:</span>{" "}
                {job.application_deadline}
              </p>
            </>
          ))}
          {/* <h3 className="text-base lg:border-r-2 text-center text-gray-900 dark:text-white">
            <span className="lg:hidden">post by:</span>  {user_name}
          </h3>
          <h2 className="text-base lg:border-r-2 text-center font-medium dark:text-gray-400">
            {job_title}
          </h2>
          <p className=" lg:border-r-2 text-center text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            ${salary_range}
          </p>
          <h3 className="text-sm lg:border-r-2 text-center"><span className="lg:hidden">post date:</span>  {job_posting_date}</h3>
          <p className="text-sm lg:border-r-2 text-center">
            <span className="lg:hidden">deadline:</span>  {application_deadline}
          </p>
          <div className="text-center">
            <Link to={`/details/${_id}`} className="text-sm  font-medium text-blue-500 hover:text-blue-700">
              <button>View Details</button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

AppliedCard.propTypes = {
  job: PropTypes.object,
};

export default AppliedCard;
