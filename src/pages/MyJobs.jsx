import { useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import useAuth from "../hook/useAuth";
import MyCart from "../component/MyCart";
import { useNavigate } from "react-router-dom";



const MyJobs = () => {
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

 const myJobs = jobs.filter(job => job.email === user.email)
 console.log(myJobs)

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14">
      <div className="mb-14">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center">
          My Jobs
        </h1>
       </div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-6 gap-5 border-2 py-4 px-4 text-center font-semibold">
          <p className="border-r-2 ">Posted By</p>
          <p className="border-r-2 ">Job Tittle</p>
          <p className="border-r-2 ">Salary Range</p>
          <p className="border-r-2 ">Job Posting Date</p>
          <p className="border-r-2 ">Delete</p>
          <div className="text-center">
            <button type="button">Update</button>
          </div>
        </div>
      </div>
      <div >
        {
            myJobs.map(job => <MyCart key={job._id} job={job}></MyCart>)
        }
      </div>
    </div>
  );
};

export default MyJobs;
