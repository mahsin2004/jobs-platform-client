import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cart = ({ job }) => {
  const {
    application_deadline,
    job_applicants_number,
    job_posting_date,
    job_title,
    salary_range,
    user_name,
    _id,
  } = job;

  return (
    <div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="p-4 md:p-5 space-y-[10px]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[12px]">Posted by :</p>
              <h3 className="text-base text-gray-900 dark:text-white">
                {user_name}
              </h3>
            </div>
            <div>
              <p className="text-[12px]">Posted date :</p>
              <h3 className="text-base">{job_posting_date}</h3>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-base font-semibold dark:text-gray-400">
                {job_title}
              </h2>
              <p className="inline-flex items-center text-base font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                ${salary_range}
              </p>
            </div>
            <div>
              <h4 className="text-base">
                <p className="text-base">Applicants:</p> {job_applicants_number}
              </h4>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-center">
              <Link to={`/details/${_id}`} className="text-sm font-medium">
                <button className="rounded-md bg-blue-400 text-white px-4 py-[9px]">
                  View Details
                </button>
              </Link>
            </div>
            <div>
              <p className="text-sm">Deadline :</p>
              <p className="text-base">{application_deadline}</p>
            </div>
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
