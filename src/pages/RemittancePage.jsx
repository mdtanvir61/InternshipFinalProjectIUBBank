import FAQSection from "../components/Sections/HomePageSections/FAQSection";
import ExchangeRate from "../components/Sections/RemittanceSection/ExchangeRate";
import RemittanceBanner from "../components/Sections/RemittanceSection/RemittanceBanner";
import RemittanceBenefits from "../components/Sections/RemittanceSection/RemittanceBenefits";
import RemittanceOurFeatures from "../components/Sections/RemittanceSection/RemittanceOurFeatures";
import RemittanceTestimonial from "../components/Sections/RemittanceSection/RemittanceTestimonials";
import SendRemittanceBack from "../components/Sections/RemittanceSection/SendRemittanceBack";
import GetStarted from "../components/Sections/HomePageSections/GetStarted";

const RemittancePage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <RemittanceBanner/>
      <SendRemittanceBack/>
      <ExchangeRate/>
      <RemittanceOurFeatures/>
      <RemittanceBenefits/>
      <RemittanceTestimonial/>
      <FAQSection/>
      <GetStarted/>
    </div>
  );
};

export default RemittancePage;