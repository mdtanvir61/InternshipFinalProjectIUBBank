import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";


const BusinessLoan = () => {
const navigate = useNavigate();
  return (
    <section className="w-full bg-white py-10 container">
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <p className="text-green-800 font-semibold text-lg mb-2">
            Business loan — without hidden fees &amp; charges
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            A business Loan, Just as You Need It
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Get business loans approved within days with transparent lending criteria and transparent processes.
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center text-lg text-gray-900">
              <CheckCircle2 className="text-green-600 mr-2 h-6 w-6" />
              Same day approval and multiple funding options
            </li>
            <li className="flex items-center text-lg text-gray-900">
              <CheckCircle2 className="text-green-600 mr-2 h-6 w-6" />
              Access loans without origination fees
            </li>
            <li className="flex items-center text-lg text-gray-900">
              <CheckCircle2 className="text-green-600 mr-2 h-6 w-6" />
              Borrow up to $250,000
            </li>
          </ul>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-8 py-3 text-base shadow transition"
          onClick={() => navigate("/register")}>
            Apply for a business loan
          </button>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-business-loan-Illus.50043ea3.png&w=1080&q=75"
            alt="Business Loan Illustration"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessLoan;