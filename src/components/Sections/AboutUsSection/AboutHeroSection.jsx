import { useState, useEffect } from 'react';

const AboutHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const element = document.getElementById('about-hero-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="about-hero-section"
      className="w-full bg-white py-16 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 container">
        {/* Left Content */}
        <div className="flex-1">
          <div className="text-green-700 font-semibold mb-2 text-left text-lg">About Us</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#181f2a]">
            Your ally in achieving<br />
            ambition beyond<br />
            borders
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            We understand that with global ambition, comes global challenges, and we are here to bridge the gap by offering seamless cross-border financial services. Consider us your friendly digital guide to all things finance, helping you make the most of your money.
          </p>
          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="bg-white rounded-xl shadow-lg px-8 py-6 flex-1 text-center">
              <div className="text-3xl font-bold text-[#1657c2] mb-1">98%</div>
              <div className="text-gray-600 text-base">Customer<br />satisfaction</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg px-8 py-6 flex-1 text-center">
              <div className="text-3xl font-bold text-[#1657c2] mb-1">250M</div>
              <div className="text-gray-600 text-base">Monthly<br />active users</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg px-8 py-6 flex-1 text-center">
              <div className="text-3xl font-bold text-[#1657c2] mb-1">100K</div>
              <div className="text-gray-600 text-base">New Users<br />per week</div>
            </div>
          </div>
        </div>

        {/* Right Image with transition */}
        <div
          className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-12 lg:mt-0 transition-all duration-1000 delay-300 transform
            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
          `}
        >
          <div className="relative">
            <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-32 h-32 sm:w-64 sm:h-64 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-24 h-24 sm:w-48 sm:h-48 bg-green-100 rounded-full opacity-50"></div>
            <img
              src="https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Mobile Banking Notifications"
              className="w-full h-auto rounded-2xl shadow-xl relative z-10 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;