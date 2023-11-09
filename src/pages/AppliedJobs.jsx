import { useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import AppliedCard from "../component/AppliedCard";
import jsPDF from "jspdf";
import useAuth from "../hook/useAuth";
import { FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

const AppliedJobs = () => {
  const { user, logOutUser } = useAuth();
  const [applied, setApplied] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const axiosSecure = useAxiosSecure();

  // JWT Verification Response Handle
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Applied Jobs | Online Jobs";
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
    axiosSecure.get(`/applied/?email=${user.email}`).then((res) => {
      setApplied(res.data);
      console.log(res);
    });
  }, [axiosSecure, user]);
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

  const onButtonClick = () => {
    const container = document.getElementById("pdf-container");

    html2canvas(container).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create a PDF document
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      // Download the PDF
      pdf.save("document.pdf");
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14">
      <div className="text-xl flex justify-center mb-3">
        <button onClick={onButtonClick} className="flex text-red-600">
          <FaDownload></FaDownload> <span className="ml-2">Download PDF</span>
        </button>
      </div>
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
      <div id="pdf-container">
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
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <AppliedCard key={job._id} job={job}></AppliedCard>
            ))
          ) : noDataFound ? (
            <div className="text-center py-10">
              <p className="text-3xl text-red-400">
                This category item was not found.
              </p>
            </div>
          ) : applied.length > 0 ? (
            applied.map((job) => (
              <AppliedCard key={job._id} job={job}></AppliedCard>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-3xl text-red-400">No jobs were Applied.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
