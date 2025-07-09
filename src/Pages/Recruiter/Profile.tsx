import useFetchJobs from "../../utils/useFetchJobs";

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

const Profile: React.FC = () => {
  const { data: postjob } = useFetchJobs<Job[]>("/joblist");
  const { data: postform } = useFetchJobs<Form[]>("/userFormData");

  const email = localStorage.getItem("userEmail");
  const username = localStorage.getItem("username");

  return (
    <div className="ml-48 lg:ml-64 min-h-screen bg-gray-100">
      <div className="bg-gray-900 h-20 flex items-center justify-between px-10 shadow-md">
        <h1 className="lg:text-3xl text-white font-semibold">
          Recruiter Profile
        </h1>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col gap-6 flex-1">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              User Information
            </h2>
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
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Overview
            </h2>
            <div className="flex justify-between">
              <div className="text-center">
                <p className="text-gray-600 font-medium">Jobs Posted</p>
                <p className="text-lg font-bold text-blue-700">
                  {postjob?.length ?? 0}
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 font-medium">Forms Submitted</p>
                <p className="text-lg font-bold text-blue-700">
                  {postform?.length ?? 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
