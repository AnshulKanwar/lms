import { BiX } from "react-icons/bi";

const Notifications = ({ notifications, setIsOpen }) => {
  console.log(notifications);
  return (
    <div className="absolute top-[-18px] right-[-28px] max-w-sm">
      <div className="bg-white text-black shadow-2xl p-4 rounded-md">
        <div className="flex justify-between mb-3 px-3">
          <h1 className="font-semibold text-xl text-slate-500">
            Notifications
          </h1>
          <button onClick={() => setIsOpen(false)}>
            <BiX />
          </button>
        </div>
        <div className="flex flex-col gap-y-2">
          {notifications.map((notification) => (
            <div key={notification.id} className="py-2 border-b-2">
              <div
                className={`px-3 py-4 flex flex-col gap-y-1 ${
                  !notification.isSeen ? "bg-rose-200 rounded-md" : ""
                }`}
              >
                <div className="flex flex-col">
                  <h1 className="text-sm font-semibold">
                    {notification.title}
                  </h1>
                  <span className="text-xs text-slate-500 font-light">
                    {notification.course.name}
                  </span>
                </div>
                <p className="text-xs truncate">{notification.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
