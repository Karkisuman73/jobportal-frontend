import { useLocation, useNavigate } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import Search from "../../components/Search";
import { toast } from "react-toastify";
import useFetchJobs from "@/utils/useFetchJobs";

// Define the shape of a job item — customize fields as per your data
interface Job {
  _id: string;
  position: string;
  companyname: string;
  view: string;
  type: string;
  time: string;
  level: string;
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Explore: React.FC = () => {
  const query = useQuery().get("q") || "";
  const navigate = useNavigate();
  const { data } = useFetchJobs("/joblist");

  // data might be undefined or array of jobs
  const searchdata = data?.filter((item: Job) =>
    item.position.toLowerCase().includes(query.toLowerCase())
  );

  // Explicitly type the _id param as string
  const handleClickButton = (_id: string) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login");
      navigate("/");
    } else {
      navigate(`/details/${_id}`);
    }
  };

  return (
    <div className="p-4">
      <Search />

      <div className="mt-4 space-y-5">
        {searchdata?.map((result: Job, i: number) => (
          <div
            key={result._id || i}
            className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition"
          >
            <div className="text-2xl font-semibold text-emerald-700">
              {result.position}
            </div>
            <div className="ml-2 text-gray-700 mt-1">{result.companyname}</div>
            <div className="ml-2 text-sm text-gray-500">{result.view}</div>

            <div className="flex flex-wrap gap-3 mt-4">
              <div className="bg-gray-200 text-sm px-4 py-1 rounded-full font-medium text-gray-700">
                {result.type}
              </div>
              <div className="bg-gray-200 text-sm px-4 py-1 rounded-full font-medium text-gray-700">
                {result.time}
              </div>
              <div className="bg-gray-200 text-sm px-4 py-1 rounded-full font-medium text-gray-700">
                {result.level}
              </div>

              <button
                onClick={() => handleClickButton(result._id)}
                className="flex items-center gap-2 border border-green-400 text-green-600 px-4 py-1 rounded-full hover:bg-green-50 transition ml-auto"
              >
                Apply <FaLocationArrow />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
