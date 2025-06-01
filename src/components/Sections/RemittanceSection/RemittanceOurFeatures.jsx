import React from "react";

const features = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
        {/* Dollar in hands */}
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16">
        <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
        <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"/>
      </svg>
      </span>
    ),
    title: "Affordable",
    desc: "Low fees on international money transfers — always",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
        {/* Star */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      </span>
    ),
    title: "Simple",
    desc: "We have an easy-to-use app and a team ready to help you",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
        {/* Lightning bolt */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
          <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z"/>
        </svg>
      </span>
    ),
    title: "Quick",
    desc: "Send money to your loved ones in minutes",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
        {/* Shield lock */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-safe-fill" viewBox="0 0 16 16">
          <path d="M9.778 9.414A2 2 0 1 1 6.95 6.586a2 2 0 0 1 2.828 2.828"/>
          <path d="M2.5 0A1.5 1.5 0 0 0 1 1.5V3H.5a.5.5 0 0 0 0 1H1v3.5H.5a.5.5 0 0 0 0 1H1V12H.5a.5.5 0 0 0 0 1H1v1.5A1.5 1.5 0 0 0 2.5 16h12a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 0zm3.036 4.464 1.09 1.09a3 3 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3 3 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3 3 0 0 1 0-3.476l-1.09-1.09a.5.5 0 1 1 .708-.708M14 6.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0"/>
        </svg>
      </span>
    ),
    title: "Secure",
    desc: "Our 4.8-star app store rating speaks for itself",
  },
];

const RemittanceOurFeatures = () => (
  <section className="w-full py-16 px-4 flex flex-col items-center container">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#0a3bb8]">
      Why Choose IUB Bank Remittance?
    </h2>
    <p className="text-center text-gray-500 mb-12 max-w-2xl">
      Experience the best way to send money internationally with IUB Bank. Enjoy low fees, simplicity, speed, and security—every time you transfer.
    </p>
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-center max-w-xs text-center">
          {feature.icon}
          <div className="font-bold text-lg mb-2">{feature.title}</div>
          <div className="text-gray-500">{feature.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default RemittanceOurFeatures;