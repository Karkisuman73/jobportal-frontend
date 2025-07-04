// import axios from "axios";
// import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import useFetchJobs from "../../utils/useFetchJobs";
// import { toast } from "react-toastify";

// interface JobData {
//   companyname: string;
//   position: string;
//   level: string;
//   type: string;
//   time: string;
//   view: string;
//   aboutCompany: string;
//   responsibilities: string;
//   requiredSkills: string;
//   roleDescription: string;
//   category: string; // ✅ NEW FIELD
//   _id?: string;
// }

// const JobPostForm: React.FC = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { data } = useFetchJobs<JobData>("/joblist");

//   const [save, setSave] = useState<JobData>({
//     companyname: "",
//     position: "",
//     level: "",
//     type: "",
//     time: "",
//     view: "",
//     aboutCompany: "",
//     responsibilities: "",
//     requiredSkills: "",
//     roleDescription: "",
//     category: "", // ✅ NEW FIELD
//   });

//   useEffect(() => {
//     if (data) {
//       const selectedJob = data.find((job) => job._id === id);
//       if (selectedJob) {
//         setSave(selectedJob);
//       }
//     }
//   }, [data, id]);

//   const handleInfo = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setSave({ ...save, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async (e: FormEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `http://localhost:3001/jobedit/${id}`,
//         save
//       );
//       console.log("Job updated:", response.data);
//       toast.success("Job updated successfully");
//       navigate("/joblist");
//     } catch (error) {
//       console.error("Error updating job:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
//         <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
//           Edit Job Post
//         </h2>

//         <form className="grid grid-cols-1 gap-6">
//           {[
//             { name: "position", label: "Position", type: "text" },
//             { name: "companyname", label: "Company Name", type: "text" },
//             { name: "level", label: "Level (Senior, Mid, Junior)", type: "text" },
//             { name: "type", label: "Type (Onsite, Remote)", type: "text" },
//             { name: "time", label: "Time (Part-time, Full-time)", type: "text" },
//              { name: "time", label: "Time (Part-time, Full-time)", type: "text" },
//             { name: "category", label: "Category (e.g., Tech, Design)", type: "text" }, // ✅ NEW FIELD
//           ].map((field) => (
//             <div key={field.name}>
//               <label className="block mb-1 text-sm font-medium text-gray-700">
//                 {field.label}
//               </label>
//               <input
//                 type={field.type}
//                 name={field.name}
//                 value={(save as any)[field.name]}
//                 onChange={handleInfo}
//                 className="input-style"
//                 required
//               />
//             </div>
//           ))}

//           {[
            
//             { name: "aboutCompany", label: "About Company", rows: 3 },
//             { name: "responsibilities", label: "Responsibilities", rows: 4 },
//             { name: "requiredSkills", label: "Required Skills", rows: 3 },
//             { name: "roleDescription", label: "Role Description", rows: 3 },
//           ].map((field) => (
//             <div key={field.name}>
//               <label className="block mb-1 text-sm font-medium text-gray-700">
//                 {field.label}
//               </label>
//               <textarea
//                 name={field.name}
//                 value={(save as any)[field.name]}
//                 onChange={handleInfo}
//                 rows={field.rows}
//                 className="textarea-style"
//                 required
//               />
//             </div>
//           ))}

//           <button
//             type="submit"
//             onClick={handleUpdate}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
//           >
//             Update Job
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default JobPostForm;
