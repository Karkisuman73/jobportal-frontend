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

  const token = localStorage.getItem("token");

  let userId: string | null = null;

  if (token) {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      userId = decoded.id;
    } catch (error) {
      console.error("Invalid token", error);
    }
  }

  const userPhoto = profile?.find((p: any) => p.userId === userId);

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
            src={
              profile && userPhoto
                ? `${imageUrl}/${userPhoto.image}`
                : undefined
            }
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={Seekerprofile}>Profile</DropdownMenuItem>

        <button>
          <Upload />
        </button>

        <DropdownMenuItem onClick={Information}>
          Upload Information
        </DropdownMenuItem>

        <DropdownMenuItem onClick={LogOut}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileImage;
