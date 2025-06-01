const LoanSecurity = () => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-16 px-4">
      {/* Text */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <div className="text-green-800 font-semibold mb-2 text-lg">
          Security is our top priority
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          You’re safe with us
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Your business data is important to get financing. We keep your data safe with bank-level security and 256-bit encryption.
        </p>
      </div>
      {/* Image */}
      <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto">
        <div className="bg-cyan-100 rounded-full flex items-center justify-center" style={{ width: 320, height: 320 }}>
          <img
            src="https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsecurity-area-left.bb507b34.png&w=640&q=75"
            alt="Security Illustration"
            className="w-60 h-60 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default LoanSecurity;