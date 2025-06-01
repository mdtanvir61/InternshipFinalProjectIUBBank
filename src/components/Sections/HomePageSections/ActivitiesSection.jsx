import React, { useState } from 'react';
import { Play, TrendingUp, Sparkles } from 'lucide-react';

const ActivitiesSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          Our Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Main featured item with YouTube video */}
          <div className="lg:col-span-2 lg:row-span-2 relative rounded-xl overflow-hidden group cursor-pointer">
            <div className="relative w-full" style={{ paddingTop: '66.25%' }}>
              <iframe 
                src="https://www.youtube.com/embed/o4dGFPKtc58"
                title="Digital Banking Experience"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
              onClick={() => setIsPlaying(true)}
              style={{ cursor: isPlaying ? 'default' : 'pointer' }}
            >
              <div className="text-white p-6 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Play size={28} fill="white" className="ml-1" />
                </div>
                <h3 className="text-xl font-bold mb-2">Digital Banking Experience</h3>
                <p className="text-gray-200 text-sm">Discover how our digital solutions are transforming banking</p>
              </div>
            </div>
          </div>
          
          {/* Home Loans */}
          <div className="relative rounded-xl overflow-hidden cursor-pointer">
            <img 
              src="https://images.pexels.com/photos/8293750/pexels-photo-8293750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Home Loan"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-medium">Home Loans</h3>
                <p className="text-sm text-gray-200">Realize your dream home</p>
              </div>
            </div>
          </div>
          
          {/* Financial Growth */}
          <div className="relative rounded-xl overflow-hidden cursor-pointer bg-blue-600">
            <div className="p-6 text-white h-48 flex flex-col justify-center items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="font-medium text-center">Financial Growth</h3>
              <p className="text-sm text-center text-blue-100">Secure your future with us</p>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden cursor-pointer">
            <img 
              src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Business Banking"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-medium">Business Banking</h3>
                <p className="text-sm text-gray-200">Solutions for entrepreneurs</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden cursor-pointer">
            <img 
              src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Student Banking"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-medium">Student Banking</h3>
                <p className="text-sm text-gray-200">Special offers for students</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden cursor-pointer bg-amber-500">
            <div className="p-6 text-white h-48 flex flex-col justify-center items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Sparkles size={24} className="text-white" />
              </div>
              <h3 className="font-medium text-center">Discover Our Services</h3>
              <p className="text-sm text-center text-amber-100 mt-2">Explore the complete range of our offerings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;