import Announcements from "./Announcements";
import TimeTableList from "./TimeTableList";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-y-10">
      {/* <h1 className="text-3xl font-semibold mb-10">Explore</h1> */}
      <TimeTableList />
      <Announcements />
    </div>
  );
};

export default Sidebar;
