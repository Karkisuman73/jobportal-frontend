import { useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";

interface FormData{
  username:string,
  email:string,
  number:string,
  link:string,
  cv:FileList,
  formText:string,
  eligible:string,
  office:string,
  

}

const Apply: React.FC = () => {
  const{
    register,
    handleSubmit,
    formState:{errors},

  } =useForm<FormData>();
   const {_id}=useParams();
  console.log(">>>",_id)
  

const onSubmit  = async (data:FormData)=>{
const formData = new FormData();
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("number", data.number);
  formData.append("link", data.link);
  formData.append("formText", data.formText);
  formData.append("eligible", data.eligible);
  formData.append("office", data.office);
  formData.append("cv", data.cv[0]);
  formData.append("jobid",_id) 
try{
  const response= await axios.post("http://localhost:3001/formdata",formData,
    {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }
  )
  console.log(response.data)
  toast.success("Successful")
}
catch(e)
{
console.log(e)
toast.error("Submission failed");
}
}

  // const { id } = useParams();
  // const job = data1.find((job) => job.id == id);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert("Successfully submitted!");
  // };

  // if (!job) {
  //   return (
  //     <div className="p-6 text-center text-red-500 text-xl">
  //       Job not found.
  //     </div>
  //   );
  // }

  return (
    <div className="p-6 md:px-20">
      {/* <h1 className="text-2xl font-semibold text-emerald-700 mb-2">{job.position}</h1>
      <h2 className="text-lg text-gray-700 mb-4">{job.companyname}</h2>

      <hr className="border-2 border-gray-300 opacity-50 my-6" /> */}

      <form onSubmit={handleSubmit(onSubmit)}
      action="/formdata"
      encType="multipart/form-data"
       className="max-w-6xl mx-auto px-6 py-5 bg-white shadow-lg rounded-lg"
      >
         <h3 className="text-lg font-semibold text-center ">Application Form</h3>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div>
              <label htmlFor="name" className="block font-medium">
                * Name and surname
              </label>
              <input
                className="w-full h-10 rounded-full border border-gray-400 px-4"
                type="text"
                placeholder="Enter fullname"
               {...register('username',{required: true})} 

              />
              {errors.username && errors.username.type==='required' && ( <p>Username is required</p> )}
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">
                * Email
              </label>
              <input
                className="w-full h-10 rounded-full border border-gray-400 px-4"
                type="email"
                placeholder="Enter email"
                {...register('email',{required:true})}
              />
              {errors.email && errors.email.type==='email' && ( <p>Email is required</p> )}
            </div> 
             <div>
              <label htmlFor="number" className="block font-medium">
                * Phone Number
              </label>
              <input
                className="w-full h-10 rounded-full border border-gray-400 px-4"
                type="text"
                placeholder="Enter phone number"
               {...register('number',{required:true})}
              />
              {errors.number && errors.number.type==='required' && ( <p>Phone number is required </p> )}
            </div> 
             <div>
              <label htmlFor="profile" className="block font-medium">
                LinkedIn Profile
              </label>
              <input
                className="w-full h-10 rounded-full border border-gray-400 px-4"
                type="url"
                placeholder="Paste link"
                id="profile"
                {...register('link')}
              />
            </div>

            <div>
              <label htmlFor="cv" className="block font-medium">
                Attachment (CV, Cover letter, etc.)
              </label>
              <input
                className="w-full border border-gray-400 rounded-xl px-4 py-2"
                type="file"
                id="cv"
               
                {...register("cv",{required:true})} 
              />
              {errors.cv && errors.cv.type==="required" && ( <p>cv is required</p> )}
            </div>
          </div>

        
          <div className="flex flex-col gap-4 w-full md:w-1/2 mt-6 md:mt-10">
            <div>
              <label htmlFor="reason" className="block font-medium">
                * Why are you a perfect fit for this role?
              </label>
              <textarea
                className="w-full h-40 rounded-xl border border-gray-400 px-4 py-2 resize-none"
                id="reason"
               {...register('formText',{required:true})}
              ></textarea>
              {errors.formText && errors.formText.type==="required" && ( <p>This field is required</p> )}
            </div>

            <div>
              <label className="block font-medium">
                * Are you eligible to apply?
              </label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-1">
                  <input type="radio"  value="Yes" 
                  {...register('eligible',{required:true})}
                  /> Yes
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio"  value="No" 
                  {...register('eligible',{required:true})}
                  /> No
                </label>
              </div>
              {errors.eligible && errors.eligible.type==="required" &&( <p>Please select option</p> )}
            </div>

            <div>
              <label className="block font-medium">
                * Can you commute to office 2 days a week?
              </label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-1">
                  <input type="radio"  value="Yes" required 
                  {...register('office',{required:true})}
                  /> Yes
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio"  value="No" 
                   {...register('office',{required:true})}
                  /> No
                </label>
              </div>
              {errors.office&&errors.office.type==="required"&&( <p>Select one option</p> )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full transition"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
