import { ShieldCheck, CheckCircle } from 'lucide-react';

const SafeInvestmentsSection = () => {
  return (
    <section className="pb-16 md:pb-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* {Illustration} */}
          <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md w-full">
              <img
                src="https://logowik.com/content/uploads/images/iub-independent-university7110.jpg"
                alt="Safe Investments Illustration"
                className="w-full h-auto rounded-2xl shadow-xl mt-12"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col items-start">
            <ShieldCheck className="text-green-600 w-10 h-10 mb-6" />
            <h3 className="text-green-700 font-semibold mb-2">Safe Investments</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Better Way to Save & Invest
            </h2>
            <p className="text-gray-600 mb-6">
              IUB Bank helps over 2 thousand students achieve their financial goals by helping them save and invest with ease. Put that extra cash to use without putting it at risk with IUB Bank.
            </p>
            <ul className="space-y-4 mb-4">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 h-6 w-6 mr-3 mt-0.5" />
                <span className="text-gray-700">Profitable to Invest and Handy to manage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 h-6 w-6 mr-3 mt-0.5" />
                <span className="text-gray-700">Highest Returns on Your Investment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeInvestmentsSection; 