import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hook/useAuth";
import Social from "../component/Social";

const Register = () => {
  const { createUser, profileUpdate } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

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
      profileUpdate(name).then(() => {
        window.location.reload();
      });
      toast.success("user create successfully");
    })
    .catch((error) => {
      toast.error(error.code);
    });
  }


  return (
    <div>
      <div className="flex items-center hero min-h-screen justify-between py-12">
        <div className="card flex-shrink-0 mx-auto w-5/6 lg:w-1/3 glass">
          <div>
            <p className="text-2xl text-white drop-shadow-md font-medium text-center pb-3 pt-9">
              Register Now
            </p>
          </div>
          <form onSubmit={handleRegister} className="px-4 md:px-8 lg:px-6">
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
            <div className="form-control mx-auto mt-5">
              <button
                type="submit"
                className="py-3 text-[14px] lg:text-base hover:bg-slate-900 glass text-white font-medium px-5 rounded-md"
              >
                Register
              </button>
            </div>
          </form>
          <h1 className="text-center mt-2 text-white">or</h1>
          <Social />
          <div className="text-center text-[12px] lg:text-base pt-2 pb-8">
            <p className="text-white">
              Already have an account?
              <span className="text-green-500 underline">
                <Link to="/login"> Log In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
