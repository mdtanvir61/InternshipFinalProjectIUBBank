import React from "react";
import { Link } from "react-router-dom";

const loans = [
  {
    title: "Home Loans",
    icon: (
      <span className="inline-block bg-blue-100 rounded-full p-4 mb-4">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-add-fill" viewBox="0 0 16 16">
        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 1 1-1 0v-1h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 1 0"/>
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
        <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z"/>
      </svg>
      </span>
    ),
    features: ["Lowest interest rates", "Fast Loan Processing"],
  },
  {
    title: "Car Loans",
    icon: (
      <span className="inline-block bg-blue-100 rounded-full p-4 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
          <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
        </svg>
      </span>
    ),
    features: ["Competitive rates", "Quick Easy"],
  },
  {
    title: "Education Loans",
    icon: (
      <span className="inline-block bg-blue-100 rounded-full p-4 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings-fill" viewBox="0 0 16 16">
          <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
        </svg>
      </span>
    ),
    features: ["Pay back conveniently", "Fast Loan Processing"],
  },
  {
    title: "Business Loans",
    icon: (
      <span className="inline-block bg-blue-100 rounded-full p-4 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
          <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
        </svg>
      </span>
    ),
    features: ["Easy Approvals", "Full Assistance"],
  },
];

const LoansSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 md:px-8">
        {/* Left Side */}
        <div className="flex-1 max-w-xl">
          <h3 className="text-green-700 font-semibold mb-2 text-lg">Financial Planning</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
            Let's plan your finances<br />the right way
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Lending that doesn't weigh you down. We know how hard is it to start something new, that's why we have the perfect plan for you.
          </p>
          <Link
            to="/loans"
            className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-blue-800 transition-all"
          >
            Apply for a loan
          </Link>
        </div>
        {/* Right Side: Loan Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {loans.map((loan, idx) => (
            <div key={loan.title} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start w-full">
              {loan.icon}
              <h4 className="font-bold text-xl mb-3 text-gray-900">{loan.title}</h4>
              <ul className="space-y-2">
                {loan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700 text-base">
                    <span className="text-green-600 mr-2">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoansSection; 