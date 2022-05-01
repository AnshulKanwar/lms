import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import PostListItem from "../components/PostListItem";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const getAllPosts = () => {
    axios.get("/api/forum").then((res) => setPosts(res.data));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Layout title="Forum">
      <div className="flex flex-col gap-y-10">
        <div className="bg-white rounded p-5">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="w-full rounded"
            onClick={() => navigate("/forum/create")}
          />
        </div>
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default Forum;
