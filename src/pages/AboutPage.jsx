import AboutBannerSection from "../components/Sections/AboutUsSection/AboutBannerSection";
import AboutHeroSection from "../components/Sections/AboutUsSection/AboutHeroSection";
import OurJourneySoFar from "../components/Sections/AboutUsSection/OurJourneySoFar";
import OurTeam from "../components/Sections/AboutUsSection/OurTeam";
import OurValues from "../components/Sections/AboutUsSection/OurValues";
import GetStarted from "../components/Sections/HomePageSections/GetStarted";



const AboutPage = () => {
  return (
    <div className="w-full">
      <AboutBannerSection/>
      <AboutHeroSection/>
      <OurValues/>
      <OurTeam/>
      <OurJourneySoFar/>
      <GetStarted/>
    </div>
  );
};

export default AboutPage;