const benefits = [
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="28" fill="#eaf2ff" />
        <g>
          <circle cx="28" cy="28" r="8" stroke="#2563eb" strokeWidth="2" fill="none" />
          <text x="28" y="32" textAnchor="middle" fontSize="14" fill="#2563eb" fontWeight="bold">%</text>
          <line x1="22" y1="34" x2="34" y2="22" stroke="#2563eb" strokeWidth="2" />
        </g>
      </svg>
    ),
    title: "No Monthly Account Fees",
    desc: "So that every month, you can focus on investing in your ambitions",
  },

    {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="28" fill="#eaf2ff" />
        <g>
          <rect x="20" y="20" width="16" height="16" rx="4" stroke="#2563eb" strokeWidth="2" fill="none" />
          <path d="M28 28v-4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
          <circle cx="28" cy="32" r="2" fill="#2563eb" />
        </g>
      </svg>
    ),
    title: "No Minimum Balance Required",
    desc: "Taking the first step towards your dreams should be a breeze, not a burden.",
  },
  
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="28" fill="#eaf2ff" />
        <g>
          <rect x="20" y="24" width="16" height="8" rx="2" stroke="#2563eb" strokeWidth="2" fill="none" />
          <circle cx="28" cy="28" r="1.5" fill="#2563eb" />
          <circle cx="32" cy="28" r="1.5" fill="#2563eb" />
        </g>
      </svg>
    ),
    title: "No Deposit Needed",
    desc: "All we need is basic information about you, your NID and passport",
  },
];

const AccountBenefits = () => {
    return (
  <section className="w-full bg-blue-50 py-16 px-4">
    <div className="max-w-6xl mx-auto flex flex-col items-center">
      <div className="text-green-700 font-semibold mb-2 text-center text-lg">
        Open your account from anywhere in the world
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-[#181f2a]">
        An account, designed for you
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl">
        Power up your business and personal life with a full-stack online bank account that fits your needs.
      </p>
      <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="flex flex-col items-center px-6 py-8 bg-white rounded-lg shadow-lg w-full max-w-sm transition hover:shadow-xl"
          >
            <div className="mb-6">{b.icon}</div>
            <div className="font-bold text-xl text-center mb-3 text-[#181f2a]">{b.title}</div>
            <div className="text-gray-600 text-center text-base">{b.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}
export default AccountBenefits;