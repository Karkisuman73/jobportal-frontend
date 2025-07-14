import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/context/UserContext";
import { imageUrl } from "@/data/config";
import useFetchJobs from "@/utils/useFetchJobs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Upload } from "./Upload";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  id: string;
}

function ProfileImage() {
  const { data: profile } = useFetchJobs("/SeekerProfile");
  console.log("profile", profile);
  const { logout } = useUser();
  const navigate = useNavigate();

  const userData = localStorage.getItem("user");
  let userId: string | null = null;

  if (userData) {
    try {
      const parsed = JSON.parse(userData);
      const decoded = jwtDecode<DecodedToken>(parsed.token);
      userId = decoded.id;
      console.log("userId:", userId);
    } catch (error) {
      console.error("Invalid token", error);
    }
  } else {
    console.log("No user data found in localStorage");
  }

  
  const userPhoto = profile?.find((p: any) => p.userId === userId);
  console.log("Photooo",userPhoto)

  const LogOut = () => {
    logout();
    navigate("/");
    toast.success("User Logout successful");
  };

  const Seekerprofile = () => {
    navigate("/profileseeker");
  };

  const Information = () => {
    navigate("/userdetails");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-15 aspect-square rounded-full overflow-hidden border-2 border-amber-400">
          <img
            src={userPhoto ? `${imageUrl}/${userPhoto.image}` : undefined}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={Seekerprofile}>Profile</DropdownMenuItem>

       
        <Upload userId={userId} />

        <DropdownMenuItem onClick={Information}>
          Upload Information
        </DropdownMenuItem>

        <DropdownMenuItem onClick={LogOut}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileImage;
