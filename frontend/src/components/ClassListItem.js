import { FiClock } from "react-icons/fi";
import { formatTime } from "../utils/helpers";

const ClassListItem = ({ cls }) => {
  return (
    <div className="bg-white rounded-md px-4 py-2">
      <div className="flex flex-col gap-y-3">
        <div className="text-sm text-slate-500 flex justify-between">
          <span>{cls.course.code}</span>
          <span className="flex gap-x-1 items-center">
            <FiClock />
            {formatTime(cls.start_time)} - {formatTime(cls.end_time)}
          </span>
        </div>
        <h1 className="text-md font-semibold">{cls.course.name}</h1>
        <p>
          {cls.teacher.user.first_name} {cls.teacher.user.last_name}
        </p>
      </div>
    </div>
  );
};

export default ClassListItem;
