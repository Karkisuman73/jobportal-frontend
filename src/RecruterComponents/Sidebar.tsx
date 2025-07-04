import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const handleButton =()=>{
     navigate("/");
     setTimeout(()=>{
      window.location.reload()
     },1000)
     localStorage.clear()
  }

  return (
    <div className="flex flex-col bg-gray-900 lg:w-64 h-screen text-white fixed shadow-lg">
      <div className="text-3xl font-bold text-center mt-6 font-sans tracking-wide">
        Job Portal
      </div>

      <div className="flex flex-col mt-12 px-8 gap-6 text-lg font-medium">
        <button
          onClick={() => navigate("/addjob")}
          className="hover:bg-gray-800 py-2 px-4 rounded transition duration-200 text-left"
        >
          ➕ Add Job
        </button>

        <button
        onClick={()=> navigate("/inbox")}
          className="hover:bg-gray-800 py-2 px-4 rounded transition duration-200 text-left"
        >
          📥 Inbox
        </button>

        <button 
        onClick={()=>navigate("/joblist")}
          className="hover:bg-gray-800 py-2 px-4 rounded transition duration-200 text-left"
        >
          📋 Job List
        </button>

        <button
        onClick={()=>navigate("/profile")}
          className="hover:bg-gray-800 py-2 px-4 rounded transition duration-200 text-left"
        >
          👤 Profile
        </button>

        <button
          onClick={handleButton}
          className="mt-10 hover:bg-red-600 bg-red-500 py-2 px-4 rounded transition duration-200 text-left"
        >
          🔓 Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
