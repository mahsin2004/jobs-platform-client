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
        to="/addProduct"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-400" : ""
        }
      >
        <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
          All Jobs
        </li>
      </NavLink>
      <NavLink
        to="/addProduct"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-400" : ""
        }
      >
        <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
        Applied Jobs
        </li>
      </NavLink>
      <NavLink
        to="/addProduct"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-400" : ""
        }
      >
        <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
        My Jobs
        </li>
      </NavLink>
      <NavLink
        to="/addProduct"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-400" : ""
        }
      >
        <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
          Add A Job
        </li>
      </NavLink>
      <NavLink
        to="/myCart"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-400" : ""
        }
      >
        <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
          Blogs
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-10 w-full max-w-[1440px] mx-auto bg-base-100 border-base-200 lg:px-4">
      <div className="navbar">
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
          <div className="flex items-center">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
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
                  <img className="w-8 rounded-full" src={user?.photoURL}></img>
                  {/* <div className="">
                    <div className="text-right hidden md:block lg:block">
                      <p className="text-[12px]">{user?.displayName}</p>
                      <p className="text-[14px]">{user?.email}</p>
                    </div>
                  </div> */}
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
