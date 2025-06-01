import { useNavigate } from "react-router-dom";
import PersonalLoanBanner from '../../../Assets/TransferMoney.svg'

const PersonalLoan = () => {
const navigate = useNavigate();
  return (
    <section className="w-full bg-[#f6fafd] py-10 md:py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
          <img
            src={PersonalLoanBanner}
            alt="Personal Loan Illustration"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto"
          />
        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            We believe you are more <br className="hidden sm:block" /> than a number.
          </h1>
          <div className="flex flex-col sm:flex-row gap-8 mb-6 mt-4 justify-center md:justify-start">
            <div>
              <span className="text-blue-700 font-bold text-2xl md:text-3xl block">100M+</span>
              <span className="text-gray-700 text-base">Loans Given</span>
            </div>
            <div>
              <span className="text-blue-700 font-bold text-2xl md:text-3xl block">15000+</span>
              <span className="text-gray-700 text-base">Customers Served</span>
            </div>
            <div>
              <span className="text-blue-700 font-bold text-2xl md:text-3xl block">150</span>
              <span className="text-gray-700 text-base">Countries</span>
            </div>
          </div>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-8 py-3 text-base shadow transition"
           onClick={() => navigate("/register")}>
            Apply for a Personal loan
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default PersonalLoan;