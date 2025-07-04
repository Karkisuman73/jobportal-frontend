
import image from "../../assets/image.png"
import PopularCategory from "../../components/PopularCategory";
import PromotedCompanies from "../../components/PromotedCompanies";
import Search from "@/components/Search";

const Homepage = () => {
  return (
    <>
  
      <div className=" flex">
      <img
        className=" drop-shadow-2xl ml-10 "
        src={image}
        alt="Some description"
      />
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-6xl font-bold text-center drop-shadow-2xl">The Easiest Way To Get Your New Job</p>
        <Search/>
      </div>
      <div>
      </div>
      <div>
        
        
      </div>
       </div>
      {/* <Header /> */}
      <PopularCategory />
      {/* <ApplyJob/> */}
      <PromotedCompanies />
      
    </>
  );
};

export default Homepage;
