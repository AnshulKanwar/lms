import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { capitalize } from "../utils/helpers";

const PostListItem = ({ post: { id, title, text, date_posted, user } }) => {
  let date_posted_formatted = formatDistanceToNow(new Date(date_posted));
  date_posted_formatted = capitalize(date_posted_formatted);

  return (
    <Link to={`/forum/${id}`}>
      <div className="bg-white p-5 rounded-md hover:shadow-md">
        <span className="text-sm text-slate-500 mb-1">
          {date_posted_formatted} ago by{" "}
          <Link to={`/${user.enrollment_number}`} className="hover:underline">
            {user.first_name}
          </Link>
        </span>
        <h1 className="text-lg font-semibold mb-3">{title}</h1>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default PostListItem;
