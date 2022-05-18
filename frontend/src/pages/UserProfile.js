import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
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

  useEffect(() => {
    axios
      .get(`/api/courses`)
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout title="Profile">
      {loading ? null : (
        <div className="flex flex-col gap-y-5">
          <div className="bg-white p-5 rounded-md">
            <h1 className="mb-5 text-lg font-semibold">{`${user.user.first_name} ${user.user.last_name}`}</h1>
            <span>{user.batch.name}</span>
          </div>
          <div className="bg-white p-5 rounded-md">
            <h1 className="mb-5 text-lg font-semibold">Your Courses</h1>
            <div>
              <table className="text-left w-full">
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                </tr>
                {courses.map((course) => (
                  // <div className="flex gap-x-5">
                  //   <span>{course.code}</span>
                  //   <span>{course.name}</span>
                  // </div>
                  <tr>
                    <td>{course.code}</td>
                    <td>{course.name}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default UserProfile;
