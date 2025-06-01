import { Link } from "react-router-dom";

const AboutBannerSection = () => (
  <section className="relative w-full bg-[#f5faff] min-h-[380px] md:min-h-[440px] flex items-center justify-center overflow-hidden">
    {/* Left background illustration (optional SVG or image) */}
    <div className="absolute left-0 top-0 w-full h-full pointer-events-none select-none z-0">
      {/* Example SVG background*/}
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
      
     {/* <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
     <img src="../src/Assets/undraw_team-work_i1f3.svg" alt="" />
    </div> */}

    {/* Right SVG Dollar Icon */}
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="36" stroke="#1657c2" strokeWidth="4" fill="#fff" opacity="0.9"/>
        <path d="M40 24V56" stroke="#1657c2" strokeWidth="4" strokeLinecap="round"/>
        <path d="M48 32C48 28.6863 44.4183 26 40 26C35.5817 26 32 28.6863 32 32C32 35.3137 35.5817 38 40 38C44.4183 38 48 40.6863 48 44C48 47.3137 44.4183 50 40 50C35.5817 50 32 47.3137 32 44" stroke="#1657c2" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-6 md:px-12 py-12">
      {/* Centered Title and Breadcrumb */}
      <div className="flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#181f2a] mb-4 text-center">About</h1>
        <nav className="flex items-center text-blue-700 font-medium space-x-2 text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="text-blue-400">&#8594;</span>
          <span className="text-blue-900">About Us</span>
        </nav>
      </div>
    </div>
  </section>
);

export default AboutBannerSection;