
import ApplyJob from "@/components/ApplyJob"
import Header from "../../components/Header"
import PopularCategory from "../../components/PopularCategory"
import PromotedCompanies from "../../components/PromotedCompanies"

const LandingPage = () => {
  return (
    <>
            <Header/>
            <PopularCategory />
            <ApplyJob/>
            <PromotedCompanies />
          </>
  )
}

export default LandingPage
