import React, { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Check Your Eligibility",
    desc: "After you sign up, check your eligibility for our savings account. We offer a range of options to suit your needs.",
    svg: (
      <img
        src="https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhow-works-1.38166070.png&w=640&q=75"
        alt="Eligibility"
        className="w-full max-w-xs md:max-w-md"
      />
    ),
  },
  {
    number: 2,
    title: "Open Your Account",
    desc: "Open your account online in minutes. Provide your details and get started with your savings journey.",
    svg: (
      <img
        src="https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-car-loan-Illus.73d7c473.png&w=640&q=75"
        alt="Open Account"
        className="w-full max-w-xs md:max-w-md"
      />
    ),
  },
  {
    number: 3,
    title: "Start Saving",
    desc: "Deposit funds and start saving instantly. Enjoy the benefits of a secure and flexible savings account.",
    svg: (
      <img
        src="https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhow-works-3.d3548acc.png&w=640&q=75"
        alt="Start Saving"
        className="w-full max-w-xs md:max-w-md"
      />
    ),
  },
  {
    number: 4,
    title: "Get rewarded and watch your savings grow",
    desc: "Earn rewards and interest as your savings grow. Track your progress and reach your financial goals.",
    svg: (
      <img
        src="https://bankioo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhow-works-4.0a4b186d.png&w=640&q=75"
        alt="Grow Savings"
        className="w-full max-w-xs md:max-w-md"
      />
    ),
  },
];

const HowSavingsAccountWorks = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#f5faff] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-green-700 font-semibold mb-2 text-center text-lg">
          A Better Way to Save
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-[#181f2a]">
          How it works
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl">
          It&apos;s easier than you think. Follow the following simple easy steps:
        </p>
        <div className="flex flex-col md:flex-row gap-10 w-full items-center">
          {/* Left Steps Nav */}
          <div className="flex-1 flex flex-col gap-8">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="flex items-start gap-4 cursor-pointer group"
                onClick={() => setActive(idx)}
              >
                <div className="flex flex-col items-center">
                  <span
                    className={`w-14 h-14 flex items-center justify-center rounded-full text-2xl font-bold ${
                      active === idx
                        ? "bg-blue-700 text-white"
                        : "bg-[#232c43] text-white"
                    }`}
                  >
                    {step.number}
                  </span>
                  {idx !== steps.length - 1 && (
                    <span className="w-1 h-10 bg-[#232c43] opacity-30"></span>
                  )}
                </div>
                <div>
                  <div
                    className={`text-2xl font-bold mb-1 ${
                      active === idx ? "text-blue-700" : "text-[#181f2a]"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-gray-600 text-base max-w-md">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full hidden md:block">
              {steps[active].svg}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSavingsAccountWorks;