import React, { useState, ChangeEvent } from "react";
import useFetchJobs from "@/utils/useFetchJobs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


interface Job {
  _id: string;
  companyname: string;
  category: string;
  position: string;
  location: string;
  type: string;
  level: string;
  title?: string;
}

interface Filters {
  range: string;
  job: string;
  location: string;
  category: string;
  level: string;
  type: string;
}

const AdvanceSearch: React.FC = () => {
  const { data } = useFetchJobs<Job[]>("/joblist"); 
  const navigate = useNavigate();

  const [filters, setFilters] = useState<Filters>({
    range: "",
    job: "",
    location: "",
    category: "",
    level: "",
    type: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (_id: string) => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      toast.error("Please login");
      navigate("/");
    } else {
      try {
        const userObj = JSON.parse(userData);
        const token = userObj.token;

        if (!token) {
          toast.error("Please login");
          navigate("/");
        } else {
          navigate(`/details/${_id}`);
        }
      } catch {
        toast.error("Please login");
        navigate("/");
      }
    }
  };

  const filteredJobs = data?.filter((item) => {
    return (
      (!filters.category ||
        item.category?.toLowerCase() === filters.category.toLowerCase()) &&
      (!filters.type ||
        item.type?.toLowerCase() === filters.type.toLowerCase()) &&
      (!filters.level ||
        item.level?.toLowerCase() === filters.level.toLowerCase()) &&
      (!filters.location ||
        item.location
          ?.toLowerCase()
          .includes(filters.location.toLowerCase())) &&
      (!filters.job ||
        (item.title ?? "").toLowerCase().includes(filters.job.toLowerCase()))
    );
  });

  return (
    <>
      <div className="text-center font-medium text-3xl">Advance Search</div>

      <div className="lg:grid lg:grid-cols-2 p-5">
        <div className="flex flex-col lg:ml-10">
          <label className="mt-3" htmlFor="job">
            Job title
          </label>
          <input
            name="job"
            value={filters.job}
            onChange={handleChange}
            className="w-80 h-10 rounded-3xl border-2 border-gray-400 p-4"
            type="text"
            id="job"
          />

          <label className="mt-3" htmlFor="location">
            Location
          </label>
          <input
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="w-80 h-10 rounded-3xl border-2 border-gray-400 p-4"
            type="text"
            id="location"
          />

          <label className="mt-3" htmlFor="category">
            Categories
          </label>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="w-80 h-10 rounded-3xl border-2 border-gray-400"
            id="category"
          >
            <option value="">All</option>
            <option value="Finance & Accounting">Finance</option>
            <option value="Education">Education</option>
            <option value="Sales & Marketing">Sales & Marketing</option>
            <option value="It Service">It Service</option>
            <option value="Health & Care">Health & Care</option>
            <option value="Skilled Trades & Construction">
              Skilled Trades & Construction
            </option>
            <option value="Customer Service">Customer Service</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Project Management">Project Management</option>
          </select>

          <label className="mt-3" htmlFor="level">
            Level
          </label>
          <select
            name="level"
            value={filters.level}
            onChange={handleChange}
            className="w-80 h-10 rounded-3xl border-2 border-gray-400"
            id="level"
          >
            <option value="">All</option>
            <option value="senior">Senior</option>
            <option value="mid">Mid</option>
            <option value="junior">Junior</option>
          </select>

          <label className="mt-3" htmlFor="type">
            Job type
          </label>
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-80 h-10 rounded-3xl border-2 border-gray-400"
            id="type"
          >
            <option value="">All</option>
            <option value="onsite">Onsite</option>
            <option value="remote">Remote</option>
          </select>
        </div>

        <div className="mt-5">
          {filteredJobs && filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job._id} className="mb-4 border p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold">{job.companyname}</h3>
                <p>
                  {job.category} - {job.position}
                </p>
                <p>{job.location}</p>
                <button
                  className="font-medium hover:text-green-500"
                  onClick={() => handleClick(job._id)}
                >
                  apply
                </button>
              </div>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AdvanceSearch;
