import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../hook/useAxiosSecure";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";
const Details = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [applied, setApplied] = useState([]);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  //Today Date
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();
  const todayDate = `${day}/${month}/${year}`;
  console.log(todayDate);

  useEffect(() => {
    axiosSecure.get("/applied").then((res) => {
      setApplied(res.data);
      console.log(res);
    });
  }, [axiosSecure]);
  console.log(applied)

  useEffect(() => {
    axiosSecure.get("/jobs").then((res) => {
      setJobs(res.data);
      console.log(res);
    });
  }, [axiosSecure]);

  const job = jobs.find((job) => job._id === id);
  const addedId = applied?.map(job => job.id) || [];
console.log(addedId);

const alreadyAdded = addedId.includes(id);
console.log(alreadyAdded);

  const handleApply = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const user_name = from.name.value;
    const resume_link = from.resumeLink.value;
    const application_deadline = job.application_deadline
    const job_description = job.job_description
    const job_banner = job.job_banner
    const job_posting_date = job.job_posting_date
    const job_title = job.job_title
    const logo = job.logo
    const salary_range = job.salary_range
    const job_category = job.job_category
    const id = job._id

    const apply = {
      application_deadline,
      job_category,
      email,
      job_banner,
      job_description,
      job_posting_date,
      job_title,
      logo,
      salary_range,
      user_name,
      resume_link,
      id
    };

    const userMatch = job.email === user.email
    console.log(userMatch);

    const applicationDeadline =  job.application_deadline;
    console.log(applicationDeadline);

    if (userMatch) {
      const modal = document.getElementById("my_modal_1");
      modal.close();
      from.reset();
      Swal.fire({
        icon: "error",
        title: "Do not apply for your own job.",
        text: "Failed",
        confirmButtonText: "OK",
      });
      return;
    }

    if (alreadyAdded) {
      const modal = document.getElementById("my_modal_1");
      modal.close();
      from.reset();
      Swal.fire({
        icon: "error",
        title: "Already applied",
        text: "Failed",
        confirmButtonText: "OK",
      });
      return;
    }

    if (!(todayDate < applicationDeadline[0])) {
      const modal = document.getElementById("my_modal_1");
      modal.close();
      from.reset();
      Swal.fire({
        icon: "error",
        title: "Application Deadline Over",
        text: "Failed",
        confirmButtonText: "OK",
      });
      return;
    }

    axiosSecure.post("/applied", apply).then((res) => {
      console.log(res.data);
      const modal = document.getElementById("my_modal_1");
      modal.close();
      from.reset();
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Successfully",
          text: "Application successful",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    });
  };

  return (
    <div className="max-w-[800px] mx-auto px-10 py-14">
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="relative">
          <img
            className="w-full h-auto rounded-t-xl"
            src={job?.job_banner}
            alt="Image Description"
          />
          <div className=" absolute -mt-11 ml-10">
            <img
              className="w-24 rounded-2xl border-4"
              src={job?.logo}
              alt=""
            />
          </div>
        </div>

        <div className="px-6 pb-8 pt-14">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            {job?.job_title}
          </h3>
          <p className="text-xl font-bold text-gray-800 dark:text-white">
            {job?.salary_range}
          </p>
          <p className="mt-1 text-lg text-gray-800 dark:text-gray-400">
            {job?.job_description}
          </p>
          <p className="mt-5 text-lg text-gray-800 dark:text-gray-500">
            Applicants: {job?.job_applicants_number}
          </p>
          <div className="text-center">
            <button
              className="rounded-md bg-blue-500 text-white px-6 py-3"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Apply Now
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form onSubmit={handleApply}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      defaultValue={user?.displayName}
                      className="input input-bordered"
                      readOnly
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      defaultValue={user?.email}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Resume link</span>
                    </label>
                    <input
                      type="text"
                      name="resumeLink"
                      placeholder="Resume link"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="rounded-md bg-blue-500 text-white px-6 py-3"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
