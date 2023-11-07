import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxiosSecure";

const AddJob = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

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
    axiosSecure.post("/jobs", brand).then((res) => {
      console.log(res.data);
      const data = res.data
      if(data.insertedId){
          
          form.reset()
      }
    });
  };

  return (
    <div className="max-w-[991px] mx-auto my-16 px-5">
      <div className="bg-base-200 mt-6 md:px-10 px-2 lg:px-20 py-12">
        <div className="mx-auto text-center max-w-[600px]">
          <h1 className=" text-2xl lg:text-4xl font-semibold pb-5">
            Add New Job
          </h1>
        </div>
        <form onSubmit={addProduct} className="">
          <div className=" grid lg:grid-cols-2 gap-4">
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
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Enter Job Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Category</span>
              </label>
              <select
                name="category"
                placeholder="select type"
                className="input input-bordered"
                required
              >
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary range</span>
              </label>
              <input
                type="text"
                name="salary"
                placeholder="Enter salary range"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Posting Date</span>
              </label>
              <input
                type="text"
                name="postingDate"
                placeholder="Enter rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Application Deadline</span>
              </label>
              <input
                type="text"
                name="deadline"
                placeholder="Enter rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Applicants</span>
              </label>
              <input
                type="text"
                name="applicants"
                placeholder="Enter rating"
                defaultValue='0'
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter job description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:col-span-2">
              <label className="label">
                <span className="label-text">Job Banner Link</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter Banner URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:col-span-2 ">
              <button
                type="submit"
                className="py-3 bg-slate-700  text-white font-medium px-5 rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
