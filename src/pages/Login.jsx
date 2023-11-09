import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hook/useAuth";
import Social from "../component/Social";
import { useEffect } from "react";

const Login = () => {
  const { userLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Log in | Online Jobs'
  },[])

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user.email);
        toast.success("login successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="dark:bg-slate-900 bg-gray-100 flex h-screen items-center pb-16 pt-6">
      <div className="w-full max-w-[500px] mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="pt-4 px-4 sm:px-7 sm:pt-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Login Now
              </h1>
            </div>
          </div>
          <Social></Social>
          <div className="px-4 sm:px-7">
            <div className="text-center">
              <button className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Do not have account?
                <Link className="text-blue-400" to="/register">
                  Register Now
                </Link>
              </button>
            </div>
          </div>

          <div className="pt-3 px-4 lg:px-7 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
            Or
          </div>

          <form
            onSubmit={handleLogin}
            className="px-4 md:px-8 lg:px-6 pb-4 lg:pb-7"
          >
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
              <button
                type="submit"
                className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
