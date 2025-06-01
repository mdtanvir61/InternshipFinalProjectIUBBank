import { useState } from "react";

const slides = [
  {
    title: "Unlimited Card Limit",
    desc: "Your journey to greatness shouldn’t be confined by credit limits! Which is why we provide a high credit limit.",
    img: "https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-left-Illus.39e08473.png&w=1080&q=75",
  },
  {
    title: "Flexible Repayment Options",
    desc: "Choose a repayment plan that fits your lifestyle and financial goals.",
    img: "https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcounter-Illus.5121033d.png&w=640&q=75",
  },
  {
    title: "Immediate Approval Proceess",
    desc: "Get your credit card approved in minutes with our seamless digital process.",
    img: "https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright-choice-Illus.e64d72bf.png&w=750&q=75",
  },
];

const CardLimits = () => {
  const [current, setCurrent] = useState(0);

  const goToPrev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToNext = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const goToSlide = (idx) => setCurrent(idx);

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 px-4 md:px-16 py-8 md:py-12">
          {/* Left Illustration */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src={slides[current].img}
              alt="Credit Limit Illustration"
              className="w-[220px] md:w-[300px] h-auto"
              loading="lazy"
            />
          </div>
          {/* Right Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#181f2a] mb-6 leading-tight">
              {slides[current].title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-lg">
              {slides[current].desc}
            </p>
            {/* Custom navigation */}
            <div className="flex items-center gap-2 mt-6">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-700 text-xl"
                aria-label="Previous testimonial"
                onClick={goToPrev}
              >
                ←
              </button>
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-3 h-3 rounded-full inline-block cursor-pointer transition-all ${
                    current === idx ? "bg-blue-400" : "bg-blue-200"
                  }`}
                ></span>
              ))}
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-700 text-xl"
                aria-label="Next testimonial"
                onClick={goToNext}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardLimits;