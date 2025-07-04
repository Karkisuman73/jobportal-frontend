import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../../context/UserContext";

interface LoginData {
  email: string;
  password: string;
}

interface DecodedToken {
  role: string;
  key: string,
  username:string
}


 function Login() {

    const navigate = useNavigate();
       const { login } = useUser();
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
         toast.success("Login successful ");
        const { token, role, username,email } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("role", role); 
        localStorage.setItem("email", email); 
        login({ username, role, token }); 
    
        const decoded = jwtDecode<DecodedToken>(token);
        console.log("Logged in as:", decoded.role);
    
        if (decoded.role === "job_seeker") {
          navigate("/homepage");
          toast.success("Login as a job seeker")
        } else {
          navigate("/profile");
        }
      } catch (error) {
        console.error(error);
        toast.error("Login unsuccessful");
      }
    };


  return (
    <Dialog  >
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] transition-all duration-300 ">
        <DialogHeader>
          <DialogTitle className="text-center">Enter Login Credentials</DialogTitle>
        </DialogHeader>
      {/* form content */}
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
      {/* form content */}
        
      </DialogContent>
    </Dialog>
  )
}
export default Login
