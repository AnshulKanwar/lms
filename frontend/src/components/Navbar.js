import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="bg-sky-800 text-slate-200 px-8 sm:px-20 py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          <Link to="/">LMS</Link>
        </h1>
        <span>
          {user ? (
            <span className="flex gap-x-2">
              <span className="flex items-center gap-x-2 cursor-pointer hover:underline">
                <BiUserCircle className="text-2xl" />
                {user.first_name.charAt(0).toUpperCase() +
                  user.first_name.slice(1)}
              </span>
              <span>|</span>
              <button className="hover:underline" onClick={logoutUser}>Logout</button>
            </span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
