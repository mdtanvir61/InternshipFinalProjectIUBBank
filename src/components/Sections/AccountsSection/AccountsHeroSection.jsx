import { useNavigate } from "react-router-dom";

const AccountsHeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-16 px-4 container">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <div className="text-green-700 font-semibold mb-2 text-left text-lg">
            The right financial help, at the right time
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#181f2a]">
            An Account You Can Truly
            Bank Upon
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Change the way you manage your money. We have a fine range of accounts to help you manage your finances seamlessly.
          </p>
          <button
            className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-800 transition"
            onClick={() => navigate("/register")}
          >
            Apply Now
          </button>
        </div>
        {/* Right Illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpersonalized-solution-bg.d0cb34a0.png&w=640&q=75"
            alt="Account Illustration"
            className="w-80 h-80 md:w-[420px] md:h-[420px] object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AccountsHeroSection;