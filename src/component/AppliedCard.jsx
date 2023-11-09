import PropTypes from "prop-types";

const AppliedCard = ({ job }) => {
  console.log(job);

  const {
    application_deadline,
    job_posting_date,
    job_title,
    salary_range,
    job_category,
  } = job;

  return (
    <div>
      <div className="flex flex-col bg-white border shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="p-4 lg:grid  lg:grid-cols-5 gap-5">
          <h3 className="text-base lg:border-r-2 text-center text-gray-900 dark:text-white">
            <span className="lg:hidden">post by:</span> {job_category}
          </h3>
          <h2 className="text-base lg:border-r-2 text-center font-medium dark:text-gray-400">
            {job_title}
          </h2>
          <p className=" lg:border-r-2 text-center text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            ${salary_range}
          </p>
          <h3 className="text-sm lg:border-r-2 text-center">
            <span className="lg:hidden">post date:</span> {job_posting_date}
          </h3>
          <p className="text-sm text-center">
            <span className="lg:hidden">deadline:</span> {application_deadline}
          </p>
        </div>
      </div>
    </div>
  );
};

AppliedCard.propTypes = {
  job: PropTypes.object,
};

export default AppliedCard;
