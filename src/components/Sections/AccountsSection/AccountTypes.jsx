import { useNavigate } from "react-router-dom";

const accountTypes = [
  {
    rate: "0.25",
    name: "Easy Invest",
    fees: "$20 Account keeping fees",
    interest: "paid",
    deposits: "No minimum balance",
    access: "Online only",
  },
  {
    rate: "0.50",
    name: "Bonus Saver",
    fees: "$30 Account keeping fees",
    interest: "paid",
    deposits: "No minimum balance",
    access: "Online only",
  },
  {
    rate: "0.70",
    name: "Pension Plus",
    fees: "$60 Account keeping fees",
    interest: "paid",
    deposits: "No minimum balance",
    access: "Online only",
  },
];

const AccountTypes = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-green-700 font-semibold mb-2 text-center text-lg">
          Grow Your Confidence
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-[#181f2a]">
          Choose the account that<br />matches your needs
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl">
          We have a fine range of accounts to help you manage your finances seamlessly
        </p>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {accountTypes.map((type, idx) => (
            <div
              key={type.name}
              className="bg-white rounded-lg shadow-lg flex flex-col items-center px-8 py-10 w-full max-w-sm mx-auto"
            >
              <div className="mb-6 flex flex-col items-center">
                <div className="bg-blue-50 rounded-full w-40 h-40 flex flex-col justify-center items-center mb-2 pt-3">
                  <span className="text-gray-500 text-base mb-1 pt-2">You could earn:</span>
                  <span className="text-blue-700 text-4xl font-bold">{type.rate}</span>
                  <span className="text-green-700 text-base font-semibold ml-1">% <span className="text-xs">p.a</span></span>
                </div>
              </div>
              <div className="font-bold text-2xl text-center mb-4 text-[#181f2a]">{type.name}</div>
              <div className="w-full mb-2">
                <div className="font-semibold text-base text-[#181f2a]">Fees</div>
                <div className="text-gray-600 text-base border-b border-gray-200 pb-2 mb-2">{type.fees}</div>
              </div>
              <div className="w-full mb-2">
                <div className="font-semibold text-base text-[#181f2a]">Interest</div>
                <div className="text-gray-600 text-base border-b border-gray-200 pb-2 mb-2">{type.interest}</div>
              </div>
              <div className="w-full mb-2">
                <div className="font-semibold text-base text-[#181f2a]">Regular Deposits</div>
                <div className="text-gray-600 text-base border-b border-gray-200 pb-2 mb-2">{type.deposits}</div>
              </div>
              <div className="w-full mb-6">
                <div className="font-semibold text-base text-[#181f2a]">Access Your Funds</div>
                <div className="text-gray-600 text-base">{type.access}</div>
              </div>
              <button
                className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-800 transition mt-auto"
                onClick={() => navigate("/register")}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountTypes;