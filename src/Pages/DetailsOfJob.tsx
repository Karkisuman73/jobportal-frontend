import { Link, useParams } from "react-router-dom";
import { data1 } from "../data/data1";

const DetailsOfJob = () => {
  const { id } = useParams();
  const job = data1.find((job) => job.id == id);

  if (!job) {
    return (
      <div className="p-6 text-center text-red-500 text-xl">
        Job not found.
      </div>
    );
  }

  return (
    <div className="p-6 md:px-20">
      <div className="text-3xl font-bold text-emerald-700">{job.position}</div>
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
          <ul className="ml-4 list-disc text-gray-700">
            {job.roleDescription.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
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
        <Link to={`/apply/${id}`}>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition">
            Apply
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsOfJob;
