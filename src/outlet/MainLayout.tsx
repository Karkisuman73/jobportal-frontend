// src/outlet/MainLayout.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Notification from "@/components/Notificaton";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Notification />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
