import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const slides = [
  {
    title: "Higher Studies",
    subtitle: "Student Loan",
    img: "https://brac-backend.singularitybd.net/uploads/all/MFY_6681304845bb84.jpg",
  },
  {
    title: "Personalized",
    subtitle: "Business Banking",
    img: "https://brac-backend.singularitybd.net/uploads/all/MFY_768130484a3aca.png",
  },
  {
    title: "Anti Money",
    subtitle: "Laundering (AML)",
    img: "https://brac-backend.singularitybd.net/uploads/all/MFY_168130484b5d5b.png",
  },
  {
    title: "Hassle-Free",
    subtitle: "Home Loan",
    img: "https://brac-backend.singularitybd.net/uploads/all/MFY_2681304849b427.png",
  },
  {
    title: "Loans",
    subtitle: "Entrepreneur Loan",
    img: "https://brac-backend.singularitybd.net/uploads/all/MFY_368130484add28.jpg",
  },
  {
    title: "Grow Business",
    subtitle: "SME Financing",
    img: "https://brac-backend.singularitybd.net/uploads/all/MFY_46813048461d5b.jpg",
  },
  {
    title: "Smart Era",
    subtitle: "Smart Solution",
    img: "https://brac-backend.singularitybd.net/uploads/all/MFY_5681304847ad68.jpg",
  },
  
];

const MoreForYouSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-[60px] pb-[40px] text-center mx-auto space-y-2">
          <h2 className="text-[#012C60] text-4xl font-bold mb-8">More For You</h2>
        </div>
        <div className="relative">
          {/* Custom navigation buttons */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-16 h-16 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-100 transition focus:outline-none"
            style={{ boxShadow: '0 2px 8px 0 rgba(16, 30, 54, 0.08)' }}
            aria-label="Previous"
          >
            <svg width="32" height="32" fill="none" stroke="#012C60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 28 10 16 20 4"></polyline></svg>
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-16 h-16 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-100 transition focus:outline-none"
            style={{ boxShadow: '0 2px 8px 0 rgba(16, 30, 54, 0.08)' }}
            aria-label="Next"
          >
            <svg width="32" height="32" fill="none" stroke="#012C60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="12 28 22 16 12 4"></polyline></svg>
          </button>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={7}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[EffectCoverflow, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1, centeredSlides: true },
              480: { slidesPerView: 1.5, centeredSlides: true },
              640: { slidesPerView: 3, centeredSlides: true },
              1024: { slidesPerView: 5, centeredSlides: true },
              1280: { slidesPerView: 7, centeredSlides: true },
            }}
            className="MoreForYou_swiper__pBY_9 w-full max-w-[1200px] mx-auto px-2"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className="w-full">
                <div className="h-[16rem] md:h-[20rem] xl:h-[28rem] rounded-[10px] md:rounded-[25px] overflow-hidden relative group transition-all duration-300">
                  <div className="p-1 rounded-3xl shadow-md bg-gradient-to-b from-[#999999]/80 to-[#999999]/80 relative group overflow-hidden h-full w-full">
                    <div className="h-full w-full relative overflow-hidden">
                      <img
                        src={slide.img}
                        alt={`${slide.title} |${slide.subtitle}|`}
                        className="object-cover rounded-3xl w-full h-full absolute left-0 top-0"
                        loading="lazy"
                      />
                    </div>
                    <div className="h-auto w-full bg-[#000]/40 rounded-2xl absolute top-0 right-0 left-0 bottom-0 flex flex-col justify-end">
                      <div className="p-6">
                        <p className="text-white text-lg md:text-xl font-light leading-normal">
                          {slide.title}
                        </p>
                        <p className="text-white text-xl md:text-2xl font-semibold mb-2 capitalize">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MoreForYouSlider; 