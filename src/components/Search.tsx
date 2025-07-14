import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/explore?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center border-2 border-b-black rounded-2xl ">
        <input
          className="p-3 focus:outline-none w-25  lg:w-55  "
          type="text"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value)}
          // onKeyUp={handleSearch}
        />
        {/* <input
          className="p-3 focus:outline-none border-l-2 w-40"
          type="text"
          placeholder="Enter location"
        /> */}
        <button
          // onClick={handleSearch}
          className="bg-black text-amber-50 pl-3 h-10 mt-1 pr-3 rounded-2xl mr-2"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
