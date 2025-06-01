import HeroSection from "../components/Sections/HomePageSections/HeroSection";
import YourNeedsSection from "../components/Sections/HomePageSections/YourNeedsSection";
import PartnersSection from "../components/Sections/HomePageSections/PartnersSection";
import SafeInvestmentsSection from "../components/Sections/HomePageSections/SafeInvestmentsSection";
import LoansSection from "../components/Sections/HomePageSections/LoansSection";
import AccountsSection from "../components/Sections/HomePageSections/AccountsSection";
import CardsSection from "../components/Sections/HomePageSections/CardsSection";
import TakeTheLeapSection from "../components/Sections/HomePageSections/TakeTheLeapSection";
import NeedASolution from "../components/Sections/HomePageSections/NeedASolution";
import TestimonialSection from "../components/Sections/HomePageSections/TestimonialHome";
import FAQSection from "../components/Sections/HomePageSections/FAQSection";
import ActivitiesSection from "../components/Sections/HomePageSections/ActivitiesSection";
import MoreForYouSlider from "../components/Sections/HomePageSections/MoreForYouSlider";

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection/>
      <PartnersSection/>
      <SafeInvestmentsSection/>
      <YourNeedsSection/>
      <ActivitiesSection/>
      <AccountsSection/>
      <CardsSection/>
      <TakeTheLeapSection/>
      <LoansSection/>
      {/* <MoreForYouSlider/> */}
      <NeedASolution/>
      <TestimonialSection/>
      <FAQSection/>
    </div>
  );
};

export default HomePage;