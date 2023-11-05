import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../component/Social";
import toast from "react-hot-toast";
import useAuth from "../hook/useAuth";


const Login = () => {
  const { userLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
     userLogin(email, password)
      .then((res) => {
        const user = res.user
        console.log(user.email)
        toast.success("login successfully")
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  

  return (
    <div className="flex items-center hero min-h-screen justify-between py-12"
            
    >
      <div className="card flex-shrink-0 mx-auto w-5/6 lg:w-1/3 drop-shadow-md glass">
        <div>
          <p className="text-2xl text-white font-medium text-center pb-3 pt-9">Login Now</p>
        </div>
        <form onSubmit={handleLogin} className="px-4 md:px-8 lg:px-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="enter email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="enter password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mx-auto mt-5">
            <button type="submit" className="py-3 text-[14px] lg:text-base hover:bg-slate-900  text-white font-medium px-5 rounded-md glass">Login</button>
          </div>
        </form>
        <h1 className="text-center mt-3 text-white">or</h1>
        <Social></Social>
        <div className="text-center text-[12px]  lg:text-base pt-2 pb-9">
          <p className="text-white">Do not have account? <span className="text-sky-500 underline"><Link to="/register">Register Now</Link></span></p>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
