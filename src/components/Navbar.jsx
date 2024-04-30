import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const { logout, user } = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            {user ? (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  {" "}
                  <Link to="/" className="text-black">
                    {" "}
                    Home{" "}
                  </Link>{" "}
                </li>
                <li>
                  <Link to="/allTouristSpot" className="text-black">
                    All Tourist Spot
                  </Link>
                </li>
                <li>
                  <Link to="/addTouristSpot" className="text-black">
                    Add Tourist Spot
                  </Link>
                </li>
                <li>
                  <Link to="/myList" className="text-black">
                    My List
                  </Link>
                </li>
              </ul>
            ) : (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/" className="text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/allTouristSpot" className="text-black">
                    All Tourist Spot
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Explorex
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          {user ? (
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/allTouristSpot">All Tourist Spot</Link>
              </li>
              <li>
                <Link to="/addTouristSpot">Add Tourist Spot</Link>
              </li>
              <li>
                <Link to="/myList">My List</Link>
              </li>
            </ul>
          ) : (
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/allTouristSpot">All Tourist Spot</Link>
              </li>
            </ul>
          )}
        </div>

        <div className="navbar-end">
          <label className="cursor-pointer grid place-items-center mr-5">
            <input
              onChange={handleToggle}
              checked={theme === 'light'? false : true}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {user ? (
            <>
              {/* <div className="tooltip tooltip-bottom" data-tip={user.displayName}> */}
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                data-tooltip-place="left"
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar online btn btn-ghost btn-circle mr-8"
                >
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Link>
                      <img
                        alt="User Image"
                        src={
                          user?.photoURL ||
                          "https://parikhpower.in/wp-content/uploads/sites/7/2017/09/profile-placeholder.png"
                        }
                      />
                    </Link>
                  </div>
                </div>
              </a>
              <Tooltip id="my-tooltip" />
              {/* </div> */}
              <button
                onClick={logout}
                className="btn btn-error text-white px-8"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-error mr-5 px-8 text-white">
                Login
              </Link>

              <Link to="/register" className="btn btn-success px-7 text-white">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
