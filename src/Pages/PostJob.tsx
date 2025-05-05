import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

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
}

const JobPostForm: React.FC = () => {
  const [save, setSave] = useState<JobData>({
    companyname: "",
    position: "",
    level: "",
    type: "",
    time: "",
    view: "",
    aboutCompany: "",
    responsibilities: "",
    requiredSkills: "",
    roleDescription: "",
  });

  const handleInfo = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSave({ ...save, [e.target.name]: e.target.value });
  };

  const handlePost = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/job", save);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
    <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
      Create Job Post
    </h2>

    <form className="grid grid-cols-1 gap-6">
      {/* Repeatable input block */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
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
        <label className="block mb-1 text-sm font-medium text-gray-700">
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
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Level (Senior, Mid, Junior)
        </label>
        <input
          type="text"
          name="level"
          value={save.level}
          onChange={handleInfo}
          className="input-style"
          placeholder="e.g., Mid"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Type (Onsite, Remote)
        </label>
        <input
          type="text"
          name="type"
          value={save.type}
          onChange={handleInfo}
          className="input-style"
          placeholder="e.g., Remote"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Time (Part-time, Full-time)
        </label>
        <input
          type="text"
          name="time"
          value={save.time}
          onChange={handleInfo}
          className="input-style"
          placeholder="e.g., Full-time"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
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
        <label className="block mb-1 text-sm font-medium text-gray-700">
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
        <label className="block mb-1 text-sm font-medium text-gray-700">
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
        <label className="block mb-1 text-sm font-medium text-gray-700">
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
        <label className="block mb-1 text-sm font-medium text-gray-700">
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
