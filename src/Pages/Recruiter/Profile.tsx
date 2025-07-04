import { useForm } from "react-hook-form";
import useFetchJobs from "../../utils/useFetchJobs";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";

interface Job {
  companyname: string;
  position: string;
  level: string;
  type: string;
  time: string;
  view: string;
  aboutCompany: string;
  responsibilities: string;
  requiredSkills: string;
  roleDescription: string;
}

interface Form {
  username: string;
  email: string;
  number: string;
  link: string;
  cv: FileList;
  formText: string;
  eligible: string;
  office: string;
}

interface ProfileForm {
  image: FileList;
}

const Profile: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileForm>();

  const { data: postjob } = useFetchJobs<Job[]>("/joblist");
  const { data: postform } = useFetchJobs<Form[]>("/userFormData");

  const [image, setImage] = useState<string>("");
  const [isUploaded, setIsUploaded] = useState(false);

  const email = localStorage.getItem("userEmail");
  const username = localStorage.getItem("username");

  useEffect(() => {
    axios
      .get("http://localhost:3001/profiledata")
      .then((res) => {
        if (res.data.length > 0) {
          setImage(res.data[0].image);
          setIsUploaded(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = async (data: ProfileForm) => {
    const profileData = new FormData();
    profileData.append("image", data.image[0]);

    try {
      const response = await axios.post(
        "http://localhost:3001/profile",
        profileData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success("Profile image uploaded successfully!");
      setImage(response.data.image);
      setIsUploaded(true);
    } catch (e) {
      console.error(e);
      toast.error("Profile image upload failed");
    }
  };

  return (
    <div className=" ml-48 lg:ml-64 min-h-screen bg-gray-100 ">
      
      <div className="bg-gray-900 h-20 flex items-center justify-between px-10 shadow-md">
        <h1 className=" lg:text-3xl text-white font-semibold">Recruiter Profile</h1>
        {image && (
          <div className="w-14 h-14 border-2 border-white rounded-full overflow-hidden bg-white">
            <img
              src={`http://localhost:3001/uploads/${image}`}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      <div className="flex gap-10">
      
        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-80 h-80 relative border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center bg-white shadow-md"
        >
          <input
            type="file"
            id="image"
            accept="image/*"
            {...register("image")}
            className="hidden"
            disabled={isUploaded}
          />
          {isUploaded && image ? (
            <img
              src={`http://localhost:3001/uploads/${image}`}
              alt="Uploaded"
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          ) : (
            <div className="flex flex-col items-center z-10">
              <label
                htmlFor="image"
                className="cursor-pointer bg-black text-white px-4 py-2 rounded hover:bg-gray-800 mb-2"
              >
                Upload Image
              </label>
              <p className="text-sm text-gray-500">No image uploaded</p>
              <button
                type="submit"
                className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Submit
              </button>
            </div>
          )}
        </form> */}

        <div className="flex flex-col gap-6 flex-1">
          <div className="p-6 ">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">User Information</h2>
            <div className="mb-2">
              <label className="font-medium text-gray-600">Username:</label>
              <p className="text-gray-800">{username || "N/A"}</p>
            </div>
            <div className="mb-2">
              <label className="font-medium text-gray-600">Email:</label>
              <p className="text-gray-800">{email || "N/A"}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md border">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Overview</h2>
            <div className="flex justify-between">
              <div className="text-center">
                <p className="text-gray-600 font-medium">Jobs Posted</p>
                <p className="text-lg font-bold text-blue-700">{postjob?.length ?? 0}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 font-medium">Forms Submitted</p>
                <p className="text-lg font-bold text-blue-700">{postform?.length ?? 0}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
