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

function ProfileImage() {
  const { data: profile } = useFetchJobs("/SeekerProfile");
  console.log("profile", profile);
  const { logout } = useUser();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const { id: userId } = jwtDecode(token);
  console.log(userId);

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
            src={profile && `${imageUrl}/${userPhoto?.image}`}
            className="h-full w-full object-cover"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={Seekerprofile}>Profile</DropdownMenuItem>

        <button >
          {" "}
          <Upload />
        </button>

        <DropdownMenuItem onClick={Information}>
          Upload Information
        </DropdownMenuItem>

        <DropdownMenuItem onClick={logout}>logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default ProfileImage;
