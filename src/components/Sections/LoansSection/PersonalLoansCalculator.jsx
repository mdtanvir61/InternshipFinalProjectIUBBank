import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MIN_LOAN = 1000;
const MAX_LOAN = 30000;
const DEFAULT_LOAN = 11337;
const TERMS = [
  { months: 12, apr: 0.0799 },
  { months: 18, apr: 0.0799 },
  { months: 24, apr: 0.0799 },
  { months: 36, apr: 0.0799 },
];

const features = [
  "No NID or credit history required",
  "Checking for rate won’t impact credit score",
  "No prepayment fees",
];

const PersonalLoansCalculator = () => {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState(DEFAULT_LOAN);
  const [selectedTerm, setSelectedTerm] = useState(TERMS[0].months);

  const apr = TERMS.find(t => t.months === selectedTerm)?.apr ?? 0.0799;

  // Monthly payment calculation using standard loan formula
  const monthlyRate = apr / 12;
  const n = selectedTerm;
  const monthlyPayment =
    (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));

  return (
    <div className="w-full bg-[#0a3bb8] py-0 px-0 overflow-x-hidden" id="personal-loan-calculator" style={{scrollMarginTop: "72px"}}>
      <div className="container mx-auto px-2">
        <div className="relative flex flex-col items-center pt-12 pb-6">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl border border-blue-200 z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">
              Put Your Plans into Action
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the Personal loan amount that you need ($1,000 to $30,000) and the payment period (12–36 months) that suits you best.
            </p>
            <div className="text-center text-2xl md:text-3xl font-semibold mb-6">
              Personal Loan Amount : <span className="text-green-600">${loanAmount.toLocaleString()}</span>
            </div>
            {/* Slider */}
            <input
              type="range"
              min={MIN_LOAN}
              max={MAX_LOAN}
              step={1}
              value={loanAmount}
              onChange={e => setLoanAmount(Number(e.target.value))}
              className="w-full accent-blue-700 mb-8"
            />
            {/* Terms */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
              {TERMS.map(term => (
                <button
                  key={term.months}
                  onClick={() => setSelectedTerm(term.months)}
                  className={`flex flex-col items-center px-8 py-4 rounded-2xl border transition font-semibold min-w-[160px]
                    ${selectedTerm === term.months
                      ? "bg-blue-700 text-white border-blue-700"
                      : "bg-white text-black border-blue-200 hover:border-blue-400"}
                  `}
                >
                  <span className="text-lg">{term.months} Months</span>
                  <span className={`text-xs mt-1 ${selectedTerm === term.months ? "text-blue-100" : "text-green-700"}`}>
                    Av. APR is {(term.apr * 100).toFixed(2)}%
                  </span>
                </button>
              ))}
            </div>
            {/* Monthly Payment */}
            <div className="text-center text-2xl md:text-2xl font-bold mb-8">
              Monthly Payment: <span className="text-green-700">${monthlyPayment ? monthlyPayment.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2}) : "0.00"}</span>
            </div>
            {/* Apply Button */}
            <div className="flex justify-center mb-2">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-full text-lg transition"
               onClick={() => navigate("/register")}>
                Apply for a Personal loan
              </button>
            </div>
          </div>
        </div>
        {/* Features Bar */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 bg-[#0a3bb8] pb-8 px-2 rounded-b-2xl max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white text-base whitespace-nowrap">
              <span className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                <svg width="14" height="14" fill="none"><circle cx="7" cy="7" r="7" fill="#fff"/><path d="M5 7l2 2 3-3" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalLoansCalculator;