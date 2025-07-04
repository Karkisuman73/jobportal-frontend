// src/components/Navbar.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useUser } from "../context/UserContext";
import Login from "@/Pages/Auth/LoginAuth";
import Signup from "@/Pages/Auth/SignupAuth";
import ProfileImage from "./ProfileImage";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-white shadow-md w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
       
        <div
          className="text-2xl font-bold text-emerald-500 cursor-pointer"
          // onClick={() => navigate("")}
        >
          Jobsearch
        </div>

        {
          user?
          (
            <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <button onClick={() => navigate("/homepage")}>Home</button>
          <button onClick={() => navigate("/explore")}>Explore</button>
          <button onClick={() => navigate("/advancesearch")}>Search</button>
        </div>
          ):
          (
             <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
             <button onClick={() => navigate("/explore")}>Explore</button>
          <button onClick={() => navigate("/advancesearch")}>Search</button>
          </div>
           
          )
          
        }
        

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-gray-700">Welcome {user.username}</span>
              {/* <button
                onClick={handleLogout}
                className="bg-black rounded-2xl px-4 py-2 text-white hover:bg-red-500"
              >
                Logout
              </button> */}
              <ProfileImage />
            </>
          ) : (
            <>
              {/* <button
                onClick={() => navigate("/login")}
                className="bg-black rounded-2xl px-4 py-2 text-white hover:bg-emerald-500"
              >
                Login
              </button> */}
               <Login/>
              {/* <button
                onClick={() => navigate("/signup")}
                className="bg-black rounded-2xl px-4 py-2 text-white hover:bg-emerald-500"
              >
                Signup
              </button> */}
              <Signup/>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes className="text-2xl text-emerald-500" />
            ) : (
              <FaBars className="text-2xl text-emerald-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white w-full shadow-md">
          <div className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
            <button onClick={() => { navigate("/"); setOpen(false); }}>Home</button>
            <button onClick={() => { navigate("/explore"); setOpen(false); }}>Explore</button>
            <button onClick={() => { navigate("/advancesearch"); setOpen(false); }}>Search</button>

            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="bg-black rounded-2xl px-4 py-2 text-white hover:bg-red-500"
              >
                Logout
              </button>
            ) : (
              <>
                 <Login/>
                 
                  <Signup/>
                 
                   </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
