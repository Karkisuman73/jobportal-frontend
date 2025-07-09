import Buttoncomponent from "@/RecruterComponents/Buttoncomponents";
import { AlertDialogBox } from "./AlertConfirm";
import axios from "axios";
import { useEffect, useState } from "react";

interface dataProps {
  companyname: string;
  position: string;
  _id: string;
  level: string;
  type: string;
  time: string;
  view: string;
  aboutCompany: string;
  responsibilities: string;
  requiredSkills: string;
  roleDescription: string;
}

const JobList = () => {
  const [data, setData] = useState<dataProps[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(data);
  const fetchJobs = async () => {
    try {
      const API = import.meta.env.VITE_API_URL;
      const res = await axios.get(`${API}/joblist`);

      setData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchJobs();
    setTimeout(() => {
      <p>loading...</p>;
    }, 100);
  }, []);

  return (
    <div className="ml-48 lg:ml-64 ">
      <div className="bg-gray-900 h-20 flex items-center justify-between px-10 shadow-md">
        <p className="text-2xl lg:text-3xl text-white font-semibold">
          Available Job List
        </p>
      </div>
      {loading ? (
        <div>Loading....</div>
      ) : data?.length === 0 ? (
        <p className="text-gray-500 text-lg">no job found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-6">
          {data?.map((result) => (
            <div
              key={result._id}
              className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {result.position}
              </h2>
              <p className="text-gray-600 font-medium mb-1">
                {result.companyname}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {result.level} | {result.type}
              </p>
              <div className="flex gap-18">
                <Buttoncomponent id={result._id} />

                <AlertDialogBox id={result._id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
