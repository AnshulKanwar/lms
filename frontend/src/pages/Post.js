import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

import Comment from "../components/Comment";
import Layout from "../components/Layout";
import AuthContext from "../context/AuthContext";

const Post = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const { user } = useContext(AuthContext);

  const params = useParams();

  const addComment = (e) => {
    e.preventDefault();
    console.log({
      text: comment,
      user: user.id,
    });
    axios
      .post(`/api/forum/${params.id}/comment`, {
        text: comment,
        user: user.user_id,
      })
      .then((res) => {
        console.log(res);
        setComment("");
        setComments(prevComment => [res.data].concat(prevComment))
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

  return (
    <Layout>
      <div className="flex flex-col gap-y-6">
        <div className="bg-white rounded-md p-5">
          <span className="text-sm text-slate-500">
            {formatDistanceToNow(new Date(post.date_posted))} ago by{" "}
            <Link
              to={`/${post.user.enrollment_number}`}
              className="hover:underline"
            >
              {post.user.first_name}
            </Link>
          </span>
          <h1 className="text-lg font-semibold">{post.title}</h1>
          <p>{post.text}</p>
        </div>
        <div className="bg-white rounded-md p-5">
          <form onSubmit={addComment}>
            <label htmlFor="comment" className="hidden">
              Write a Comment
            </label>
            <textarea
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
        <div className="bg-white rounded-md p-5">
          <div className="flex flex-col gap-y-5">
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
