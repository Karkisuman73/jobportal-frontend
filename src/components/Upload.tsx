import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { GrFormUpload } from "react-icons/gr";
import { useState } from "react";

type Inputs = {
  image: FileList;
};

export function Upload({ userId }: { userId: string | null }) {
  const { register, setValue } = useForm<Inputs>();
  const [showbox, setShowbox] = useState(false);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!userId) {
      toast.error("User ID not found");
      return;
    }

    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      setValue("image", fileList);

      const profileData = new FormData();
      profileData.append("image", file);
      profileData.append("userId", userId); // ✅ userId comes from prop
      console.log("Uploaded file:", file);

      try {
        const API = import.meta.env.VITE_API_URL;
        const response = await axios.post(
          `${API}/seekerprofile`,
          profileData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        console.log("response", response.data);
        toast.success("Image upload successful");
        setShowbox(false);
      } catch (e) {
        console.log(e);
        toast.error("Image upload failed");
      }
    }
  };

  return (
    <Dialog open={showbox} onOpenChange={setShowbox}>
      <DialogTrigger asChild>
        <button
          onClick={() => setShowbox(true)}
          className="items-left text-left gap-2 rounded-sm px-2 py-1.5 w-80 text-sm outline-hidden hover:bg-gray-100"
        >
          Upload profile
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            Upload Profile Photo
          </DialogTitle>
        </DialogHeader>
        <div>
          <label htmlFor="image">
            <GrFormUpload
              color="black"
              size={80}
              className="ml-35 cursor-pointer"
            />
          </label>
          <input
            type="file"
            id="image"
            className="hidden"
            {...register("image")}
            onChange={handleImageChange}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
