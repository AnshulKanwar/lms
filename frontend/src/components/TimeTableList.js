import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import ClassListItem from "./ClassListItem";

const TimeTableList = () => {
  const [timeTable, setTimeTable] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const day = new Date().getDay();

    axios
      .get(`/api/time-table/${user.batch}`, { params: { day } })
      .then((res) => setTimeTable(res.data));
  }, [user]);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-3">Upcoming for you</h1>
      <div className="flex flex-col gap-y-3">
        {timeTable.map((cls) => (
          <ClassListItem cls={cls} />
        ))}
      </div>
    </div>
  );
};

export default TimeTableList;
