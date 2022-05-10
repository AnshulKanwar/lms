import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  let params = useParams();

  useEffect(() => {
    axios
      .get(`/api/users/${params.user}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, [params]);

  return (
    <Layout title="Profile">
      {loading ? null : (
        <div>
          <h1 className="text-lg font-semibold">{user.user.first_name}</h1>
          <span>{user.batch.name}</span>
        </div>
      )}
    </Layout>
  );
};

export default UserProfile;
