import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50 relative">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <div
                className={`w-full lg:w-1/2 lg:pr-12 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <div className="max-w-xl">
                  <h2 className="text-green-600 font-medium text-lg mb-3">
                    High-yield. Transparent. Compounding
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                   Growth Savings <span className="text-blue-600">4.5% APY</span>
                  </h1>
                  <p className="text-gray-600 text-lg mb-8">
                    Earn up to 10x the national deposit rate with no fees, no minimum deposits, and no hidden charges—plus, enjoy interest compounded daily for maximum growth.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                      to="/accounts"
                      className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-blue-800 hover:shadow-lg inline-flex items-center justify-center"
                    >
                      Open Account
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-100 hover:shadow border border-gray-200 inline-flex items-center justify-center"
                    >
                      Get in touch
                      <ChevronRight size={18} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className={`w-full lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <div className="relative pb-10">
                  <div className="w-full h-full bg-blue-200 rounded-full absolute -top-10 -right-10 opacity-20"></div>
                  <img
                    src="https://images.pexels.com/photos/342943/pexels-photo-342943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Digital Banking"
                    className="w-full h-auto rounded-lg shadow-xl relative z-10"
                  />
                  <div className="absolute bottom-1 -left-5 bg-blue-600 text-white p-4 rounded-lg shadow-xl z-20">
                    <p className="font-bold">24/7 Support</p>
                    <p className="text-sm text-blue-100">
                      Always ready to help
                    </p>
                  </div>
                  <div className="absolute top-10 -right-4 bg-white p-4 rounded-lg shadow-xl z-20">
                    <p className="font-bold text-green-600">
                      98% Customer Satisfaction
                    </p>
                    <p className="text-sm text-gray-600">
                      Based on recent surveys
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <div
                className={`w-full lg:w-1/2 lg:pr-12 ${isVisible ? "" : ""}`}
              >
                <div className="max-w-xl">
                  <h2 className="text-green-600 font-medium text-lg mb-3">
                    Safety. Growth. Trust
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Secured <span className="text-blue-600">Business Account</span>
                  </h1>
                  <p className="text-gray-600 text-lg mb-8">
                    Keep your money safe and growing with our secured business account designed for peace of mind.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                      to="/accounts"
                      className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-blue-800 hover:shadow-lg inline-flex items-center justify-center"
                    >
                      Open Account
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-100 hover:shadow border border-gray-200 inline-flex items-center justify-center"
                    >
                      Get in touch
                      <ChevronRight size={18} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className={`w-full lg:w-1/2 mt-12 lg:mt-0 ${
                  isVisible ? "" : ""
                }`}
              >
                <div className="relative pb-10">
                  <div className="w-full h-full bg-blue-200 rounded-full absolute -top-10 -right-10 opacity-20"></div>
                  <img
                    src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Digital Banking"
                    className="w-full h-auto rounded-lg shadow-xl relative z-10"
                  />
                  <div className="absolute bottom-1 -left-5 bg-blue-600 text-white p-4 rounded-lg shadow-xl z-20">
                    <p className="font-bold">24/7 Support</p>
                    <p className="text-sm text-blue-100">
                      Always ready to help
                    </p>
                  </div>
                  <div className="absolute top-10 -right-4 bg-white p-4 rounded-lg shadow-xl z-20">
                    <p className="font-bold text-green-600">
                      98% Customer Satisfaction
                    </p>
                    <p className="text-sm text-gray-600">
                      Based on recent surveys
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <div
                className={`w-full lg:w-1/2 lg:pr-12 ${isVisible ? "" : ""}`}
              >
                <div className="max-w-xl">
                  <h2 className="text-green-600 font-medium text-lg mb-3">
                    Convenience. Accessibility. Reliability
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    24/7 <span className="text-blue-600">ATM Service</span>
                  </h1>
                  <p className="text-gray-600 text-lg mb-8">
                    Enjoy 24/7 ATM access—banking convenience whenever you need it, day or night.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                      to="/accounts"
                      className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-blue-800 hover:shadow-lg inline-flex items-center justify-center"
                    >
                      Open Account
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-100 hover:shadow border border-gray-200 inline-flex items-center justify-center"
                    >
                      Get in touch
                      <ChevronRight size={18} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className={`w-full lg:w-1/2 mt-12 lg:mt-0 ${
                  isVisible ? "" : ""
                }`}
              >
                <div className="relative pb-10">
                  <div className="w-full h-full bg-blue-200 rounded-full absolute -top-10 -right-10 opacity-20"></div>
                  <img
                    src="https://images.pexels.com/photos/5999936/pexels-photo-5999936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="ATM"
                    className="w-full h-auto rounded-lg shadow-xl relative z-10"
                  />
                  <div className="absolute bottom-1 -left-5 bg-blue-600 text-white p-4 rounded-lg shadow-xl z-20">
                    <p className="font-bold">24/7 Support</p>
                    <p className="text-sm text-blue-100">
                      Always ready to help
                    </p>
                  </div>
                  <div className="absolute top-10 -right-4 bg-white p-4 rounded-lg shadow-xl z-20">
                    <p className="font-bold text-green-600">
                      98% Customer Satisfaction
                    </p>
                    <p className="text-sm text-gray-600">
                      Based on recent surveys
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <div
                className={`w-full lg:w-1/2 lg:pr-12 ${isVisible ? "" : ""}`}
              >
                <div className="max-w-xl">
                  <h2 className="text-green-600 font-medium text-lg mb-3">
                    Rewards. Flexibility. Priceless
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Card <span className="text-blue-600">Benefits</span>
                  </h1>
                  <p className="text-gray-600 text-lg mb-8">
                  Peace of mind for cardholders whether at home, travelling abroad or making everyday purchases.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                      to="/cards"
                      className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-blue-800 hover:shadow-lg inline-flex items-center justify-center"
                    >
                      Grab Your Card
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-100 hover:shadow border border-gray-200 inline-flex items-center justify-center"
                    >
                      Get in touch
                      <ChevronRight size={18} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className={`w-full lg:w-1/2 mt-12 lg:mt-0 ${
                  isVisible ? "" : ""
                }`}
              >
                <div className="relative pb-10">
                  <div className="w-full h-full bg-blue-200 rounded-full absolute -top-10 -right-10 opacity-20"></div>
                  <img
                    src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Card"
                    className="w-full h-auto rounded-lg shadow-xl relative z-10"
                  />
                  <div className="absolute bottom-1 -left-5 bg-blue-600 text-white p-4 rounded-lg shadow-xl z-20">
                    <p className="font-bold">24/7 Support</p>
                    <p className="text-sm text-blue-100">
                      Always ready to help
                    </p>
                  </div>
                  <div className="absolute top-10 -right-4 bg-white p-4 rounded-lg shadow-xl z-20">
                    <p className="font-bold text-green-600">
                      98% Customer Satisfaction
                    </p>
                    <p className="text-sm text-gray-600">
                      Based on recent surveys
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <div
                className={`w-full lg:w-1/2 lg:pr-12 ${isVisible ? "" : ""}`}
              >
                <div className="max-w-xl">
                  <h2 className="text-green-600 font-medium text-lg mb-3">
                    Cross-border. Transferability. Dependability
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Remittance <span className="text-blue-600">Services</span>
                  </h1>
                  <p className="text-gray-600 text-lg mb-8">
                    Send money home quickly, securely, and affordably with our trusted remittance services—connecting you to your loved ones, wherever they are.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                      to="/remittance"
                      className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-blue-800 hover:shadow-lg inline-flex items-center justify-center"
                    >
                      Send Remittance
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-100 hover:shadow border border-gray-200 inline-flex items-center justify-center"
                    >
                      Get in touch
                      <ChevronRight size={18} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className={`w-full lg:w-1/2 mt-12 lg:mt-0 ${
                  isVisible ? "" : ""
                }`}
              >
                <div className="relative pb-10">
                  <div className="w-full h-full bg-blue-200 rounded-full absolute -top-10 -right-10 opacity-20"></div>
                  <img
                    src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Assets"
                    className="w-full h-auto rounded-lg shadow-xl relative z-10"
                  />
                  <div className="absolute bottom-1 -left-5 bg-blue-600 text-white p-4 rounded-lg shadow-xl z-20">
                    <p className="font-bold">24/7 Support</p>
                    <p className="text-sm text-blue-100">
                      Always ready to help
                    </p>
                  </div>
                  <div className="absolute top-10 -right-4 bg-white p-4 rounded-lg shadow-xl z-20">
                    <p className="font-bold text-green-600">
                      98% Customer Satisfaction
                    </p>
                    <p className="text-sm text-gray-600">
                      Based on recent surveys
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
      {/* Custom Swiper Pagination below the hero section */}
      <div className="custom-swiper-pagination flex justify-center items-center pt-6 pb-2" />
    </section>
  );
};

export default HeroSection;