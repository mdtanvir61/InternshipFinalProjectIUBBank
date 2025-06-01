
const benefits = [
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="24" fill="#eaf3fc" />
        <g>
          <rect x="18" y="14" width="12" height="20" rx="6" fill="#2563eb" opacity="0.15" />
          <rect x="20" y="16" width="8" height="16" rx="4" fill="#2563eb" />
          <rect x="23" y="28" width="2" height="5" rx="1" fill="#fff" />
        </g>
        <g>
          <rect x="22" y="10" width="4" height="8" rx="2" fill="#2563eb" />
          <rect x="23" y="12" width="2" height="4" rx="1" fill="#fff" />
        </g>
      </svg>
    ),
    title: "No annual fees",
    desc: "Most good things in life are free. We value your hard-earned money too much to charge an annual fee.",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="24" fill="#eaf3fc" />
        <g>
          <circle cx="24" cy="24" r="10" stroke="#2563eb" strokeWidth="2" fill="none" />
          <text x="24" y="29" textAnchor="middle" fontSize="18" fill="#2563eb" fontWeight="bold">%</text>
          <line x1="16" y1="32" x2="32" y2="16" stroke="#2563eb" strokeWidth="2" />
        </g>
      </svg>
    ),
    title: "No foreign exchange fees",
    desc: "You may be in the different country, but part of you will always be home. Save as you swipe in two countries",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="24" fill="#eaf3fc" />
        <g>
          <rect x="14" y="20" width="20" height="8" rx="4" fill="#2563eb" opacity="0.15" />
          <rect x="16" y="22" width="16" height="4" rx="2" fill="#2563eb" />
          <circle cx="24" cy="30" r="2" fill="#2563eb" />
          <line x1="18" y1="26" x2="30" y2="26" stroke="#fff" strokeWidth="2" />
        </g>
      </svg>
    ),
    title: "No Deposit Needed",
    desc: "Good credit is for everyone. We just need your basic personal information, NID or passport for identification .",
  },
];

const CardBenefits = () => {
  return (
    <section className="w-full py-16 px-4 bg-[#f6fafd]">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <div className="text-green-700 font-semibold text-lg mb-2">
          Boost your savings with the right credit card
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#181f2a]">
          Access Endless Possibilities With<br />IUB Bank Card
        </h2>
        <p className="text-gray-600 text-lg">
          All your needs covered with a full range of credit and debit cards.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg flex flex-col items-center px-8 py-10 text-center"
          >
            <div className="mb-6">{benefit.icon}</div>
            <h3 className="font-bold text-xl mb-3 text-[#181f2a]">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardBenefits;