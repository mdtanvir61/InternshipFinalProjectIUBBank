import React, { useState, useEffect } from "react";
import card1 from "../../../Assets/NewCard1.png";
import card2 from "../../../Assets/NewCard2.png";
import card3 from "../../../Assets/Gold_Bank_Card.png";
import { Link } from "react-router-dom";

const debitBenefits = [
  { icon: "💳", title: "Easy Payments", desc: "Make payments seamlessly anywhere." },
  { icon: "🔒", title: "Secure Transactions", desc: "Your money is always safe with us." },
  { icon: "🌍", title: "Global Access", desc: "Use your card worldwide with no hassle." },
  { icon: "⚡", title: "Instant Alerts", desc: "Get notified instantly for every transaction." },
];

const creditBenefits = [
  { icon: "💰", title: "Cashback Offers", desc: "Earn cashback on every spend." },
  { icon: "📈", title: "Credit Building", desc: "Improve your credit score easily." },
  { icon: "🛡️", title: "Fraud Protection", desc: "Advanced security for your purchases." },
  { icon: "🎁", title: "Rewards Program", desc: "Redeem points for exciting rewards." },
];

const cardImages = [
  { src: card1, alt: "Business Debit Card" },
  { src: card2, alt: "Credit Card" },
  { src: card3, alt: "Visa Card" },
];

const CardsSection = () => {
  const [activeTab, setActiveTab] = useState("credit");
  const [activeIndex, setActiveIndex] = useState(0);
  const benefits = activeTab === "credit" ? creditBenefits : debitBenefits;

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % cardImages.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Arrow handlers
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cardImages.length) % cardImages.length);
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cardImages.length);
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-10 px-2 sm:px-4 md:px-8 container">
      {/* Left: Card Slider */}
      <div className="flex-1 flex flex-col items-center justify-center mb-10 md:mb-0">
        <div className="relative w-full flex flex-col items-center">
          {/* Card Image with rotation */}
          <div className="w-full flex items-center justify-center min-h-[320px]">
            {cardImages.map((card, idx) => (
              <img
                key={idx}
                src={card.src}
                alt={card.alt}
                className={`absolute transition-all duration-500 ease-in-out
                  ${idx === activeIndex ? "opacity-100 z-10 scale-100 rotate-0" : "opacity-0 z-0 scale-90 rotate-12"}
                  w-[320px] h-[220px] object-contain`}
                style={{ left: 0, right: 0, margin: "auto" }}
              />
            ))}
          </div>
          {/* Get Started Button */}
          <Link
            to="/cards"
            className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow text-lg hover:bg-blue-800 transition"
          >
            Get Started Now
          </Link>
          {/* Slider Dots with Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f5faff] text-blue-500 hover:bg-blue-100 transition border-none shadow-none"
              aria-label="Previous card"
              style={{ boxShadow: "0 2px 8px 0 rgba(24, 144, 255, 0.04)" }}
            >
              <span className="text-2xl">&#8592;</span>
            </button>
            {cardImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-4 h-4 rounded-full mx-1 transition-all duration-200 border-none shadow-none
                  ${activeIndex === idx ? "bg-blue-400" : "bg-blue-100"}`}
                aria-label={`Show card ${idx + 1}`}
                style={{
                  outline: "none",
                  border: "none",
                  boxShadow: "none",
                }}
              />
            ))}
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f5faff] text-blue-500 hover:bg-blue-100 transition border-none shadow-none"
              aria-label="Next card"
              style={{ boxShadow: "0 2px 8px 0 rgba(24, 144, 255, 0.04)" }}
            >
              <span className="text-2xl">&#8594;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right: Card Info and Benefits */}
      <div className="flex-1 max-w-xl w-full flex flex-col items-start mt-4 md:mt-0">
        <h2 className="text-green-700 font-semibold mb-2">Boost your savings with the right credit card</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Access Endless<br />Possibilities with<br />IUB Bank Card</h1>
        <p className="text-gray-600 mb-6">All your needs covered with a full range of credit and debit cards.</p>
        {/* Toggle */}
        <div className="flex mb-6">
          <button
            className={`px-6 py-2 rounded-l-full border border-blue-600 font-semibold transition-colors duration-200 ${activeTab === "credit" ? "bg-blue-700 text-white" : "bg-white text-blue-700"}`}
            onClick={() => setActiveTab("credit")}
          >
            Credit Card
          </button>
          <button
            className={`px-6 py-2 rounded-r-full border border-blue-600 font-semibold transition-colors duration-200 ${activeTab === "debit" ? "bg-blue-700 text-white" : "bg-white text-blue-700"}`}
            onClick={() => setActiveTab("debit")}
          >
            Debit Card
          </button>
        </div>
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white/60 rounded-xl shadow border border-blue-100 backdrop-blur-md">
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <div className="font-bold text-lg mb-1 text-center text-blue-900">{benefit.title}</div>
              <div className="text-gray-500 text-center text-sm">{benefit.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;