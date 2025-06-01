import { useState, useEffect } from 'react';
import { BellRing, CheckCircle } from 'lucide-react';

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('partners-section');
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

  const partners = [
    { id: 1, name: 'Mastercard', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/200px-Mastercard_2019_logo.svg.png' },
    { id: 2, name: 'Visa', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png' },
    { id: 3, name: 'American Express', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png' },
    { id: 4, name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png' },
    { id: 5, name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/200px-Stripe_Logo%2C_revised_2016.svg.png' },
  ];

  return (
    <div>
      <section
        id="partners-section"
        className={`py-10 bg-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h3 className="text-gray-600 font-extrabold text-2xl mb-8">Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {partners.map(partner => (
                <div key={partner.id} className="transition hover:opacity-80">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div 
              className={`w-full lg:w-1/2 transition-all duration-1000 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="lg:pr-12 max-w-lg mx-auto lg:mx-0">
                <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center mb-6">
                  <BellRing size={24} />
                </div>
                <h3 className="text-green-600 font-medium mb-3">Smart Banking</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Real time Notifications</h2>
                <p className="text-gray-600 mb-8">
                  Your customers stay informed in real time with everything that's happening on their
                  accounts: payments, transfers, advice. Get visibility on your customers' flows to
                  anticipate their needs.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 h-6 w-6 mr-3 mt-0.5" />
                    <p className="text-gray-700">Cards that work all across the world.</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 h-6 w-6 mr-3 mt-0.5" />
                    <p className="text-gray-700">No ATM fees. No minimum balance. No overdrafts.</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 h-6 w-6 mr-3 mt-0.5" />
                    <p className="text-gray-700">Instant transaction alerts for better security.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className={`w-full lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-green-100 rounded-full opacity-50"></div>
                <img
                  src="https://images.pexels.com/photos/8353777/pexels-photo-8353777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Mobile Banking Notifications"
                  className="w-full h-auto rounded-2xl shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersSection;