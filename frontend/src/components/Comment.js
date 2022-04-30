import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const Comment = ({ comment: { text, user, date_posted } }) => {

  return (
    <div>
      <div className="border-b-2 py-2">
        <span className="flex gap-x-2 text-sm text-slate-500 mb-1">
          <Link to={`/${user.enrollment_number}</span>}`}>
            {user.first_name}
          </Link>
          <p> . </p>
          <p>{formatDistanceToNow(new Date(date_posted))} ago</p>
        </span>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Comment;
