import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";


const Navbar = () => {
  const { user, logOut } = useAuth();
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
              isPending
                ? "pending"
                : isActive
                ? "text-red-400 border-b-[2px] rounded-full"
                : ""
            }
          >
            <li className="py-2 px-4 hover:text-red-400 hover:rounded-full font-medium">
              Home
            </li>
          </NavLink>
          <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-400 border-b-[2px] rounded-full"
                : ""
            }
          >
            <li className="py-2 px-4 hover:text-red-400 hover:rounded-full font-medium">
              Add Product
            </li>
          </NavLink>
          <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-400 border-b-[2px] rounded-full"
                : ""
            }
          >
            <li className="py-2 px-4 hover:text-red-400 hover:rounded-full font-medium">
              My Cart
            </li>
          </NavLink>
        </>
      );
    
      return (
        <div className="sticky top-0 z-10 w-full bg-base-100 drop-shadow-sm border-b-2 border-base-200">
          <div className="navbar">
            <div className="navbar-start">
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
                <img
                  className="w-16"
                  src="https://i.postimg.cc/0jYhkhyg/icon1.png"
                  alt="logo"
                />
                <p className="normal-case text-xl">Automotive</p>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
              {user ? (
                <>
                  <div className="flex items-center gap-2 lg:gap-4">
                    <button
                      onClick={handleLogOut}
                      className="py-2 px-4 hover:text-red-400 border-b-[2px] rounded-full"
                    >
                      Log out
                    </button>
                    <div className="flex items-center gap-1">
                      <div className="text-right hidden md:block lg:block">
                        <p className="text-[12px]">{user?.displayName}</p>
                        <p className="text-[14px]">{user?.email}</p>
                      </div>
                      <div className="text-4xl text-gray-600">
                        <img className="text-4xl text-gray-600"></img>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " text-red-500 rounded-sm"
                        : ""
                    }
                  >
                    <p className="py-2 px-4 hover:text-red-400 border-b-[2px] rounded-full">
                      Log In
                    </p>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      );
    };
    

export default Navbar;