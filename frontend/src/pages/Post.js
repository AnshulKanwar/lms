import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";

const Post = () => {
  const [post, setPost] = useState(null);

  const params = useParams();

  useEffect(() => {
    axios
      .get(`/api/forum/${params.id}`)
      .then((res) => setPost(res.data))
      .catch((err) => alert(err));
  }, [params]);

  if (!post) {
    return null;
  }

  console.log(post);

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
          <form>
            <label htmlFor="comment" className="hidden">
              Write a Comment
            </label>
            <textarea className="w-full" rows="5"></textarea>
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
          {post.comment_set.map((comment) => (
            <div>
              <span className="flex gap-x-2 text-sm text-slate-500 mb-1">
                <Link to={`/${comment.user.enrollment_number}</span>}`}>
                  {comment.user.first_name}
                </Link>
                <p> . </p>
                <p>{formatDistanceToNow(new Date(comment.date_posted))} ago</p>
              </span>
              <h1>{comment.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Post;
