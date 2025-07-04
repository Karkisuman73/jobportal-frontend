import { data } from '../data/data';
import Card from './Card';
import { motion } from "motion/react"

const PopularCategory = () => {
  return (
    <div className="py-8 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 mt-10">
        Popular job categories
      </h2>
      <motion.div className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-3 lg:px-45  " 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}>
        {data.map((result, i) => (
          <Card
            key={i}
            Icon={result.Icon}
            name={result.name}
            overview={result.overview}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PopularCategory;
