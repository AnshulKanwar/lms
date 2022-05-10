import { useState } from "react";
import { BiX } from "react-icons/bi";

const Notifications = ({ setIsOpen }) => {
  const [notifications, setNotifications] = useState([
    {
      title: "Get ready for orgy",
    },
    {
      title: "I am resigning - takla",
    },
  ]);

  return (
    <div className="absolute top-[-18px] right-[-12px] min-w-max">
      <div className="bg-white text-black shadow-2xl p-4 rounded-md">
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <BiX />
          </button>
        </div>
        <div>
          {notifications.map((notification) => (
            <div className="p-3 border-b-2">
              <h1 className="text-xs">{notification.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
