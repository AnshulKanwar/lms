import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PostListItem from "../components/PostListItem";

const Forum = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    axios.get("/api/forum").then((res) => setPosts(res.data));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Layout title="Forum">
      <div className="flex flex-col gap-y-10">
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default Forum;
