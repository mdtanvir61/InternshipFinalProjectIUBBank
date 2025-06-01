
import { useNavigate } from "react-router-dom";

const SendRemittanceBack = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <p className="text-green-800 font-bold text-lg mb-2">
            Simple. Transparent. Secure
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Send Remittance Back <br className="hidden sm:block" /> Home
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-8">
            Competitive rates, low fees, and the most reliable money transfer convenient way.
            You can receive money from abroad directly.
          </p>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-8 py-3 text-base shadow transition"
            onClick={() => navigate("/register")}
          >
            Send Remittance
          </button>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://cdn.create.vista.com/api/media/medium/643877864/stock-vector-remote-payroll-freelancer-filling-invoice-distance-job-payroll-money-transfer?token="
            alt="Send Remittance Illustration"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SendRemittanceBack;