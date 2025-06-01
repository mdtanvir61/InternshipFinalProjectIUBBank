import { Link } from "react-router-dom";
import AccountBanner from "../../../Assets/undraw_savings_uwjn.svg"

const AccountsBannerSection = () => {
   
 return (   
  <section className="relative w-full bg-[#f5faff] min-h-[380px] md:min-h-[440px] flex items-center justify-center overflow-hidden">
    {/* Left SVG background illustration */}
    <div className="absolute left-0 top-0 w-full h-full pointer-events-none select-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 1920 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g opacity="0.15">
          <rect x="100" y="60" width="320" height="180" rx="8" stroke="#1657c2" strokeWidth="4" fill="none"/>
          <path d="M120 220 Q180 120 300 180" stroke="#1657c2" strokeWidth="3" fill="none"/>
          <rect x="180" y="100" width="120" height="80" rx="4" stroke="#1657c2" strokeWidth="2" fill="none"/>
          <path d="M0 300 Q200 200 400 300" stroke="#1657c2" strokeWidth="2" fill="none"/>
          <path d="M0 400 Q300 350 600 400" stroke="#1657c2" strokeWidth="2" fill="none"/>
        </g>
      </svg>
    </div>
    {/* Right Piggy Bank Illustration */}
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
      <img
        src={AccountBanner}
        // src="../src/Assets/undraw_savings_uwjn.svg"
        alt="Piggy Bank"
        className="w-64 h-64 object-contain"
        style={{ background: "transparent" }}
        onError={e => {
          // fallback to uploaded image if needed
          e.target.src = "https://i.ibb.co/6bQw0kF/piggy-bank.png";
        }}
      />
    </div>
    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-6 md:px-12 py-12">
      {/* Title and Breadcrumb */}
      <div className="flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#181f2a] mb-4 text-center">Accounts</h1>
        <nav className="flex items-center text-blue-700 font-medium space-x-2 text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="text-blue-400">&#8594;</span>
          <span className="text-blue-900">Accounts</span>
        </nav>
      </div>
    </div>
  </section>
);
}
export default AccountsBannerSection;