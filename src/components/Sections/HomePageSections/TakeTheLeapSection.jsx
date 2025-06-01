import React from "react";
import { Link } from "react-router-dom";

const TakeTheLeapSection = () => {
  return (
    <section className="w-full flex justify-center items-center py-10 md:py-20 bg-blue-50 overflow-hidden px-10">
      {/* <div className="absolute inset-0 flex justify-center z-0 pointer-events-none mx-auto">
        <div className="w-full max-w-7xl px-4 sm:px-6 relative">
          <div className="w-full h-32 sm:h-40 md:h-48 bg-blue-700 rounded-b-none" />
          <div className="absolute right-0 top-0 w-24 h-24 sm:w-40 sm:h-40 md:w-72 md:h-72 bg-sky-400 rounded-full opacity-80" style={{ right: '-2rem', top: '-1rem' }} />
          <div className="absolute left-1/4 top-4 opacity-30">
            <svg width="120" height="60" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[300px] md:h-[180px]">
              <path d="M30 30 Q90 0 150 30 T150 70 Q90 100 30 70 T30 30" stroke="#fff" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div> */}
      <div className="relative z-10 w-full max-w-xl md:max-w-3xl mx-auto bg-white rounded-2xl shadow-xl px-4 md:px-8 py-8 md:py-12 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-green-800">Ready to make the leap?</h2>
        <h3 className="text-2xl md:text-5xl font-extrabold mb-8 text-gray-900">Let us help you.</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          <Link
            to="/accounts"
            className="bg-blue-700 text-white px-6 md:px-8 py-3 rounded-full font-semibold text-base md:text-lg shadow hover:bg-blue-800 transition-all w-full sm:w-auto"
          >
            Open Account
          </Link>
          <Link
            to="/contact"
            className="bg-white text-gray-800 px-6 md:px-8 py-3 rounded-full font-semibold text-base md:text-lg border border-gray-400 shadow hover:bg-gray-100 transition-all w-full sm:w-auto"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TakeTheLeapSection; 