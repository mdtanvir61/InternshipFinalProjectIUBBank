import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Dummy data for 9 unique testimonials
const testimonials = [
  {
    name: "Ayesha Khan",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "IUB Bank made sending money to my family so easy and affordable. The app is intuitive and the rates are great!",
  },
  {
    name: "Carlos Ramirez",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "Transfers are always quick and secure. I love the transparency and the support team is always helpful.",
  },
  {
    name: "Fatima Noor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "No hidden fees and instant transfers! I recommend IUB Bank to all my friends working abroad.",
  },
  {
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 4,
    text: "The best remittance experience I’ve had. The exchange rates are always fair and the process is seamless.",
  },
  {
    name: "Priya Patel",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text: "I can send money home anytime, anywhere. The app is fast and reliable. Thank you IUB Bank!",
  },
  {
    name: "Ahmed Ali",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 4,
    text: "I appreciate the security and the low fees. My family receives money instantly every time.",
  },
  {
    name: "Maria Garcia",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    text: "Excellent service and great customer support. IUB Bank is my go-to for all remittance needs.",
  },
  {
    name: "David Lee",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    text: "The process is so simple and fast. I feel confident knowing my money is safe with IUB Bank.",
  },
  {
    name: "Sofia Rossi",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 4,
    text: "I love the user-friendly interface and the quick transfers. Highly recommended for everyone!",
  },
];

const getStars = (count) => (
  <div className="flex mb-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <polygon points="10,1.5 12.59,7.36 18.9,7.97 14,12.26 15.18,18.44 10,15.27 4.82,18.44 6,12.26 1.1,7.97 7.41,7.36" />
      </svg>
    ))}
  </div>
);

const RemittanceTestimonial = () => (
  <section className="w-full py-16 px-4 bg-white">
    <div className="container mx-auto max-w-6xl relative">
      <div className="text-green-700 font-semibold text-lg text-center mb-2">
        Testimonials
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-3">
        Trusted by 2000+<br className="hidden md:block" /> Partners & Customers
      </h2>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Take a look at our past customers success stories. Our goal is to help you grow
      </p>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={24}
        pagination={{ clickable: true }}
        navigation={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-full">
              {getStars(t.rating)}
              <p className="text-gray-700 mb-6 flex-1">{t.text}</p>
              <div className="flex items-center gap-3 mt-2">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-100"
                  loading="lazy"
                />
                <span className="font-semibold text-base text-gray-900">{t.name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default RemittanceTestimonial;