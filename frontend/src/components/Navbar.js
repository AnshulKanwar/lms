import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { capitalize } from "../utils/helpers";

import { BiBell, BiUserCircle } from "react-icons/bi";
import Notifications from "./Notifications";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false);

  return (
    <div className="bg-cyan-800 text-slate-200 px-8 sm:px-20 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-10">
          <h1 className="text-3xl font-semibold mr-10">
            <Link to="/">LMS</Link>
          </h1>
          {user && (
            <>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </>
          )}
          <Link to="/forum" className="hover:underline">
            Forum
          </Link>
        </div>
        <div className="flex gap-x-6">
          <span className="flex items-center text-2xl relative">
            <button onClick={() => setNotificationsIsOpen(true)}>
              <BiBell />
            </button>
            {notificationsIsOpen && <Notifications setIsOpen={setNotificationsIsOpen}/>}
          </span>
          {user ? (
            <span className="flex gap-x-2">
              <Link
                to={`/${user.enrollment_number}`}
                className="flex items-center gap-x-2 cursor-pointer hover:underline"
              >
                <BiUserCircle className="text-2xl" />
                {capitalize(user.first_name)}
              </Link>
              <span>|</span>
              <button className="hover:underline" onClick={logoutUser}>
                Logout
              </button>
            </span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
