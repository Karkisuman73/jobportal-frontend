import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { GrFormUpload } from "react-icons/gr";
import { useState } from "react";

type Inputs = {
  image: FileList;
};
export function Upload() {

    const {
    register,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
const[showbox,setShowbox]=useState(false)
  const token= localStorage.getItem("token")
  console.log("token",token)
  const decode=jwtDecode(token)
  const userId= decode.id
  // console.log("UserID",userId)
  

   const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      setValue("image", fileList);

      const profileData = new FormData();
      profileData.append("image", file);
      profileData.append("userId",userId)
      console.log("Uploaded file:", file);

  try {
        const response = await axios.post(
          "http://localhost:3001/seekerprofile",
          profileData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        console.log("response", response.data);
        toast.success("Image upload successful");
        setShowbox(false)
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <Dialog open={showbox} onOpenChange={setShowbox}>
      <DialogTrigger asChild>
        <button onClick={()=>setShowbox(true)} className="items-left text-left gap-2 rounded-sm px-2 py-1.5 w-80 text-sm outline-hidden hover:bg-gray-100">Upload profile</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Upload Profile Photo</DialogTitle>
          
        </DialogHeader>
<>
    <button>
    <div >
      <label htmlFor="image" ><GrFormUpload color="black" size={80} className="ml-35"/>
      </label>
      {/* <form> */}
       <input
          type="file"
          id="image"
          className="hidden"
          {...register("image")}
          onChange={handleImageChange}
        /> 
      </div>
      </button>
      
   </>
      </DialogContent>
    </Dialog>
  )
}
