import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdvanceSearch from "./components/AdvanceSearch";
import Apply from "./components/Apply";
import PostJob from "./Pages/Recruiter/PostJob";
import DetailsOfJob from "./Pages/Seeker/DetailsOfJob";
import Explore from "./Pages/Seeker/Explore";
import axios from "axios";
import { useEffect, useState } from "react";
import AuthLayout from "./outlet/AuthLayout";
import MainLayout from "./outlet/MainLayout";
import RecruterOutlet from "./outlet/RecruterOutlet";
import ProtectedRoute from "./Pages/Auth/ProtectedRoute";
import Inbox from "./Pages/Recruiter/Inbox";
import JobList from "./Pages/Recruiter/JobList";
import Profile from "./Pages/Recruiter/Profile";
import TaskManagement from "./Pages/Recruiter/TaskManagement";
import LandingPage from "./Pages/Seeker/LandingPage";
import Homepage from "./Pages/Seeker/landingpage2";
import ProfileSeeker from "./Pages/Seeker/SeekerProfile";
import UserDetails from "./Pages/Seeker/UserDetails";
import Category from "./Job Category/Category";
import Notification from "./components/Notificaton";
import Verify from "./Pages/Auth/Verify";

function App() {
  const [setUser] = useState<any>(); // optional: move this to UserContext

  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      try {
        const API = import.meta.env.VITE_API_URL;
        const response = await axios.post(
          `${API}/verify`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response?.data?.user) {
          setUser(response.data.user);
          console.log("User verified");
        } else {
          console.error("User data missing in response");
        }
      } catch (err) {
        console.error("Verification failed:", err);
      }
    };

    verify();
  }, []);

  return (
    <Routes>
      <Route element={<AuthLayout />} />
      <Route path="/verify" element={<Verify />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />

        <Route path="/homepage" element={<Homepage />} />
        <Route path="/note" element={<Notification />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/details/:_id" element={<DetailsOfJob />} />
        <Route path="/advancesearch" element={<AdvanceSearch />} />
        <Route path="/apply/:_id" element={<Apply />} />
        <Route path="/profileseeker" element={<ProfileSeeker />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/category/:path" element={<Category />} />
      </Route>

      <Route element={<RecruterOutlet />}>
        <Route
          path="/TaskManagement"
          element={
            <ProtectedRoute>
              <TaskManagement />
            </ProtectedRoute>
          }
        />
        <Route path="/addjob" element={<PostJob />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
