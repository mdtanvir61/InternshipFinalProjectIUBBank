import CardLimits from "../components/Sections/CardsSection/CardLimits";
import CardRewards from "../components/Sections/CardsSection/CardRewards";
import CardsBannerSection from "../components/Sections/CardsSection/CardsBannerSection";
import CardBenefits from "../components/Sections/CardsSection/CardsBenefits";
import CardsHeroSection from "../components/Sections/CardsSection/CardsHeroSection";
import CardTrackSmarter from "../components/Sections/CardsSection/CardTrackSmarter";
import CardTypes from "../components/Sections/CardsSection/CardTypes";
import FAQSection from "../components/Sections/HomePageSections/FAQSection";
import GetStarted from "../components/Sections/HomePageSections/GetStarted";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const CardsPage = () => {
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
      <CardsBannerSection/>
      <CardsHeroSection/>
      <CardBenefits/>
      <CardRewards/>
      <CardLimits/>
      <CardTypes/>
      <CardTrackSmarter/>
      <FAQSection/>
      <GetStarted/>
    </div>
  );
};

export default CardsPage;