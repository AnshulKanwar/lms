import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { BiLike, BiDotsVerticalRounded } from "react-icons/bi";

import Comment from "../components/Comment";
import Layout from "../components/Layout";
import AuthContext from "../context/AuthContext";
import { capitalize } from "../utils/helpers";

const Post = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const { user } = useContext(AuthContext);

  const params = useParams();

  const addComment = (e) => {
    e.preventDefault();
    axios
      .post(`/api/forum/${params.id}/comment`, {
        text: comment,
        user: user.user_id,
      })
      .then((res) => {
        setComment("");
        setComments((prevComment) => [res.data].concat(prevComment));
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    axios
      .get(`/api/forum/${params.id}`)
      .then((res) => {
        setPost(res.data);
        setComments(res.data.comment_set);
      })
      .catch((err) => alert(err));
  }, [params]);

  if (!post) {
    return null;
  }

  let date_posted_formatted = formatDistanceToNow(new Date(post.date_posted));
  date_posted_formatted = capitalize(date_posted_formatted);

  return (
    <Layout>
      <div className="flex flex-col gap-y-6">
        <div className="bg-white rounded-md p-5">
          <div className="flex justify-between">
            <div className="text-sm text-slate-500">
              {date_posted_formatted} ago by{" "}
              <Link
                to={`/${post.user.enrollment_number}`}
                className="hover:underline"
              >
                {post.user.first_name}
              </Link>
            </div>
            <div className="text-xl">
              <span>
                <BiDotsVerticalRounded />
              </span>
            </div>
          </div>
          <h1 className="text-lg font-semibold">{post.title}</h1>
          <p>{post.text}</p>
          <div className="flex items-center gap-x-2">
            <span>
              <BiLike className="text-xl" />
            </span>
            {post.likes}
          </div>
        </div>
        <div className="bg-white rounded-md p-5">
          <form onSubmit={addComment}>
            <label htmlFor="comment" className="hidden">
              Write a Comment
            </label>
            <textarea
              id="comment"
              className="w-full"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex justify-end">
              <input
                type="submit"
                value="Comment"
                className="bg-cyan-800 text-white p-2 rounded cursor-pointer"
              />
            </div>
          </form>
        </div>
        {comments.length > 0 && (
          <div className="bg-white rounded-md p-5">
            <div className="flex flex-col gap-y-5">
              {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Post;
