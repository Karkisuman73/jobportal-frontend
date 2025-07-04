import { CgProfile } from "react-icons/cg";
import { FaPortrait } from "react-icons/fa";
import { VscGitStashApply } from "react-icons/vsc";

const ApplyJob = () => {
  return (
 <div className="p-10">
  <div className="flex flex-col md:flex-row justify-between gap-6">
    
    {/* Register */}
    <div className="flex items-start border border-gray-300 rounded-3xl p-4 w-full md:w-1/3 shadow hover:shadow-lg transition">
      <div className="h-20 w-40 flex items-center justify-center rounded-full bg-blue-100 mr-4">
        <CgProfile size={40} className="text-blue-600" />
      </div>
      <div>
        <p className="text-xl font-semibold mb-2">Register Your Account</p>
        <p className="text-sm text-gray-600">
          Create your profile in just a few steps. Start your journey toward better career opportunities.
        </p>
      </div>
    </div>

    {/* Upload */}
    <div className="flex items-start border border-gray-300 rounded-3xl p-4 w-full md:w-1/3 shadow hover:shadow-lg transition">
      <div className="h-20 w-40 flex items-center justify-center rounded-full bg-green-100 mr-4">
        <FaPortrait size={40} className="text-green-600" />
      </div>
      <div>
        <p className="text-xl font-semibold mb-2">Upload Your Resume</p>
        <p className="text-sm text-gray-600">
          Showcase your skills and experience. Let employers discover your potential instantly.
        </p>
      </div>
    </div>

    {/* Apply */}
    <div className="flex items-start border border-gray-300 rounded-3xl p-4 w-full md:w-1/3 shadow hover:shadow-lg transition">
      <div className="h-20 w-40 flex items-center justify-center rounded-full bg-purple-100 mr-4">
        <VscGitStashApply size={40} className="text-purple-600" />
      </div>
      <div>
        <p className="text-xl font-semibold mb-2">Apply for Dream Job</p>
        <p className="text-sm text-gray-600">
          Explore thousands of job listings. Apply with a single click and get hired faster.
        </p>
      </div>
    </div>

  </div>
</div>

  );
};

export default ApplyJob;
  