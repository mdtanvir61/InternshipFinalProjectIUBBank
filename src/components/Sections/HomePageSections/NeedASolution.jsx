import { Link } from "react-router-dom";

const NeedASolution = () => (
  <section className="w-full bg-[#1657c2] py-12 md:py-20">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
      {/* Illustration */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpersonalized.6d340fd8.png&w=640&q=75"
          alt="Personalized Solution"
          className="max-w-xs md:max-w-sm lg:max-w-lg"
        />
      </div>
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need a Personalized Solution?
        </h2>
        <p className="mb-6 text-base md:text-lg">
          Get in touch with us, and we will help you to create the right one for your business or personal needs.
        </p>
        <Link
          to="/loans"
          className="inline-block bg-[#6ad0ff] text-[#1657c2] font-semibold px-8 py-3 rounded-full shadow hover:bg-[#4bbbe6] transition"
        >
          Apply for a loan
        </Link>
      </div>
    </div>
  </section>
);

export default NeedASolution;