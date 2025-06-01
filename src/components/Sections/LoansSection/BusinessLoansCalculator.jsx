import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MIN_LOAN = 1000;
const MAX_LOAN = 250000;
const DEFAULT_LOAN = 41311;
const TERMS = [6, 12, 18];

const BusinessLoanscalculator = () => {
  const navigate = useNavigate();

  const [loanAmount, setLoanAmount] = useState(DEFAULT_LOAN);
  const [selectedTerm, setSelectedTerm] = useState(18);

  // Simple interest calculation (customize as needed)
  const interestRate = 0.06; // 6% annual for demonstration
  const totalPayable = loanAmount * (1 + (interestRate * (selectedTerm / 12)));
  const monthlyInstallment = totalPayable / selectedTerm;

  return (
    <div className="relative w-full flex flex-col items-center bg-blue-50 py-12 px-2" id="business-loan-calculator" style={{scrollMarginTop: "72px"}}>
      {/* Left SVG */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-0">
        <svg width="180" height="260" viewBox="0 0 180 260" fill="none">
          <ellipse cx="90" cy="130" rx="90" ry="130" fill="#e3f0fb" />
        </svg>
      </div>
      {/* Right SVG */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-0">
        <svg width="180" height="260" viewBox="0 0 180 260" fill="none">
          <ellipse cx="90" cy="130" rx="90" ry="130" fill="#e3f0fb" />
        </svg>
      </div>
      <div className="relative bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Business Loan Calculator</h2>
        <p className="text-center text-gray-500 mb-8">
          Choose the business loan amount that you need ($1,000 to $250,000) and the payment period (6–18 months) that suits you best.
        </p>
        <div className="text-center text-xl md:text-2xl font-semibold mb-6">
          Business Loan Amount : <span className="text-green-600">${loanAmount.toLocaleString()}</span>
        </div>
        {/* Slider */}
        <input
          type="range"
          min={MIN_LOAN}
          max={MAX_LOAN}
          step={1}
          value={loanAmount}
          onChange={e => setLoanAmount(Number(e.target.value))}
          className="w-full accent-blue-700 mb-6"
        />
        {/* Terms */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          {TERMS.map(term => (
            <button
              key={term}
              onClick={() => setSelectedTerm(term)}
              className={`px-6 py-2 rounded-full border font-semibold transition
                ${selectedTerm === term
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white text-black border-gray-300 hover:border-blue-400"}
              `}
            >
              {term} Months
            </button>
          ))}
        </div>
        {/* Monthly Installment */}
        <div className="text-center text-lg md:text-xl font-semibold mb-6">
          Monthly instalment of <span className="text-green-600">${monthlyInstallment.toFixed(2)}</span>
        </div>
        {/* Apply Button */}
        <div className="flex justify-center">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full transition"
            onClick={() => navigate("/register")}>
            Apply for a business loan
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoanscalculator;