import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface LoginData {
  email: string;
  password: string;
}

interface DecodedToken {
  role: string;
  key: string,
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [save, setSave] = useState<LoginData>({
    email: "",
    password: "",
  });

 
  


  const handleInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setSave({ ...save, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", save);
      toast.success("Login successful");

      const token = response.data.token;
      const role=response.data.role  
      const username = response.data.username;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);



      const decoded = jwtDecode<DecodedToken>(token);
      console.log("Logged in as:", decoded.role);

      if (decoded.role === "job_seeker") {
        navigate("/");
      } else {
        navigate("/TaskManagement");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login unsuccessful");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="text"
            name="email"
            value={save.email}
            onChange={handleInfo}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={save.password}
            onChange={handleInfo}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
