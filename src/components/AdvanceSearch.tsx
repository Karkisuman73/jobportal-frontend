import React from "react";

const AdvanceSearch = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col ml-10">
          <div>Advance Search</div>
          <label className="mt-3" htmlFor="range">
            Time range
          </label>
          <input
            className="w-80 h-10 rounded-3xl border-2 border-gray-400 p-4 "
            type="text"
            id="range"
          />

          <label className="mt-3" htmlFor="job">
            Job title
          </label>
          <input
            className="w-80 h-10 rounded-3xl border-2 border-gray-400 p-4 "
            type="text"
            id="job"
          />

          <label className="mt-3" htmlFor="location">
            Location
          </label>
          <input
            className="w-80 h-10 rounded-3xl border-2 border-gray-400 p-4 "
            type="text"
            id="location"
          />

          <label className="mt-3" htmlFor="category">
            Categories
          </label>
          <select
            className="w-80 h-10 rounded-3xl border-2 border-gray-400 p-4"
            id="category"
          >
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="support">Support</option>
          </select>

          <label className="mt-3" htmlFor="level">
            Level
          </label>
          <select
            className="w-80 h-10 rounded-3xl border-2 border-gray-400 p-4 "
            id="level"
          >
            <option value="junior">Junior</option>
            <option value="Mid level">Mid level</option>
            <option value="senior">Senior</option>
          </select>

          <label className="mt-3" htmlFor="type">
            Job type
          </label>
          <select
            className="w-80 h-10 rounded-3xl border-2 border-gray-400 p-4 "
            id="type"
          >
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="onsite">Onsite</option>
            <option value="remote">Remote</option>
            <option value="internship">Internship</option>
          </select>
        </div>
      </form>

      
    </div>
  );
};

export default AdvanceSearch;
