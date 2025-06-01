
const SavingsAccountGrow = () => {
    return (

  <section className="w-full bg-white py-16 px-4" id="savings-account" style={{scrollMarginTop: "72px"}}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Illustration */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsaving-account-Illu.ba3b46a9.png&w=640&q=75"
          alt="Savings Illustration"
          className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] object-contain"
          loading="lazy"
        />
      </div>
      {/* Content */}
      <div className="flex-1">
        <div className="text-green-700 font-semibold mb-2 text-left text-lg">
          Secure &amp; Grow Your Savings
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-[#181f2a]">
          Savings Accounts Made<br />for You
        </h2>
        <p className="text-gray-700 mb-6 text-base md:text-lg">
          Helping you save for your goals sooner, with accounts free from account keeping, management, and annual fees.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center text-base md:text-lg">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-600 mr-3">
              <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                <circle cx="9" cy="9" r="9" fill="#16a34a" />
                <path d="M5 9l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Free deposits and withdrawals
          </li>
          <li className="flex items-center text-base md:text-lg">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-600 mr-3">
              <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                <circle cx="9" cy="9" r="9" fill="#16a34a" />
                <path d="M5 9l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Your savings are protected at all times
          </li>
          <li className="flex items-center text-base md:text-lg">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-600 mr-3">
              <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                <circle cx="9" cy="9" r="9" fill="#16a34a" />
                <path d="M5 9l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Be eligible for a dividend, when paid
          </li>
        </ul>
      </div>
    </div>
  </section>
);}

export default SavingsAccountGrow;