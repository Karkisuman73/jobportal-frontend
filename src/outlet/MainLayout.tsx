import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Notification from "@/components/Notificaton";

// ✅ Define the props type
interface MainLayoutProps {
  user: any; // Replace `any` with a specific type if you have one (e.g., User)
}

function MainLayout({ user }: MainLayoutProps) {
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
