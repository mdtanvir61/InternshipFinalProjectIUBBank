import { Link } from "react-router-dom";

const GetStarted = () => (
  <section className="w-full py-10 bg-transparent container">
    <div className="max-w-5xl mx-auto rounded-xl bg-[#1657c2] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 shadow-lg">
      {/* Text Content */}
      <div className="flex-1 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Ready to get started?
        </h2>
        <p className="mb-6 text-base md:text-lg">
          It only takes a few minutes to register your FREE IUB Bank account.
        </p>
        <Link
          to="/accounts"
          className="inline-block bg-[#6ad0ff] text-[#1657c2] font-semibold px-8 py-3 rounded-full shadow hover:bg-[#4bbbe6] transition"
        >
          Open an Account
        </Link>
      </div>
      {/* Illustration */}
      <div className="flex-1 justify-end mt-8 hidden md:mt-0 md:flex">
        <img
          src="https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fget-start.8356bb76.png&w=640&q=75"
          alt="Get Started Illustration"
          className="max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>
    </div>
  </section>
);

export default GetStarted;