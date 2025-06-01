import { useNavigate } from "react-router-dom";


const CardRewards = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#1856c9] pt-16 pb-24 px-4 relative">
      {/* Decorative shapes */}
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none select-none z-0">
        <svg width="320" height="320" className="absolute left-12 top-8 opacity-30" viewBox="0 0 320 320" fill="none">
          <path d="M160,10 Q210,60 160,110 Q110,160 160,210 Q210,260 160,310" stroke="#fff" strokeWidth="2" fill="none"/>
          <path d="M60,160 Q110,110 160,160 Q210,210 260,160" stroke="#fff" strokeWidth="2" fill="none"/>
        </svg>
        <svg width="300" height="300" className="absolute right-0 top-0 opacity-60" viewBox="0 0 300 300" fill="none">
          <circle cx="250" cy="50" r="100" fill="#4fc3f7" />
        </svg>
      </div>
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6">
          Rewards So Awesome,<br />You’ll be Spoiled for Choice
        </h2>

        <div className="mt-12 bg-white rounded-2xl shadow-xl px-6 py-10 md:py-12 md:px-12 flex flex-col items-center gap-10 max-w-4xl mx-auto">
          {/* Benefits Card */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
            {/* Benefit 1 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[#181f2a] mb-2">5%-10%</div>
              <div className="text-green-700 text-lg font-medium mb-1">Cashback</div>
            </div>
            {/* Benefit 2 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[#181f2a] mb-2">10k+</div>
              <div className="text-green-700 text-lg font-medium mb-1">Merchants</div>
            </div>
            {/* Benefit 3 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[#181f2a] mb-2">Giftcards</div>
              <div className="text-green-700 text-lg font-medium mb-1">For your friends &amp; family</div>
            </div>
          </div>
          {/* Apply Now Button */}
          <div className="w-full flex justify-center mt-6">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition" 
            onClick={() => navigate("/register")}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardRewards;