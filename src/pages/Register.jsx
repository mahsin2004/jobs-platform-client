import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hook/useAuth";
import Social from "../component/Social";
import { useEffect } from "react";

const Register = () => {
  const { createUser, profileUpdate } = useAuth();

  useEffect(() => {
    document.title = 'Register | Online Jobs'
  },[])

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      toast.error("Password should be 6 characters or more");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password should have at least one capital letter");
      return;
    }

    if (!/[!@#$%^&*()_+{}[\]:;<>,/.?~\\]/.test(password)) {
      toast.error("Password should have at least one special character");
      return;
    }

    createUser(email, password)
      .then(() => {
        profileUpdate(name, photo).then(() => {
          window.location.reload();
        });
        toast.success("user create successfully");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div>
      <div className="dark:bg-slate-900 bg-gray-100 flex items-center pb-16 pt-6">
        <div className="w-full max-w-[800px]  mx-auto p-7">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="pt-4 px-4 sm:px-7 sm:pt-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Register Now
                </h1>
              </div>
            </div>
            <Social></Social>
            <div className="px-4 sm:px-7">
              <div className="text-center">
                <button className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?
                  <Link className="text-blue-400" to="/login">
                    Log In
                  </Link>
                </button>
              </div>
            </div>

            <div className="pt-3 px-4 lg:px-7 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              Or
            </div>

            <form
              onSubmit={handleRegister}
              className="px-4 md:px-8 lg:px-7 pb-4 lg:pb-7 lg:grid lg:gap-4 lg:grid-cols-2"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">First Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
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
                  placeholder="Enter password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-5 lg:col-span-2">
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
    </div>
  );
};

export default Register;
