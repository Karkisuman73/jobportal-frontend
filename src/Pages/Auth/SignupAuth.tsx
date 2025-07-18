import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, ChangeEvent } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface SignupData {
  username: string;
  email: string;
  password: string;
  role: string;
}

function Signup() {
  const navigate = useNavigate();
  const[loading, setLoading]= useState(false)
  const [save, setSave] = useState<SignupData>({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleInfo = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSave({ ...save, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const useremail = save.email;
    try {
      setLoading(true)
      const API = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${API}/add`, save);
      console.log(response);
      toast.success("Verification required");
      toast.success("otp sent in email");
      navigate("/verify",{ state: {email: useremail } });
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Signup unsuccessful");
      console.error(e);
    }
    setLoading(false)
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Signup</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] transition-all duration-300">
        <DialogHeader>
          <DialogTitle className="text-center">Signup Form</DialogTitle>
        </DialogHeader>
        {/* Signup form */}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              Username
            </label>
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
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
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
            <label className="block mb-1 font-medium text-gray-700">
              Select Role
            </label>
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
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
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
           {loading ? "signing up..": "signup"}
          </button>
        </form>

        {/* Signuo FOrm */}
      </DialogContent>
    </Dialog>
  );
}
export default Signup;
