import { promoteddata } from "../data/data";
import PromotedCompaniesCard from "./../components/PromotedCompanyCard";

const PromotedCompanies = () => {
  return (
    <div className="py-8 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Promoted Companies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {promoteddata.map((result, index) => (
          <PromotedCompaniesCard
            key={index}
            Icon={result.Icon}
            name={result.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotedCompanies;
