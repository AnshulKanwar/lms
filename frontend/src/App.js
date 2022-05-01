import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import NotFoundPage from "./pages/404";
import CreatePost from "./pages/CreatePost";
import Forum from "./pages/Forum";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Post from "./pages/Post";
import UserProfile from "./pages/UserProfile";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App min-h-screen bg-[#F0F1F4] text-slate-600 pb-20">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <HomePage />
                  </PrivateRoute>
                }
              />
              <Route path="/forum" element={<Forum />} />
              <Route
                path="/forum/:id"
                element={
                  <PrivateRoute>
                    <Post />
                  </PrivateRoute>
                }
              />
              <Route
                path="/forum/create"
                element={
                  <PrivateRoute>
                    <CreatePost />
                  </PrivateRoute>
                }
              />
              <Route
                path="/:user"
                element={
                  <PrivateRoute>
                    <UserProfile />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
