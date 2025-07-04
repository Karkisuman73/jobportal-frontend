import React, { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import usePost from "../../utils/PostData";

interface JobData {
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
  category: string;
  location:string;
}

const JobPostForm: React.FC = () => {
  const { post } = usePost();
  const [save, setSave] = useState<JobData>({
    companyname: "",
    position: "",
    level: "",
    type: "",
    time: "",
    view: "",
    category: "",
    aboutCompany: "",
    responsibilities: "",
    requiredSkills: "",
    roleDescription: "",
    location:""
  });

  const handleInfo = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setSave({ ...save, [e.target.name]: e.target.value });
  };

  const handlePost = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await post("/job", save);
      console.log(response);
      toast.success("Job added successfully");
    } catch (e) {
      console.error(e);
    }
  };

  

  return (
    <div className="ml-48 lg:ml-64 ">
      <div className="bg-gray-900 h-20 flex items-center justify-between px-10 shadow-md">
        <p className="text-2xl lg:text-3xl text-white font-semibold">
          Post a Job
        </p>
    
      </div>

      <div className="bg-gray-100 px-10 rounded-2xl shadow-lg w-full  py-4">
        <form className="grid grid-cols-1 gap-6">
          <p className="text-center text-2xl font-medium underline">
            Job Details
          </p>
          <div>
            <label className="block mb-1 ml-3 text-sm font-medium text-gray-700">
              Position
            </label>
            <input
              type="text"
              name="position"
              value={save.position}
              onChange={handleInfo}
              className="input-style"
              placeholder="e.g., Frontend Developer"
              required
            />
          </div>

          <div>
            <label className="block mb-1 ml-3 text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              name="companyname"
              value={save.companyname}
              onChange={handleInfo}
              className="input-style"
              placeholder="e.g., Google, TCS"
              required
            />
          </div>

          <div>
            <label className="block mb-1 ml-3 text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={save.location}
              onChange={handleInfo}
              className="input-style"
              placeholder="location.."
              required
            />
          </div>

          <div>
            <label className="block mb-1 ml-3 text-sm font-medium text-gray-700">
              Level
            </label>
            <select
              name="level"
              value={save.level}
              onChange={handleInfo}
              className="input-style"
              required
            >
              <option value="">Select Level</option>
              <option value="senior">Senior</option>
              <option value="mid">Mid</option>
              <option value="junior">Junior</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 ml-3 text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              name="type"
              value={save.type}
              onChange={handleInfo}
              className="input-style"
              required
            >
              <option value="">Select Type</option>
              <option value="onsite">Onsite</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 ml-3 text-sm font-medium text-gray-700">
              Time (Part-time, Full-time)
            </label>

            <select
              name="time"
              value={save.time}
              onChange={handleInfo}
              className="input-style"
              required
            >
              <option value="">Select..</option>
              <option value="part-time">Part time</option>
              <option value="full-time">Full time</option>
            </select>
            <input />
          </div>

          <div>
            <label className="block mb-1 ml-3 text-sm font-medium text-gray-700">
              Select Category
            </label>

            <select
              name="category"
              value={save.category}
              onChange={handleInfo}
              className="input-style"
              required
            >
              <option value="">Select..</option>
              <option value="Finance & Accounting">Finance</option>
              <option value="Education">Education</option>
              <option value="Sales & Marketing">Sales & Marketing</option>
              <option value="It Service">It Service</option>
              <option value="Health & Care">Health & Care</option>
              <option value="Skilled Trades & Construction">
                Skilled Trades & Construction
              </option>
              <option value="Customer Service">Customer Service</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Project Management">Project Management </option>
            </select>
            <input />
          </div>

          <div>
            <label className="block mb-1 ml-3 text-sm font-medium text-gray-700">
              Overview
            </label>
            <textarea
              name="view"
              value={save.view}
              onChange={handleInfo}
              className="textarea-style"
              placeholder="Short summary of the job"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block mb-1 ml-3 text-sm font-medium text-gray-700">
              About Company
            </label>
            <textarea
              name="aboutCompany"
              value={save.aboutCompany}
              onChange={handleInfo}
              className="textarea-style"
              placeholder="Tell something about your company"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block mb-1 ml-3 text-sm font-medium text-gray-700">
              Responsibilities
            </label>
            <textarea
              name="responsibilities"
              value={save.responsibilities}
              onChange={handleInfo}
              className="textarea-style"
              placeholder="List job responsibilities"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block mb-1 ml-3 text-sm font-medium text-gray-700">
              Required Skills
            </label>
            <textarea
              name="requiredSkills"
              value={save.requiredSkills}
              onChange={handleInfo}
              className="textarea-style"
              placeholder="Mention necessary skills"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block mb-1 ml-3 text-sm font-medium text-gray-700">
              Role Description
            </label>
            <textarea
              name="roleDescription"
              value={save.roleDescription}
              onChange={handleInfo}
              className="textarea-style"
              placeholder="Explain what the role entails"
              rows={3}
              required
            />
          </div>

          <button
            type="submit"
            onClick={handlePost}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;
