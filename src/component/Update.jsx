import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  const job = jobs.find((job) => job._id === id);

  useEffect(() => {
    axiosSecure.get("/jobs").then((res) => {
      setJobs(res.data);
      console.log(res);
    });
  }, [axiosSecure]);

  const addProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const user_name = form.name.value;
    const job_title = form.jobTitle.value;
    const job_category = form.category.value;
    const salary_range = form.salary.value;
    const job_posting_date = form.postingDate.value;
    const application_deadline = form.deadline.value;
    const job_description = form.description.value;
    const job_applicants_number = form.applicants.value;
    const job_banner = form.image.value;
    const email = user?.email;
    const logo = user?.photoURL;

    const brand = {
      application_deadline,
      email,
      job_applicants_number,
      job_banner,
      job_category,
      job_description,
      job_posting_date,
      job_title,
      logo,
      salary_range,
      user_name,
    };
    console.log(brand);
    axios
      .put(`https://jobs-platform-server.vercel.app/jobs/${id}`, brand)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully",
            text: "Updated",
            icon: "success",
            confirmButtonText: "oky",
          });
        }
      });
  };

  return (
    <div className="max-w-[991px] mx-auto my-16 px-5">
      <div className="mt-6 md:px-10 px-2 lg:px-20 lg:py-12">
        <div className="mx-auto text-center max-w-[600px]">
          <h1 className=" text-3xl text-gray-800 lg:text-5xl font-semibold pb-8">
            Update job
          </h1>
        </div>
        <form onSubmit={addProduct} className="">
          <div className=" grid lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">User Name</span>
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
                <span className="label-text text-lg">Job Title</span>
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Enter Job Title"
                defaultValue={job?.job_title}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Select Category</span>
              </label>
              <select
                name="category"
                placeholder="select type"
                className="input input-bordered"
                required
              >
                <option value={job?.job_category}>{job?.job_category}</option>
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Salary range</span>
              </label>
              <input
                type="text"
                name="salary"
                placeholder="12000 - 20000"
                defaultValue={job?.salary_range}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Job Posting Date</span>
              </label>
              <input
                type="text"
                name="postingDate"
                placeholder="DDD/MMM/YYY"
                className="input input-bordered w-full"
                required
                defaultValue={job?.job_posting_date}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Application Deadline</span>
              </label>
              <input
                type="text"
                name="deadline"
                placeholder="DDD/MMM/YYY"
                className="input input-bordered w-full"
                required
                defaultValue={job?.application_deadline}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Job Applicants</span>
              </label>
              <input
                type="text"
                name="applicants"
                placeholder="Enter rating"
                defaultValue={job?.job_applicants_number}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter job description"
                defaultValue={job?.job_description}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:col-span-2">
              <label className="label">
                <span className="label-text text-lg">Job Banner Link</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter Banner URL"
                defaultValue={job?.job_banner}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:col-span-2 ">
              <button
                type="submit"
                className="py-3 bg-blue-500  text-white font-medium px-5 rounded-md"
              >
                update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
