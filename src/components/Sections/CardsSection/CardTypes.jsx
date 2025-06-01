import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cardData = {
  credit: [
    {
      name: "Forrest Bell",
      type: "Mastercard",
      bg: "from-purple-400 to-pink-400",
      number: "**** **** **** 3728",
      expiry: "02/30",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
    },
    {
      name: "Blake Myers",
      type: "Mastercard",
      bg: "from-blue-400 to-indigo-400",
      number: "**** **** **** 3728",
      expiry: "02/30",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
    },
    {
      name: "Bruce Dean",
      type: "Visa",
      bg: "from-cyan-400 to-blue-300",
      number: "**** **** **** 3728",
      expiry: "02/30",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
    },
  ],
  debit: [
    {
      name: "Alice Smith",
      type: "Visa",
      bg: "from-green-400 to-teal-400",
      number: "**** **** **** 1234",
      expiry: "11/28",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
    },
    {
      name: "John Doe",
      type: "Mastercard",
      bg: "from-yellow-400 to-orange-400",
      number: "**** **** **** 5678",
      expiry: "07/27",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
    },
    {
      name: "Emma Lee",
      type: "Visa",
      bg: "from-pink-400 to-red-400",
      number: "**** **** **** 9101",
      expiry: "03/29",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
    },
  ],
};

const CardTypes = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("credit");

  return (
    <section className="w-full py-16 px-4 bg-blue-50" id="debit-card" style={{scrollMarginTop: "72px"}}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h4 className="text-green-700 font-semibold mb-2 text-center">
          Grow Your Confidence
        </h4>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
          Choose the Card that <br className="hidden md:block" />
          Matches Your Needs
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 text-center max-w-xl">
          We have a fine range of accounts to help you manage your finances seamlessly
        </p>
        {/* Toggle Button */}
        <div className="flex mb-10">
          <button
            className={`px-6 py-2 rounded-full border transition-all duration-200 font-semibold ${
              selected === "credit"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600"
            }`}
            onClick={() => setSelected("credit")}
          >
            Credit Card
          </button>
          <button
            className={`px-6 py-2 rounded-full border transition-all duration-200 font-semibold ml-2 ${
              selected === "debit"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600"
            }`}
            onClick={() => setSelected("debit")}
          >
            Debit Card
          </button>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {cardData[selected].map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-lg p-8 flex flex-col items-center bg-gradient-to-br ${card.bg} relative`}
            >
              <div className="flex items-center w-full mb-4">
                <span className="text-white font-bold text-lg">{card.type}</span>
                <img src={card.logo} alt={card.type} className="w-8 h-8 ml-auto" />
              </div>
              <div className="w-full mb-6">
                <div className="text-white text-xl font-semibold tracking-widest mb-2">
                  {card.number}
                </div>
                <div className="flex justify-between text-white text-xs">
                  <div>
                    <div className="opacity-70">Card Holder name</div>
                    <div className="font-bold">{card.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="opacity-70">Expiry date</div>
                    <div className="font-bold">{card.expiry}</div>
                  </div>
                </div>
              </div>
              <button className="mt-auto bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition"
                  onClick={() => navigate("/register")}>
                Get Started Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardTypes;