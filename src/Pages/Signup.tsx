import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface SignupData {
  username: string;
  email: string;
  password: string;
  role: string;
}

const Signup: React.FC = () => {
  const [save, setSave] = useState<SignupData>({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleInfo = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSave({ ...save, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/add", save);
      console.log(response);
      toast.success("Signup successful");
    } catch (e:any) {
      toast.error(e.response?.data?.message || "Signup unsuccessful");
      console.error(e);
    }
  };

  const savetolocal = () => {
    localStorage.setItem("suman", "123");
  };

  const deletetolocal = () => {
    localStorage.removeItem("suman");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleInfo}
              value={save.username}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleInfo}
              value={save.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Select Role</label>
            <select
              name="role"
              onChange={handleInfo}
              value={save.role}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select an option</option>
              <option value="job_seeker">Job Seeker</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleInfo}
              value={save.password}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="flex gap-4 mt-4">
          <button
            onClick={savetolocal}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg"
          >
            Save to Local
          </button>
          <button
            onClick={deletetolocal}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg"
          >
            Delete Local
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
