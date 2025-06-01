import React from "react";

const helpOptions = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
        {/* Handshake icon */}
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M20.29 8.567c.133.323.334.613.59.85v.002a3.536 3.536 0 0 1 0 5.166 2.442 2.442 0 0 0-.776 1.868 3.534 3.534 0 0 1-3.651 3.653 2.483 2.483 0 0 0-1.87.776 3.537 3.537 0 0 1-5.164 0 2.44 2.44 0 0 0-1.87-.776 3.533 3.533 0 0 1-3.653-3.654 2.44 2.44 0 0 0-.775-1.868 3.537 3.537 0 0 1 0-5.166 2.44 2.44 0 0 0 .775-1.87 3.55 3.55 0 0 1 1.033-2.62 3.594 3.594 0 0 1 2.62-1.032 2.401 2.401 0 0 0 1.87-.775 3.535 3.535 0 0 1 5.165 0 2.444 2.444 0 0 0 1.869.775 3.532 3.532 0 0 1 3.652 3.652c-.012.35.051.697.184 1.02ZM9.927 7.371a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2h-.01Zm5.889 2.226a1 1 0 0 0-1.414-1.415L8.184 14.4a1 1 0 0 0 1.414 1.414l6.218-6.217Zm-2.79 5.028a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd"/>
        </svg>
      </span>
    ),
    title: "Sales",
    email: "sales@iubbank.com",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
        {/* Headset icon */}
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z"/>
        </svg>

      </span>
    ),
    title: "Help & Support",
    email: "support@iubbank.com",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
        {/* Newspaper icon */}
        
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z" clip-rule="evenodd"/>
        </svg>

      </span>
    ),
    title: "Media & Press",
    email: "media@iubbank.com",
  },
];

const NeedMoreHelp = () => (
  <section className="w-full py-16 px-4 bg-blue-50">
    <div className="max-w-6xl mx-auto flex flex-col items-center">
      <div className="text-green-700 font-semibold text-lg text-center mb-2">
        You can reach out to us for all your
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-3 text-[#0a2540]">
        Need More Help?
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl">
        Queries, complaints and feedback. We will be happy to serve you
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {helpOptions.map((opt, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center border border-blue-200 rounded-xl bg-white p-8 transition hover:shadow-lg text-center"
          >
            {opt.icon}
            <div className="font-bold text-xl mb-1">{opt.title}</div>
            <div className="text-gray-600 text-base">{opt.email}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NeedMoreHelp;