import useFetchJobs from "@/utils/useFetchJobs";
import { imageUrl } from "@/data/config";
import { useUser } from "@/context/UserContext";
import React from "react";

interface SeekerInfo {
  userId: string | number;
  jobpreference: string;
  aboutyourself: string;
  skills?: string;
  age: number | string;
  years: number | string;
  location: string;
  text: string;
}

interface SeekerProfile {
  image: string | null;
}

const ProfileSeeker: React.FC = () => {
  const { data } = useFetchJobs<SeekerProfile[]>("/SeekerProfile");
  const { data: information } = useFetchJobs<SeekerInfo[]>("/seekerInfo");
  const { userid } = useUser();

  const currentId = typeof userid === "function" ? userid() : userid;

  const userData = information?.filter(
    (p: SeekerInfo) => p.userId == currentId
  );

  return (
    <div className="p-10 from-purple-100 to-blue-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 grid md:grid-cols-3 gap-8">
        {userData?.map((result: SeekerInfo, k: number) => (
          <React.Fragment key={k}>
            <div className="md:col-span-1 flex flex-col items-center text-center">
              <img
                src={
                  data && data[0]?.image
                    ? `${imageUrl}/${data[0].image}`
                    : undefined
                }
                className="w-32 h-32 object-cover rounded-full border-4 border-indigo-300 shadow-md"
                alt="Profile"
              />
              <h2 className="mt-4 text-xl font-semibold">
                {result.jobpreference}
              </h2>
              <p className="text-gray-600 mt-2">{result.aboutyourself}</p>
              <div className="mt-4">
                <h3 className="font-medium mb-1">Skills</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {result.skills?.split(",").map((skill: string, i: number) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-blue-800 font-medium px-3 py-1 rounded-full text-sm"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <label className="text-gray-500 text-sm">Age</label>
                    <div className="text-lg font-medium">{result.age}</div>
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm">
                      Years of Experience
                    </label>
                    <div className="text-lg font-medium">{result.years}</div>
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm">Location</label>
                    <div className="text-lg font-medium">{result.location}</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-gray-500 text-sm">Phone</label>
                    <div className="text-lg font-medium">98000000</div>
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm">Email</label>
                    <div className="text-lg font-medium">
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Experience</h3>
                <p className="text-gray-700">{result.text}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProfileSeeker;
