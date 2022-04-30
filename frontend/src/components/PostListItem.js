import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

const PostListItem = ({ post: { title, text, date_posted, user } }) => {
  let date_posted_formatted = formatDistanceToNow(new Date(date_posted));
  date_posted_formatted =
    date_posted_formatted.charAt(0).toUpperCase() +
    date_posted_formatted.slice(1);

  return (
    <div className="bg-white p-5 rounded-md hover:shadow-md">
      <span className="text-sm text-slate-500 mb-1">
        {date_posted_formatted} ago by <Link to="" className="hover:underline">{user.first_name}</Link>
      </span>
      <h1 className="text-lg font-semibold mb-3">{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default PostListItem;
