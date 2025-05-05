import { Link, useLocation } from "react-router-dom";
import { data1 } from "../data/data1";
import { FaLocationArrow } from "react-icons/fa";
import Search from "../components/Search";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Explore = () => {
  const query = useQuery().get("q") || "";

  const searchdata = data1.filter((item) =>
    item.position.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <Search />
      <div className="mt-4 space-y-4">
        {searchdata.length > 0 ? (
          searchdata.map((item, i) => (
            <div
              key={i}
              className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition"
            >
              <div className="text-2xl font-semibold text-emerald-700">
                {item.position}
              </div>
              <div className="ml-2 text-gray-700 mt-1">{item.companyname}</div>
              <div className="ml-2 text-sm text-gray-500">{item.view}</div>

              <div className="flex flex-wrap gap-3 mt-4">
                <div className="bg-gray-200 text-sm px-4 py-1 rounded-full font-medium text-gray-700">
                  {item.type}
                </div>
                <div className="bg-gray-200 text-sm px-4 py-1 rounded-full font-medium text-gray-700">
                  {item.time}
                </div>
                <div className="bg-gray-200 text-sm px-4 py-1 rounded-full font-medium text-gray-700">
                  {item.level}
                </div>

                <Link to={`/details/${item.id}`} className="ml-auto">
                  <button className="flex items-center gap-2 border border-green-400 text-green-600 px-4 py-1 rounded-full hover:bg-green-50 transition">
                    Apply <FaLocationArrow />
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Explore;
