import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cart = ({ job }) => {
  const {
    application_deadline,
    // email,
    job_applicants_number,
    // job_banner,
    // job_category,
    // job_description,
    job_posting_date,
    job_title,
    // logo,
    salary_range,
    user_name,
    // _id,
  } = job;

  return (
    <div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="p-4 md:p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[12px]">posted by</p>
              <h3 className="text-base text-gray-900 dark:text-white">
                {user_name}
              </h3>
            </div>
            <h3 className="text-sm">{job_posting_date}</h3>
          </div>

          <h2 className="text-lg font-semibold dark:text-gray-400">
            {job_title}
          </h2>
          <div>
            <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-base font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              {salary_range}
            </p>
            <p className="text-sm mt-1">{application_deadline}</p>
          </div>

          <div className="flex justify-between items-center mt-3">
            <Link className="inline-flex items-center gap-2  text-sm font-medium text-blue-500 hover:text-blue-700">
              <button>View Details</button>
            </Link>
            <h4 className="text-sm">{job_applicants_number}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  job: PropTypes.object,
};

export default Cart;
