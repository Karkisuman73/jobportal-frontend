import useFetchJobs from "@/utils/useFetchJobs";
import { Link, useParams } from "react-router-dom";

// 1. Define the Job type based on your API response structure
interface Job {
  _id: string;
  position: string;
  companyname: string;
  view: string;
  type: string;
  time: string;
  level: string;
  aboutCompany: string;
  responsibilities: string;
  requiredSkills: string;
}

const DetailsOfJob = () => {
  const { data } = useFetchJobs<Job[]>("/joblist"); // Add generic type
  const { _id } = useParams<{ _id: string }>();

  const job = data?.find((job) => job._id === _id);
  console.log("Job details:", job);

  return (
    <div className="p-6 md:px-20">
      {job ? (
        <>
          <div className="text-3xl font-bold text-emerald-700">
            {job.position}
          </div>
          <div className="text-lg mt-1 text-gray-700">{job.companyname}</div>
          <div className="text-sm text-gray-500 mb-4">{job.view}</div>

          <div className="flex flex-wrap gap-4 mt-2">
            <span className="bg-gray-200 text-sm px-4 py-1 rounded-full font-medium text-gray-700">
              {job.type}
            </span>
            <span className="bg-gray-200 text-sm px-4 py-1 rounded-full font-medium text-gray-700">
              {job.time}
            </span>
            <span className="bg-gray-200 text-sm px-4 py-1 rounded-full font-medium text-gray-700">
              {job.level}
            </span>
          </div>

          <hr className="my-6 border-t-2 border-gray-300 opacity-50" />

          <div className="space-y-4">
            <div>
              <p className="font-semibold">About Company</p>
              <p className="ml-4 text-gray-700">{job.aboutCompany}</p>
            </div>

            <div>
              <p className="font-semibold">Role Description</p>
              <p className="ml-4 text-gray-700">{job.aboutCompany}</p>{" "}
              {/* Change to correct field if needed */}
            </div>

            <div>
              <p className="font-semibold">Responsibilities</p>
              <p className="ml-4 text-gray-700">{job.responsibilities}</p>
            </div>

            <div>
              <p className="font-semibold">Required Skills</p>
              <p className="ml-4 text-gray-700">{job.requiredSkills}</p>
            </div>
          </div>

          <div className="mt-6">
            <Link to={`/apply/${_id}`}>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition">
                Apply
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="p-6 text-center text-red-500 text-xl">Loading...</div>
      )}
    </div>
  );
};

export default DetailsOfJob;
