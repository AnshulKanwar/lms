import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

  return (
    <div className="grid place-items-center px-10">
      <div className="max-w-lg w-full bg-white mt-32 p-8 rounded-lg">
        <form onSubmit={loginUser}>
          <div className="mb-4">
            <label htmlFor="enrollment_number" className="block mb-2">
              Enrollment Number
            </label>
            <input
              type="text"
              name="enrollment_number"
              placeholder="Enter Enrollment Number"
              className="form-inpu rounded w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="form-inpu rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded bg-sky-800 text-white hover:bg-sky-900"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
