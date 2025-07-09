import useFetchJobs from "@/utils/useFetchJobs";
import { imageUrl } from "@/data/config";
import { useUser } from "@/context/UserContext";
import { jsPDF } from "jspdf";
import domtoimage from "dom-to-image";

interface UserInfo {
  userId: string | number;
  jobpreference: string;
  aboutyourself: string;
  location: string;
  skills?: string[];
  language?: string[];
  experiences?: string[];
  education?: string[];
  expertise?: string[]; // corrected spelling here
}

interface ProfileImage {
  userId: string | number;
  image: string | null;
}

const ProfileSeeker: React.FC = () => {
  const { data } = useFetchJobs<ProfileImage[]>("/SeekerProfile");
  const { data: information } = useFetchJobs<UserInfo[]>("/seekerInfo");
  const { userid } = useUser();
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const currentId = typeof userid === "function" ? userid() : userid;

  const userData = information?.filter((p: UserInfo) => p.userId == currentId);
  const profile = data?.find((p: ProfileImage) => p.userId == currentId);

  const pdfDownload = async (id: string) => {
    const node = document.getElementById(id);
    if (!node) return;

    const button = node.querySelector("button");
    if (button) button.style.display = "none";

    try {
      const dataUrl = await domtoimage.toPng(node);
      const pdf = new jsPDF("p", "mm", "a4");

      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(dataUrl, "PNG", 0, 20, pdfWidth, pdfHeight);
      pdf.save("profile.pdf");
    } catch (error) {
      console.error("Could not generate PDF", error);
    } finally {
      if (button) button.style.display = "block";
    }
  };

  return (
    <div className="p-10 from-purple-100 to-blue-100 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        {userData?.map((result: UserInfo, k: number) => (
          <div
            key={k}
            id={`profile-${k}`}
            className="bg-white rounded-xl shadow-md p-8 grid md:grid-cols-3 gap-8"
          >
            <div className="flex ml-10">
              {/* Left Column */}
              <div className="md:col-span-1 flex flex-col items-center text-center">
                <img
                  src={
                    profile?.image ? `${imageUrl}/${profile.image}` : undefined
                  }
                  className="w-32 h-32 object-cover rounded-full shadow-md"
                  alt="Profile"
                />
                <h2 className="mt-4 text-xl font-semibold">{username}</h2>
                <h2 className="mt-1 text-xl font-semibold">
                  {result.jobpreference}
                </h2>
                <p className="text-gray-600 mt-2">{result.aboutyourself}</p>

                <div className="mt-4 w-full">
                  <h3 className="font-medium bg-[#27384C] w-80 p-1 text-white text-lg mb-1">
                    Contact Information
                  </h3>
                  <div className="grid text-start ml-5">
                    <div className="text-lg font-medium">98000000</div>
                    <div className="text-lg font-medium">{email}</div>
                    <div className="text-lg font-medium">{result.location}</div>
                  </div>

                  {/* Skills */}
                  <h3 className="font-medium bg-[#27384C] w-80 p-1 text-white text-lg mt-4 mb-1">
                    Skills
                  </h3>
                  <div className="p-2">
                    {Array.isArray(result.skills) &&
                      result.skills.map((skill: string, i: number) => (
                        <div
                          key={i}
                          className="text-base flex ml-5 font-medium"
                        >
                          {skill}
                        </div>
                      ))}
                  </div>

                  {/* Languages */}
                  <h3 className="font-medium bg-[#27384C] w-80 p-1 text-white text-lg mt-4 mb-1">
                    Languages
                  </h3>
                  <div>
                    {Array.isArray(result.language) &&
                      result.language.map((lang: string, i: number) => (
                        <div
                          key={i}
                          className="text-base flex ml-5 font-medium"
                        >
                          {lang}
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="ml-20 mt-10 md:col-span space-y-6">
                {/* Experience Summary */}
                <div>
                  <h3 className="font-medium bg-[#27384C] w-100 p-1 text-white text-center text-lg mb-1">
                    Experiences
                  </h3>
                  <div className="gap-4 text-center">
                    {Array.isArray(result.experiences) &&
                      result.experiences.map((exp: string, i: number) => (
                        <div
                          key={i}
                          className="text-gray-700 flex ml-5 font-medium"
                        >
                          {exp}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="font-medium bg-[#27384C] w-100 p-1 text-center text-white text-lg mb-1">
                    Education
                  </h3>
                  <div className="gap-4">
                    {Array.isArray(result.education) &&
                      result.education.map((edu: string, i: number) => (
                        <div
                          key={i}
                          className="text-gray-700 flex ml-5 font-medium"
                        >
                          {edu}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Expertise */}
                <div>
                  <h3 className="font-medium bg-[#27384C] w-100 p-1 text-center text-white text-lg mb-1">
                    Expertise
                  </h3>
                  <div className="space-y-2">
                    {Array.isArray(result.expertise) &&
                      result.expertise.map((exp: string, i: number) => (
                        <div
                          key={i}
                          className="text-base flex ml-5 font-medium"
                        >
                          {exp}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => pdfDownload(`profile-${k}`)}
                  className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSeeker;
