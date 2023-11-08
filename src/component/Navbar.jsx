import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-400 " : ""
        }
      >
        <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
          Home
        </li>
      </NavLink>
      <NavLink
        to="/jobs"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-400" : ""
        }
      >
        <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
          All Jobs
        </li>
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-400" : ""
        }
      >
        <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
          Blogs
        </li>
      </NavLink>
      {user ? (
        <>
          <NavLink
            to="/appliedJobs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-400" : ""
            }
          >
            <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
              Applied Jobs
            </li>
          </NavLink>
          <NavLink
            to="/myJobs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-400" : ""
            }
          >
            <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
              My Jobs
            </li>
          </NavLink>
          <NavLink
            to="/addJob"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-400" : ""
            }
          >
            <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
              Add A Job
            </li>
          </NavLink>
        </>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-10  bg-base-100 drop-shadow-sm border-b-2 border-base-200 py-2 px-2 lg:px-4">
      <div className="navbar w-full max-w-[1440px] mx-auto">
        <div className="navbar-start w-1/4">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-2 items-center">
              <img
                className="w-10"
                src="https://i.postimg.cc/L8Py1V1S/icon3.png"
                alt="logo"
              />
              <p className="normal-case text-[22px]">Dream Jobs</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center navbar-end w-full">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div>
            {user ? (
              <>
                <div className="flex items-center lg:gap-3">
                  <button
                    onClick={handleLogOut}
                    className="py-2 px-3 lg:pl-4 text-base hover:text-red-400"
                  >
                    Log out
                  </button>
                  <div className="">
                    <div className="text-right hidden md:block lg:block">
                      <p className="text-[14px]">{user?.displayName}</p>
                      <p className="text-[12px]">{user?.email}</p>
                    </div>
                  </div>
                  <img className="w-8 rounded-full" src={user?.photoURL}></img>
                </div>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-red-500" : ""
                  }
                >
                  <p className="py-2 px-4 text-base hover:text-red-400">
                    Log In
                  </p>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
