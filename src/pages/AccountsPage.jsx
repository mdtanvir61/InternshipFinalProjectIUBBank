import AccountsBannerSection from "../components/Sections/AccountsSection/AccountsBannerSection";
import AccountBenefits from "../components/Sections/AccountsSection/AccountsBenefits";
import AccountsHeroSection from "../components/Sections/AccountsSection/AccountsHeroSection";
import AccountTypes from "../components/Sections/AccountsSection/AccountTypes";
import BusinessAccountGrow from "../components/Sections/AccountsSection/BusinessAccountGrow";
import HowSavingsAccountWorks from "../components/Sections/AccountsSection/HowSavingsAccountWorks";
import SavingsAccountGrow from "../components/Sections/AccountsSection/SavingsAccountGrow";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FAQSection from "../components/Sections/HomePageSections/FAQSection";



const AccountsPage = () => {
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
    <div className="w-full">
      <AccountsBannerSection/>
      <AccountsHeroSection/>
      <AccountBenefits/>
      <SavingsAccountGrow/>
      <BusinessAccountGrow/>
      <HowSavingsAccountWorks/>
      <AccountTypes/>
      <FAQSection/>
    </div>
  );
};

export default AccountsPage;