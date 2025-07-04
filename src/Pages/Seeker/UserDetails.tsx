import axios from "axios";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { toast } from "react-toastify";
import { useUser } from "@/context/UserContext";

interface FormData {
  jobpreference: string;
  aboutyourself: string;
  skills: string; 
  experiences: string; 
  text: string;
  age: string;
  location: string;
  education:string,
  years: string;
  experties:string;
  language:string
}

export default function App() {
  const { userid } = useUser();
  const userId = userid(); 
  console.log("userid", userId);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const skillsArray = data.skills.split(',').map(skill => skill.trim());
    const experienceArray = data.experiences.split(',').map(exp => exp.trim());
    const educationArray= data.education.split(",").map(edu=>edu.trim());
    const expertiesArray= data.experties.split(",").map(exp=>exp.trim());
    const languageArray= data.language.split(",").map(exp=>exp.trim());
    
    const payload = {
      jobpreference: data.jobpreference,
      aboutyourself: data.aboutyourself,
      text: data.text,
      age: data.age,
      location: data.location,
      years: data.years,
      skills: skillsArray,
      experiences: experienceArray,
      education:educationArray,
      experties:expertiesArray,
      language:languageArray,
      userId: userId,
    };

    try {
      const response = await axios.post("http://localhost:3001/information", payload);
      console.log(response.data);
      toast.success("Information saved successfully");
    } catch (err) {
      console.log(err);
      toast.error("Please try again");
    }
  };

  return (
    <div className="py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto px-6 py-5 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-3xl font-semibold text-center mb-5">
          User Information
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <TextField
              label="Job Preference"
              variant="outlined"
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              {...register("jobpreference")}
            />

            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              {...register("age")}
            />

            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              {...register("location")}
            />

            <TextField
              label="Years of Experience"
              variant="outlined"
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              {...register("years")}
            />
              <TextField
              label="About Yourself"
              variant="outlined"
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              {...register("aboutyourself")}
            />
              <TextField
              label="Languages"
              variant="outlined"
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              {...register("language")}
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-700 text-white text-xl font-semibold py-3 px-10 rounded-xl hover:bg-blue-800 transition"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <TextField
              label="Education "
              variant="outlined"
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              {...register("education")}
            />

            <TextField
              label="Skills (comma-separated)"
              variant="outlined"
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              {...register("skills")}
            />

            <TextField
              label="Experiences (comma-separated)"
              variant="outlined"
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              {...register("experiences")}
            />


 
            <TextField
              label="experties "
              variant="outlined"
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              {...register("experties")}
            />

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Add Note
              </label>
              <textarea
                className="w-full h-36 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                placeholder="Write your message here..."
                {...register("text")}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
