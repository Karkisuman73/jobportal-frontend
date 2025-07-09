// src/layouts/MainLayout.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Notification from "@/components/Notificaton";
function MainLayout({ user }) {
  return (
    <>
      <Navbar user={user} />
      <Notification />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
