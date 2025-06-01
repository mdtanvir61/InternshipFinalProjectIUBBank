

const steps = [
  {
    icon: (
      <svg width="48" height="48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#e3f0fb" />
        <rect x="14" y="16" width="20" height="16" rx="2" stroke="#1976D2" strokeWidth="2" />
        <path d="M18 24h12M18 28h8" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 20l2 2 4-4" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Fill the form",
    desc: "Provide basic information so we can get in touch with you.",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#e3f0fb" />
        <circle cx="24" cy="24" r="10" stroke="#1976D2" strokeWidth="2" />
        <path d="M20 24l4 4 6-7" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Get pre-qualified",
    desc: "Verify your ID and get a quick eligibility check with our loan specialist.",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#e3f0fb" />
        <rect x="16" y="16" width="16" height="16" rx="2" stroke="#1976D2" strokeWidth="2" />
        <path d="M24 20v8M20 24h8" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 16v-2M24 34v-2" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Send documents",
    desc: "Upload your documents securely and get approved quickly.",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#e3f0fb" />
        <rect x="14" y="26" width="20" height="8" rx="3" stroke="#1976D2" strokeWidth="2" />
        <rect x="18" y="22" width="12" height="6" rx="2" stroke="#1976D2" strokeWidth="2" />
        <circle cx="18" cy="34" r="2" fill="#1976D2" />
        <circle cx="30" cy="34" r="2" fill="#1976D2" />
      </svg>
    ),
    title: "Get your loan",
    desc: "Receive your funds and use them for your business or personal needs.",
  },
];

const HowLoansWork = () => (
  <section className="w-full py-16 px-4 flex flex-col items-center container">
    <div className="text-green-800 font-semibold text-lg text-center mb-2">
      A Better Way to Get a Loan
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
      How it works
    </h2>
    <p className="text-center text-gray-500 mb-12 max-w-2xl">
      It's easier than you think. Follow these simple steps to get your loan approved quickly and securely.
    </p>
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col items-center max-w-xs text-center">
          <div className="mb-4">{step.icon}</div>
          <div className="font-bold text-lg mb-2">{idx + 1}. {step.title}</div>
          <div className="text-gray-500">{step.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default HowLoansWork;