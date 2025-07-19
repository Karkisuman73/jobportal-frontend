import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Verify: React.FC = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const[loading, setLoading]=useState(false);
  const email = useLocation().state?.email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

     if (!email) return toast.error("Email not found. Please register again.");

    try {
      setLoading(true)
      const API = import.meta.env.VITE_API_URL;
      const { data } = await axios.post(`${API}/verifyotp`, { email, code });

      toast.success(data?.message|| "Verification successful");
      navigate("/");
    } catch (err: any) {
      toast.error( "Verification failed");
    }
    setLoading(false)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Verify Email: {email}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter 6-digit code"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            {loading? "verifying": "verify"}
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default Verify;
