import { data } from '../data/data';
import Card from './Card';

const PopularCategory = () => {
  return (
    <div className="py-8 px-4 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Most Popular Categories
      </h2>

      {/* Grid layout for categories */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {data.map((result, i) => (
          <Card
            key={i}
            Icon={result.Icon}
            name={result.name}
            overview={result.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
