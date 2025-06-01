const values = [
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="22" stroke="#fff" strokeWidth="4" fill="#1657c2" />
        <path d="M24 32v-4a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="20" r="3" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    title: "Customer First",
    desc: "We aim to provide our customers with top-notch service that helps them grow their business and put their best foot forward.",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="22" stroke="#fff" strokeWidth="4" fill="#1657c2" />
        <path d="M24 34s-8-6.5-8-12a8 8 0 0 1 16 0c0 5.5-8 12-8 12z" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    title: "Passion over Pedigree",
    desc: "We hire for passion, because passionate people can overcome any obstacle and acquire any knowledge necessary.",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="22" stroke="#fff" strokeWidth="4" fill="#1657c2" />
        <path d="M16 28l4 4 12-12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 28l-4 4-12-12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Commitment",
    desc: "Our first priority is to keep your money safe and secure. Every single aspect of our service is optimized to protect and grow your funds!",
  },
];

const OurValues = () => (
  <section className="w-full bg-[#f5faff] py-16 px-4">
    <div className="max-w-6xl mx-auto flex flex-col items-center">
      <div className="text-green-700 font-semibold mb-2 text-center text-lg">Our core values</div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-[#181f2a]">
        Our values help us set the bar for<br className="hidden md:block" />
        good banking high.
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl">
        Our values define us. They guide us in building and improving our product, hiring teammates, and serving our customers.
      </p>
      <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center">
        {values.map((v, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg px-8 py-8 w-full max-w-xs"
          >
            <div className="mb-6">{v.icon}</div>
            <div className="font-bold text-xl text-center mb-3 text-[#181f2a]">{v.title}</div>
            <div className="text-gray-600 text-center text-base">{v.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurValues;