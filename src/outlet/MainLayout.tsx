
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Notification from '@/components/Notificaton';

interface MainLayoutProps {
  user?: any;
}

const MainLayout: React.FC<MainLayoutProps> = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <Notification />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
