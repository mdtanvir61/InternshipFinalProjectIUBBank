import React from "react";

const needs = [
  {
    label: "Accounts",
    img: "https://brac-staging.singularitybd.net/_next/image?url=https%3A%2F%2Fbrac-backend.singularitybd.net%2Fuploads%2Fall%2FAccounts6811df561cd6c.png&w=256&q=75",
    retailLink: "##",
    smeLink: "##",
  },
  {
    label: "Cards",
    img: "https://brac-staging.singularitybd.net/_next/image?url=https%3A%2F%2Fbrac-backend.singularitybd.net%2Fuploads%2Fall%2FCards6811e01266b48.png&w=256&q=75",
    retailLink: "##",
    smeLink: "##",
  },
  {
    label: "Loan",
    img: "https://brac-staging.singularitybd.net/_next/image?url=https%3A%2F%2Fbrac-backend.singularitybd.net%2Fuploads%2Fall%2FLoan6811e04674d9d.png&w=256&q=75",
    retailLink: "##",
    smeLink: "##",
  },
  {
    label: "Deposits",
    img: "https://brac-staging.singularitybd.net/_next/image?url=https%3A%2F%2Fbrac-backend.singularitybd.net%2Fuploads%2Fall%2FDeposits6811e05b05427.png&w=256&q=75",
    retailLink: "##",
    smeLink: "##",
  },
  {
    label: "Bond",
    img: "https://brac-staging.singularitybd.net/_next/image?url=https%3A%2F%2Fbrac-backend.singularitybd.net%2Fuploads%2Fall%2FBond6811e074f2acd.png&w=256&q=75",
    retailLink: "##",
    smeLink: "##",
  },
];

const YourNeedsSection = () => {
  return (
    <div className="w-full flex flex-col items-center my-12">
      <h2 className="text-3xl md:text-4xl font-medium text-[#234] mb-8">Your Needs</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 w-full">
        {needs.map((need, idx) => (
          <div
            key={need.label}
            className="mb-7 lg:mb-0 md:min-w-[130px] lg:min-w-[160px] 2xl:min-w-[200px]"
          >
            <div className="w-full md:scale-100 transform transition-all duration-300 cursor-pointer relative group h-[250px] hover:h-[200px]">
              <div className="relative block rounded-[1.5rem]">
                <div className="relative z-20 px-2 flex justify-center items-center flex-col w-full h-[180px] bg-[#fff] rounded-[1.5rem] transition-all duration-500 group-hover:-translate-y-4 yourneed-boxshadow group-hover:yourneed-hover-boxshadow group-hover:h-[150px]
                shadow-lg">
                  <img
                    alt={need.label}
                    loading="lazy"
                    width="80"
                    height="80"
                    decoding="async"
                    className="w-[80px] h-[80px] object-contain transition-all duration-500 group-hover:scale-[0.8]"
                    src={need.img}
                    style={{ color: "transparent" }}
                  />
                  <p className="text-[#013C83] text-center line-clamp-1 group-hover:text-[#013C83] text-2xl font-light mt-2">
                    {need.label}
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 flex p-5 bg-[#00368d83] backdrop-blur-xl flex-col justify-end gap-1 overflow-hidden rounded-[25.11px] absolute top-0 left-0 h-[180px] w-full transition-all duration-500 group-hover:translate-y-[65px] md:group-hover:translate-y-[65px]">
                  <a
                    className="bg-[#fbfbffd8] backdrop-blur-[12px] hover:bg-[#c7deff] py-2 rounded-[10px] shadow-lg transition-all duration-300"
                    href={need.retailLink}
                  >
                    <p className="text-primary-900 text-base font-light text-center line-clamp-1">
                      Retail
                    </p>
                  </a>
                  <a
                    className="bg-[#fbfbffd8] backdrop-blur-[12px] hover:bg-[#c7deff] py-2 rounded-[10px] shadow-lg transition-all duration-300"
                    href={need.smeLink}
                  >
                    <p className="text-primary-900 text-base font-light text-center line-clamp-1">
                      SME
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourNeedsSection; 