import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobCart = ({ job }) => {
  const {
    application_deadline,
    job_posting_date,
    job_title,
    salary_range,
    user_name,
    _id,
  } = job;

  return (
    <div>
      <div className="flex flex-col bg-white border shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="p-4 lg:grid  lg:grid-cols-6 gap-5">
          <h3 className="text-base lg:border-r-2 text-center text-gray-900 dark:text-white">
            {user_name}
          </h3>
          <h2 className="text-base lg:border-r-2 text-center font-medium dark:text-gray-400">
            {job_title}
          </h2>
          <p className=" lg:border-r-2 text-center text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            ${salary_range}
          </p>
          <h3 className="text-sm lg:border-r-2 text-center">{job_posting_date}</h3>
          <p className="text-sm lg:border-r-2 text-center">
            {application_deadline}
          </p>
          <div className="text-center">
            <Link to={`/details/${_id}`} className="text-sm  font-medium text-blue-500 hover:text-blue-700">
              <button>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

JobCart.propTypes = {
  job: PropTypes.object,
};

export default JobCart;
