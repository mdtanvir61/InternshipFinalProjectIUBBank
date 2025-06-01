import LoansBannerSection from "../components/Sections/LoansSection/LoansBannerSection";
import BusinessLoan from "../components/Sections/LoansSection/BusinessLoans";
import PersonalLoan from "../components/Sections/LoansSection/PersonalLoans";
import BusinessLoanscalculator from "../components/Sections/LoansSection/BusinessLoansCalculator";
import LoanSecurity from "../components/Sections/LoansSection/LoanSecurity";
import HowLoansWork from "../components/Sections/LoansSection/HowLoansWork";
import PersonalLoansCalculator from "../components/Sections/LoansSection/PersonalLoansCalculator";
import FAQSection from "../components/Sections/HomePageSections/FAQSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const LoansPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="w-full overflow-x-hidden">
      <LoansBannerSection/>
      <BusinessLoan/>
      <BusinessLoanscalculator/>
      <LoanSecurity/>
      <PersonalLoan/>
      <PersonalLoansCalculator/>
      <HowLoansWork/>
      <FAQSection/>
      
    </div>
  );
};

export default LoansPage;