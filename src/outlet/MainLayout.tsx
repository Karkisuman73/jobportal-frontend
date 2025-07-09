import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Notification from "@/components/Notificaton";
import { useUser } from "@/context/UserContext";

function MainLayout() {
  const { user } = useUser();

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
