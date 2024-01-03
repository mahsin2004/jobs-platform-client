import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AppliedCard = ({ job }) => {
  console.log(job);

  const {
    // application_deadline,
    _id,
    job_posting_date,
    job_title,
    salary_range,
    job_category,
  } = job;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://jobs-platform-server.vercel.app/applied/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Successfully",
                text: "Deleted",
                icon: "success",
                confirmButtonText: "oky",
              });
              window.location.reload();
            }
          });
      }
    });
  };

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
          <div className="text-center lg:border-r-2">
            <Link className="text-sm  font-medium text-blue-500 hover:text-blue-700">
              <button onClick={() => handleDelete(_id)}>Delete</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

AppliedCard.propTypes = {
  job: PropTypes.object,
};

export default AppliedCard;
