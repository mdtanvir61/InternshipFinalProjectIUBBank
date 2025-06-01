import { useNavigate } from "react-router-dom";

const CardTrackSmarter = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full bg-[#1853cb] overflow-hidden py-16 px-4 flex items-center justify-center">
      {/* Decorative fingerprint lines */}
      <svg
        className="absolute left-0 top-0 w-72 md:w-[400px] h-72 md:h-[400px] opacity-30"
        viewBox="0 0 400 400"
        fill="none"
        style={{ zIndex: 1 }}
      >
        <path
          d="M200,50 C120,50 50,120 50,200 C50,280 120,350 200,350 C280,350 350,280 350,200 C350,120 280,50 200,50 Z"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M200,80 C140,80 80,140 80,200 C80,260 140,320 200,320 C260,320 320,260 320,200 C320,140 260,80 200,80 Z"
          stroke="#fff"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      {/* Decorative blue circle */}
      <div className="absolute right-[-80px] top-[-80px] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#5ac6ff] rounded-full opacity-80 z-0"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl">
        <h2 className="text-white text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
          Now it’s time to switch old ways<br className="hidden md:block" />
          to track expenses smarter
        </h2>
        <p className="text-white text-base md:text-lg mb-6">
          What are you waiting for? It’s time to get started.
        </p>
        <button className="bg-white text-[#1853cb] font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-100 transition"
        onClick={() => navigate("/register")}>
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default CardTrackSmarter;