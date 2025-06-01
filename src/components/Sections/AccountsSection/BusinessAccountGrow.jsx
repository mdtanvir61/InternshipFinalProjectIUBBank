import { useNavigate } from "react-router-dom";
import BusinessAccountImg from '../../../Assets/Savings_Account.svg'

const benefits = [
  "Seamless Transactions & Payments",
  "Multi-user Access & Controls",
  "No Hidden Charges",
];

const BusinessAccountGrow = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#0a3bb8] py-16 px-4" id="business-account" style={{scrollMarginTop: "72px"}}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl">
        {/* Text Section */}
        <div className="flex-1 text-white max-w-xl">
          <div className="text-green-300 font-semibold mb-2 text-lg">
            Built for Ambitious Businesses
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Business Accounts<br />Made For You
          </h2>
          <p className="mb-6 text-blue-100 text-lg">
            Unlock the full potential of your business with an account designed for growth, flexibility, and control. Manage your finances, empower your team, and scale with confidence.
          </p>
          <ul className="mb-8 space-y-3">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-400 bg-opacity-20">
                  <svg width="18" height="18" fill="none">
                    <circle cx="9" cy="9" r="9" fill="#22c55e" />
                    <path d="M6 9.5l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-base md:text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
          <button className="bg-white text-[#0a3bb8] font-semibold px-8 py-3 rounded-full text-lg shadow hover:bg-blue-100 transition"
           onClick={() => navigate("/register")}>
            Open Your Business Account
          </button>
        </div>
        {/* Illustration Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={BusinessAccountImg}
            alt="Business Account Growth Illustration"
            className="w-full max-w-md h-auto"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessAccountGrow;