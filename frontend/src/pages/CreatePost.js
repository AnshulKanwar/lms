import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Layout from "../components/Layout";
import AuthContext from "../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const addPost = (e) => {
    e.preventDefault();
    axios
      .post(`/api/forum/`, {
        title,
        text,
        user: user.user_id,
      })
      .then((res) => {
        navigate("/forum");
      })
      .catch((err) => alert(err));
  };

  return (
    <Layout>
      <div className="bg-white rounded p-5">
        <form onSubmit={addPost}>
          <div className="mb-4">
            <label htmlFor="title" className="hidden">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="text" className="hidden">
              Text (optional)
            </label>
            <textarea
              id="text"
              rows="3"
              placeholder="Text (optional)"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex justify-end">
            <input
              type="submit"
              value="Post"
              className="bg-cyan-800 text-white p-2 rounded cursor-pointer"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreatePost;
