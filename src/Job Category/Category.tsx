import useFetchJobs from "@/utils/useFetchJobs";
import { useNavigate, useParams } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { toast } from "react-toastify";


const Category = () => {
  const { data } = useFetchJobs("/joblist");
  const {path}=useParams()
  console.log("path",path)
  console.log("data",data)
  const navigate= useNavigate()
  
const categoryData=data?.filter((item)=>
item.category.toLowerCase()===path?.toLocaleLowerCase()
)

console.log("categoryData",categoryData)
const handleClickButton = (_id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login");
      navigate("/");
    } else {
      navigate(`/details/${_id}`);
    }
  };

  return (
    <div className="py-3">
     
        <div className="text-3xl font-mono font-semibold text-center underline pb-3 ">Category:{path}</div>
     
      <div className="flex items-center justify-center">
        {categoryData?.map((result,k)=>(
           <div
                      key={k}
                      className="border w-300 rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition"
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

export default Category;
