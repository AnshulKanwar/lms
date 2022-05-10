import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { capitalize } from "../utils/helpers";

import { BiBell, BiUserCircle } from "react-icons/bi";
import Notifications from "./Notifications";
import axios from "axios";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/api/notifications")
      .then((res) => {
        let notifs = res.data;
        let unreadNotifs = 0;
        setNotifications(notifs);

        notifs.forEach((notif) => {
          if (!notif.isSeen) {
            unreadNotifs += 1;
          }
        });

        setUnreadNotifications(unreadNotifs);
      })
      .catch((err) => alert(err));
  }, []);

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
          {user ? (
            <>
              <span className="text-2xl relative">
                <button
                  className="flex items-center relative"
                  onClick={() => setNotificationsIsOpen(true)}
                >
                  <div>
                    <BiBell />
                  </div>
                  <span className="absolute top-[-9px] right-[-9px] grid place-items-center text-xs bg-rose-500 text-white rounded-full w-5 h-5">
                    {unreadNotifications}
                  </span>
                </button>
                {notificationsIsOpen && (
                  <Notifications
                    notifications={notifications}
                    setIsOpen={setNotificationsIsOpen}
                  />
                )}
              </span>
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
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
