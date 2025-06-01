import { useState } from "react";

const TIMELINE = [
  [
    {
      year: 2014,
      desc: "IUB Bank was established with a vision to provide innovative financial solutions to underserved communities. The bank opened its first branch in Dhaka with a small but dedicated team.",
    },
    {
      year: 2015,
      desc: "Customer trust began to build as IUB Bank introduced mobile banking services for easier access. The bank saw a 20% increase in new account openings.",
    },
    {
      year: 2016,
      desc: "IUB Bank expanded its services to include personal loans and credit cards, catering to a wider audience and enhancing customer satisfaction.",
    },
    {
      year: 2017,
      desc: "IUB Bank launched its first digital banking platform, allowing customers to manage their accounts online and access a range of financial services at their fingertips.",
    },
  ],
  [
    {
      year: 2018,
      desc: "IUB Bank introduced AI-driven chatbots for customer support, significantly reducing response times and improving user experience.",
    },
    {
      year: 2019,
      desc: "IUB Bank partnered with fintech companies to enhance its service offerings, including robo-advisory for investment management.",
    },
    {
      year: 2020,
      desc: "IUB Bank launched a new range of sustainable banking products, focusing on green financing and eco-friendly initiatives.",
    },
    {
      year: 2021,
      desc: "IUB Bank received multiple awards for its innovative approach to digital banking and customer service excellence.",
    },
  ],
  [
    {
      year: 2022,
      desc: "IUB Bank expanded its digital services to include cryptocurrency trading and investment options.",
    },
    {
      year: 2023,
      desc: "IUB Bank launched a comprehensive financial literacy program aimed at empowering customers with knowledge and skills.",
    },
    {
      year: 2024,
      desc: "IUB Bank introduced a new range of investment products tailored for young professionals and first-time investors.",
    },
    {
      year: 2025,
      desc: "IUB Bank expanded its presence internationally, opening branches in key financial hubs around the world.",
    },
  ],
];

const TimelineIcon = () => (
  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white mr-3">
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <g>
        <circle cx="12" cy="12" r="10" fill="#2563eb" />
        <path
          d="M8 12h8M12 8v8"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  </span>
);

const ArrowButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-700 hover:bg-blue-50 transition disabled:opacity-50 disabled:cursor-not-allowed`}
    aria-label={direction === "left" ? "Previous" : "Next"}
    type="button"
  >
    {direction === "left" ? (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M12 15l-5-5 5-5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M8 5l5 5-5 5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </button>
);

const OurJourneySoFar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#f5faff] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-green-700 font-semibold mb-2 text-center text-lg">
          Our journey so far
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-[#181f2a]">
          Everyone has a story behind. Here’s<br className="hidden md:block" />
          ours!
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl">
          For decades, the clearing of financial transactions remained unchanged and unchallenged. Bankio provide real-time payment and innovative banking services for their customers . Here's our company timeline:
        </p>
        {/* Timeline Swiper */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {TIMELINE[activeIndex].map((item, idx) => (
              <div
                key={item.year}
                className="bg-white rounded-xl shadow-lg px-6 py-8 flex flex-col items-start"
              >
                <div className="flex items-center mb-2">
                  <TimelineIcon />
                  <span className="text-2xl font-bold text-[#181f2a]">{item.year}</span>
                </div>
                <div className="text-gray-600 text-base">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            <ArrowButton
              direction="left"
              onClick={() => setActiveIndex((i) => Math.max(i - 1, 0))}
              disabled={activeIndex === 0}
            />
            <ArrowButton
              direction="right"
              onClick={() => setActiveIndex((i) => Math.min(i + 1, TIMELINE.length - 1))}
              disabled={activeIndex === TIMELINE.length - 1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourneySoFar;