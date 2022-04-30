import { formatDate } from "../utils/helpers";

const AnnouncementListItem = ({
  announcement: { title, text, date_posted },
}) => {
  return (
    <div className="bg-white rounded-md px-4 py-2">
      <div className="flex flex-col gap-y-3">
        <span className="text-sm text-slate-500 flex justify-between">
          {formatDate(date_posted)}
        </span>
        <h1 className="text-md font-semibold">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AnnouncementListItem;
